import type { CharacterConfig } from '../types'
import { armorKingConfig } from './armor-king/config'
import { bryanConfig } from './bryan/config'

// Character registry - add new characters here
export const characters: Record<string, CharacterConfig> = {
  'armor-king': armorKingConfig,
  'bryan': bryanConfig,
}

// Helper to get all available characters
export function getAvailableCharacters() {
  return Object.values(characters)
}

// Helper to get a character by slug
export function getCharacter(slug: string): CharacterConfig | undefined {
  return characters[slug]
}
