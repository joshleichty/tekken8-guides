import { put } from '@vercel/blob'

export const config = {
  api: {
    bodyParser: false,
  },
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

  const contentType = req.headers['content-type'] || ''
  if (!contentType.startsWith('image/')) {
    return res.status(400).json({ error: 'Content-Type must be an image type' })
  }

  // Read raw body
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  const body = Buffer.concat(chunks)

  // 5 MB limit
  if (body.length > 5 * 1024 * 1024) {
    return res.status(413).json({ error: 'Image too large (5 MB max)' })
  }

  const ext = contentType.split('/')[1]?.replace('jpeg', 'jpg') || 'png'
  const now = new Date()
  const day = now.toISOString().slice(0, 10)
  const timestamp = now.toISOString().replace(/[:.]/g, '-')
  const pathname = `screenshots/${day}/${timestamp}.${ext}`

  const blob = await put(pathname, body, {
    access: 'public',
    contentType,
    addRandomSuffix: true,
  })

  return res.status(200).json({
    url: blob.url,
  })
}
