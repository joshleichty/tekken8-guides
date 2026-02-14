import { put } from '@vercel/blob'

interface NoteRequestBody {
  message?: unknown
  page?: unknown
  context?: unknown
  selectedText?: unknown
  selector?: unknown
  selectedHtml?: unknown
  website?: unknown
}

interface NoteRecord {
  id: string
  createdAt: string
  message: string
  page: string
  context: string
  selectedText: string | null
  selector: string | null
  selectedHtml: string | null
  userAgent: string | null
}

function asText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

const GITHUB_REPO = 'joshleichty/tekken8-guides'

/**
 * Fire a repository_dispatch event so the Claude workflow can pick it up.
 * Best-effort: if the token is missing or the request fails we still return
 * success to the user — the note is already stored in Blob.
 */
async function dispatchToGitHub(note: NoteRecord): Promise<void> {
  const token = process.env.GITHUB_PAT
  if (!token) {
    console.log('[dispatch] GITHUB_PAT is not set — skipping dispatch')
    return
  }

  console.log(`[dispatch] Firing repository_dispatch for note ${note.id}`)
  console.log(`[dispatch] Token prefix: ${token.slice(0, 8)}...`)

  try {
    const resp = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/dispatches`, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({
        event_type: 'user-note',
        client_payload: {
          note_id: note.id,
          message: note.message,
          page: note.page,
          context: note.context,
          selected_text: note.selectedText ?? '',
          selector: note.selector ?? '',
          selected_html: note.selectedHtml ?? '',
          created_at: note.createdAt,
        },
      }),
    })

    console.log(`[dispatch] GitHub responded ${resp.status} ${resp.statusText}`)
    if (!resp.ok) {
      const body = await resp.text().catch(() => '(no body)')
      console.log(`[dispatch] Error body: ${body}`)
    }
  } catch (err) {
    console.log(`[dispatch] Fetch failed: ${err instanceof Error ? err.message : String(err)}`)
  }
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let rawBody: NoteRequestBody = {}
  try {
    rawBody =
      typeof req.body === 'string'
        ? JSON.parse(req.body || '{}')
        : (req.body ?? {})
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' })
  }

  // Honeypot for basic bot filtering. Real users never fill this.
  if (asText(rawBody.website, 80)) {
    return res.status(200).json({ ok: true })
  }

  const message = asText(rawBody.message, 2000)
  const page = asText(rawBody.page, 300)
  const context = asText(rawBody.context, 80)
  const selectedText = asText(rawBody.selectedText, 600)
  const selector = asText(rawBody.selector, 600)
  const selectedHtml = asText(rawBody.selectedHtml, 12000)

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  const now = new Date()
  const day = now.toISOString().slice(0, 10)
  const timestamp = now.toISOString().replace(/[:.]/g, '-')
  const id = typeof crypto?.randomUUID === 'function'
    ? crypto.randomUUID()
    : Math.random().toString(16).slice(2)

  const noteRecord: NoteRecord = {
    id,
    createdAt: now.toISOString(),
    message,
    page: page || '/',
    context: context || 'General note',
    selectedText: selectedText || null,
    selector: selector || null,
    selectedHtml: selectedHtml || null,
    userAgent: asText(req.headers['user-agent'], 500) || null,
  }

  const pathname = `notes/${day}/${timestamp}-${id}.json`

  const blob = await put(pathname, JSON.stringify(noteRecord, null, 2), {
    access: 'public',
    contentType: 'application/json; charset=utf-8',
    addRandomSuffix: true,
  })

  // Trigger Claude agent in the background — don't block the response.
  dispatchToGitHub(noteRecord).catch(() => {})

  return res.status(200).json({
    ok: true,
    id,
    storedAt: blob.pathname,
  })
}
