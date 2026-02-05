import { list } from '@vercel/blob'

function parseLimitArg(argv, defaultLimit = 20) {
  const raw = argv.find(arg => arg.startsWith('--limit='))
  if (!raw) return defaultLimit
  const value = Number.parseInt(raw.slice('--limit='.length), 10)
  if (!Number.isFinite(value) || value <= 0) return defaultLimit
  return value
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('Missing BLOB_READ_WRITE_TOKEN in environment.')
    console.error('Tip: run `vercel env pull .env.local` and retry.')
    process.exit(1)
  }

  const limit = parseLimitArg(process.argv.slice(2), 20)
  const { blobs } = await list({ prefix: 'notes/' })
  const ordered = [...blobs].sort(
    (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
  )

  if (ordered.length === 0) {
    console.log('No notes found.')
    return
  }

  const selected = ordered.slice(0, limit)

  for (const blob of selected) {
    const response = await fetch(blob.url)
    if (!response.ok) {
      console.log(`[${blob.uploadedAt}] ${blob.pathname}`)
      console.log('  (failed to read note payload)')
      continue
    }

    const note = await response.json()
    const message = typeof note.message === 'string' ? note.message : '(no message)'
    const context = typeof note.context === 'string' ? note.context : 'Unknown'
    const page = typeof note.page === 'string' ? note.page : '/'
    const selector = typeof note.selector === 'string' ? note.selector : ''
    const selectedText = typeof note.selectedText === 'string' ? note.selectedText : ''
    const selectedHtml = typeof note.selectedHtml === 'string' ? note.selectedHtml : ''

    console.log(`[${blob.uploadedAt}] ${context} ${page}`)
    console.log(`  ${message}`)
    if (selector) console.log(`  selector: ${selector}`)
    if (selectedText) console.log(`  selectedText: ${selectedText}`)
    if (selectedHtml) {
      const preview = selectedHtml.length > 220 ? `${selectedHtml.slice(0, 220)}...` : selectedHtml
      console.log(`  selectedHtml: ${preview}`)
    }
  }
}

main().catch(error => {
  console.error('Failed to list notes:', error instanceof Error ? error.message : String(error))
  process.exit(1)
})
