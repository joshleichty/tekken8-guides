/**
 * Utility for loading optimized character images
 * 
 * Images are pre-processed from originals/ into public/characters/
 * Run `npm run process-images` to regenerate
 */

// Maps short character slugs (used in routes) to image folder names
const slugToImageFolder: Record<string, string> = {
  'alisa': 'alisa-bosconovitch',
  'armor-king': 'armor-king',
  'asuka': 'asuka-kazama',
  'azucena': 'azucena',
  'bryan': 'bryan-fury',
  'claudio': 'claudio-serafino',
  'clive': 'clive-rosfield',
  'devil-jin': 'devil-jin',
  'dragunov': 'sergei-dragunov',
  'eddy': 'eddy-gordo',
  'feng': 'feng-wei',
  'heihachi': 'heihachi-mishima',
  'hwoarang': 'hwoarang',
  'jack-8': 'jack-8',
  'jin': 'jin-kazama',
  'jun': 'jun-kazama',
  'kazuya': 'kazuya-mishima',
  'king': 'king',
  'kuma': 'kuma',
  'lars': 'lars-alexandersson',
  'law': 'marshall-law',
  'lee': 'lee-chaolan',
  'leo': 'leo-kliesen',
  'leroy': 'leroy-smith',
  'lidia': 'lidia-sobieska',
  'lili': 'lili',
  'nina': 'nina-williams',
  'panda': 'panda',
  'paul': 'paul-phoenix',
  'raven': 'raven',
  'reina': 'reina',
  'shaheen': 'shaheen',
  'steve': 'steve-fox',
  'victor': 'victor-chevalier',
  'xiaoyu': 'ling-xiaoyu',
  'yoshimitsu': 'yoshimitsu',
  'zafina': 'zafina',
}

type ImageSize = 128 | 256 | 512 | 1024

/**
 * Get the URL for a character's image
 */
export function getCharacterImageUrl(slug: string, size: ImageSize = 256): string | undefined {
  const folder = slugToImageFolder[slug]
  if (!folder) return undefined
  return `/characters/${folder}/${size}.webp`
}

/**
 * Get srcset for responsive images
 */
export function getCharacterImageSrcSet(slug: string): string | undefined {
  const folder = slugToImageFolder[slug]
  if (!folder) return undefined
  
  const sizes: ImageSize[] = [128, 256, 512, 1024]
  return sizes
    .map(size => `/characters/${folder}/${size}.webp ${size}w`)
    .join(', ')
}

/**
 * Check if a character has an optimized image available
 */
export function hasCharacterImage(slug: string): boolean {
  return slug in slugToImageFolder
}
