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

export const zafinaConfig: CharacterConfig = {
  slug: 'zafina',
  name: 'Zafina',
  subtitle: 'The Mystic Stargazer — Tekken 8',
  icon: '🔮',
  description: 'An evasive stance character who wields ancient assassination arts and the dark power of Azazel. Master her three stances, exceptional movement, and continuous mixups to overwhelm opponents with relentless pressure.',
  
  theme: {
    name: 'zafina',
    colors: {
      // Zafina's theme: Deep purple/violet with mystical gold accents
      accent: '#a855f7',           // Violet (Azazel power)
      accentDim: '#7c3aed',
      accentSecondary: '#d4af37',  // Mystical gold
      accentSecondaryDim: '#b8860b',
      bgPrimary: '#0a0612',        // Deep purple-black
      bgSecondary: '#0f0a18',
      bgCard: '#1a1225',
      bgCardHover: '#251a35',
      textPrimary: '#f5f3ff',      // Light violet tint
      textSecondary: '#a8a0b8',
      textMuted: '#6b6080',
      border: '#3d2d55',
      characterGlow: 'rgba(168, 85, 247, 0.25)',
      heatGlow: 'rgba(212, 175, 55, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'Meet Zafina', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'First Buttons', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Core Mids & Lows', section: 'Foundation', content: Chapter3 },
    
    // Phase 2: The Three Stances
    { id: 4, title: 'Scarecrow Stance', section: 'Stances', content: Chapter4 },
    { id: 5, title: 'Mantis Stance', section: 'Stances', content: Chapter5 },
    { id: 6, title: 'Tarantula Stance', section: 'Stances', content: Chapter6 },
    
    // Phase 3: Combos
    { id: 7, title: 'First Combos', section: 'Combos', content: Chapter7 },
    
    // Phase 4: Heat & Azazel
    { id: 8, title: 'Azazel Power & Heat', section: 'Heat System', content: Chapter8 },
    
    // Phase 5: Game Systems
    { id: 9, title: 'Punishment', section: 'Game Systems', content: Chapter9 },
    { id: 10, title: 'Pressure & Mixups', section: 'Game Systems', content: Chapter10 },
    
    // Phase 6: Advanced
    { id: 11, title: 'Wall Game', section: 'Advanced', content: Chapter11 },
    { id: 12, title: 'Complete Zafina', section: 'Mastery', content: Chapter12 },
  ],
}
