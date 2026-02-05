import { put } from '@vercel/blob'

interface NoteRequestBody {
  message?: unknown
  page?: unknown
  context?: unknown
  selectedText?: unknown
  selector?: unknown
  website?: unknown
}

function asText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
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

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  const now = new Date()
  const day = now.toISOString().slice(0, 10)
  const timestamp = now.toISOString().replace(/[:.]/g, '-')
  const id = typeof crypto?.randomUUID === 'function'
    ? crypto.randomUUID()
    : Math.random().toString(16).slice(2)

  const noteRecord = {
    id,
    createdAt: now.toISOString(),
    message,
    page: page || '/',
    context: context || 'General note',
    selectedText: selectedText || null,
    selector: selector || null,
    userAgent: asText(req.headers['user-agent'], 500) || null,
  }

  const pathname = `notes/${day}/${timestamp}-${id}.json`

  const blob = await put(pathname, JSON.stringify(noteRecord, null, 2), {
    access: 'public',
    contentType: 'application/json; charset=utf-8',
    addRandomSuffix: true,
  })

  return res.status(200).json({
    ok: true,
    id,
    storedAt: blob.pathname,
  })
}
