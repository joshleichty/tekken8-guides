import type { CharacterConfig, CounterConfig } from '../types'
import { alisaConfig } from './alisa/config'
import { azucenaConfig } from './azucena/config'
import { armorKingConfig } from './armor-king/config'
import { bryanConfig } from './bryan/config'
import { cliveConfig } from './clive/config'
import { dragunovConfig } from './dragunov/config'
import { eddyConfig } from './eddy/config'
import { fahkumramConfig } from './fahkumram/config'
import { hwoarangConfig } from './hwoarang/config'
import { jack8Config } from './jack-8/config'
import { jinConfig } from './jin/config'
import { junConfig } from './jun/config'
import { kingConfig } from './king/config'
import { kazuyaConfig } from './kazuya/config'
import { larsConfig } from './lars/config'
import { lawConfig } from './law/config'
import { leeConfig } from './lee/config'
import { liliConfig } from './lili/config'
import { paulConfig } from './paul/config'
import { reinaConfig } from './reina/config'
import { victorConfig } from './victor/config'
import { yoshimitsuConfig } from './yoshimitsu/config'
import { xiaoyuConfig } from './xiaoyu/config'
import { zafinaConfig } from './zafina/config'

// Counter guide imports
import { alisaCounterConfig } from './alisa/counter/config'
import { victorCounterConfig } from './victor/counter/config'

// Character registry - add new characters here
export const characters: Record<string, CharacterConfig> = {
  alisa: alisaConfig,
  'azucena': azucenaConfig,
  'armor-king': armorKingConfig,
  'bryan': bryanConfig,
  'clive': cliveConfig,
  'dragunov': dragunovConfig,
  'eddy': eddyConfig,
  'fahkumram': fahkumramConfig,
  'hwoarang': hwoarangConfig,
  'jack-8': jack8Config,
  'jin': jinConfig,
  'jun': junConfig,
  'king': kingConfig,
  'kazuya': kazuyaConfig,
  'lars': larsConfig,
  'law': lawConfig,
  'lee': leeConfig,
  'lili': liliConfig,
  'paul': paulConfig,
  'reina': reinaConfig,
  'victor': victorConfig,
  'yoshimitsu': yoshimitsuConfig,
  'xiaoyu': xiaoyuConfig,
  'zafina': zafinaConfig,
}

// Counter guide registry - add counter guides here
export const counterGuides: Record<string, CounterConfig> = {
  'alisa': alisaCounterConfig,
  'victor': victorCounterConfig,
}

// Helper to get all available characters
export function getAvailableCharacters() {
  return Object.values(characters)
}

// Helper to get a character by slug
export function getCharacter(slug: string): CharacterConfig | undefined {
  return characters[slug]
}

// Helper to get a counter guide by character slug
export function getCounterGuide(slug: string): CounterConfig | undefined {
  return counterGuides[slug]
}

// Helper to check if a character has a counter guide
export function hasCounterGuide(slug: string): boolean {
  return slug in counterGuides
}

// Helper to get all characters with counter guides
export function getAvailableCounters() {
  return Object.values(counterGuides)
}
