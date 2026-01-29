import type { CharacterConfig } from '../types'
import { armorKingConfig } from './armor-king/config'
import { bryanConfig } from './bryan/config'
import { fahkumramConfig } from './fahkumram/config'
import { hwoarangConfig } from './hwoarang/config'
import { jinConfig } from './jin/config'
import { lawConfig } from './law/config'
import { victorConfig } from './victor/config'

// Character registry - add new characters here
export const characters: Record<string, CharacterConfig> = {
  'armor-king': armorKingConfig,
  'bryan': bryanConfig,
  'fahkumram': fahkumramConfig,
  'hwoarang': hwoarangConfig,
  'jin': jinConfig,
  'law': lawConfig,
  'victor': victorConfig,
}

// Helper to get all available characters
export function getAvailableCharacters() {
  return Object.values(characters)
}

// Helper to get a character by slug
export function getCharacter(slug: string): CharacterConfig | undefined {
  return characters[slug]
}
