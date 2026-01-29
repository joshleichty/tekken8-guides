import type { CharacterConfig } from '../../types'
import { Chapter1 } from './chapters/Chapter1'
import { Chapter2 } from './chapters/Chapter2'
import { Chapter3 } from './chapters/Chapter3'
import { Chapter4 } from './chapters/Chapter4'
import { Chapter5 } from './chapters/Chapter5'
import { Chapter6 } from './chapters/Chapter6'
import { Chapter7 } from './chapters/Chapter7'
import { Chapter8 } from './chapters/Chapter8'
import { Chapter9 } from './chapters/Chapter9'
import { Chapter10 } from './chapters/Chapter10'
import { Chapter11 } from './chapters/Chapter11'
import { Chapter12 } from './chapters/Chapter12'
import { Chapter13 } from './chapters/Chapter13'
import { Chapter14 } from './chapters/Chapter14'
import { Chapter15 } from './chapters/Chapter15'
import { Chapter16 } from './chapters/Chapter16'

export const yoshimitsuConfig: CharacterConfig = {
  slug: 'yoshimitsu',
  name: 'Yoshimitsu',
  subtitle: 'Mechanized Space Ninja — Tekken 8 Season 2',
  icon: '🗡️',
  description: 'The unpredictable sword saint. Yoshimitsu masters the art of chaos — keepout, panic tools, and stances that let him play Tekken like no one else.',
  
  theme: {
    name: 'yoshimitsu',
    colors: {
      // Yoshimitsu's theme: Mystical purple with toxic green accents
      accent: '#a855f7',           // Purple
      accentDim: '#7c3aed',
      accentSecondary: '#22c55e',  // Toxic green (for poison breath, healing)
      accentSecondaryDim: '#16a34a',
      bgPrimary: '#030712',        // Near black
      bgSecondary: '#0c0a1f',      // Deep purple-black
      bgCard: '#1a1533',           // Dark purple
      bgCardHover: '#2d2352',      // Lighter purple
      textPrimary: '#f1f5f9',      // Slate 100
      textSecondary: '#94a3b8',    // Slate 400
      textMuted: '#64748b',        // Slate 500
      border: '#3b2d5e',           // Purple border
      characterGlow: 'rgba(168, 85, 247, 0.25)',
      heatGlow: 'rgba(34, 197, 94, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'Meet Yoshimitsu', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'First Buttons', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Keepout Tools', section: 'Foundation', content: Chapter3 },
    
    // Phase 2: Lows & Strings
    { id: 4, title: 'Low Attacks', section: 'Lows & Strings', content: Chapter4 },
    { id: 5, title: 'Important Strings', section: 'Lows & Strings', content: Chapter5 },
    
    // Phase 3: Launchers & Combos
    { id: 6, title: 'Launchers', section: 'Launchers & Combos', content: Chapter6 },
    { id: 7, title: 'Core Combos', section: 'Launchers & Combos', content: Chapter7 },
    
    // Phase 4: Panic Tools (Yoshi's signature)
    { id: 8, title: 'Flash (1+4)', section: 'Panic Tools', content: Chapter8 },
    { id: 9, title: 'Manji Spin', section: 'Panic Tools', content: Chapter9 },
    
    // Phase 5: Stances
    { id: 10, title: 'Dragonfly Stance', section: 'Stances', content: Chapter10 },
    { id: 11, title: 'Kincho Stance', section: 'Stances', content: Chapter11 },
    { id: 12, title: 'Other Stances', section: 'Stances', content: Chapter12 },
    
    // Phase 6: Mastery
    { id: 13, title: 'Punishment', section: 'Mastery', content: Chapter13 },
    { id: 14, title: 'Heat System', section: 'Mastery', content: Chapter14 },
    { id: 15, title: 'Wall Game & Oki', section: 'Mastery', content: Chapter15 },
    { id: 16, title: 'Complete Yoshimitsu', section: 'Mastery', content: Chapter16 },
  ],
}
