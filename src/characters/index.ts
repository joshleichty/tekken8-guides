import type { CharacterConfig } from '../types'
import { armorKingConfig } from './armor-king/config'
import { bryanConfig } from './bryan/config'
import { cliveConfig } from './clive/config'
import { dragunovConfig } from './dragunov/config'
import { fahkumramConfig } from './fahkumram/config'
import { hwoarangConfig } from './hwoarang/config'
import { jack8Config } from './jack-8/config'
import { jinConfig } from './jin/config'
import { kingConfig } from './king/config'
import { lawConfig } from './law/config'
import { reinaConfig } from './reina/config'
import { victorConfig } from './victor/config'
import { yoshimitsuConfig } from './yoshimitsu/config'
import { zafinaConfig } from './zafina/config'

// Character registry - add new characters here
export const characters: Record<string, CharacterConfig> = {
  'armor-king': armorKingConfig,
  'bryan': bryanConfig,
  'clive': cliveConfig,
  'dragunov': dragunovConfig,
  'fahkumram': fahkumramConfig,
  'hwoarang': hwoarangConfig,
  'jack-8': jack8Config,
  'jin': jinConfig,
  'king': kingConfig,
  'law': lawConfig,
  'reina': reinaConfig,
  'victor': victorConfig,
  'yoshimitsu': yoshimitsuConfig,
  'zafina': zafinaConfig,
}

// Helper to get all available characters
export function getAvailableCharacters() {
  return Object.values(characters)
}

// Helper to get a character by slug
export function getCharacter(slug: string): CharacterConfig | undefined {
  return characters[slug]
}
