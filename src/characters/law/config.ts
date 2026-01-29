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

export const lawConfig: CharacterConfig = {
  slug: 'law',
  name: 'Marshall Law',
  subtitle: 'The Legendary Dragon — Tekken 8 Season 2',
  icon: '🐉',
  description: 'The ultimate rushdown character. Law excels at point-blank pressure with his jabs, Dragon Charge stance, and the infamous slide. Death by a thousand cuts.',
  
  theme: {
    name: 'law',
    colors: {
      // Law's theme: Gold/Yellow with dragon fire undertones
      accent: '#eab308',           // Gold/Yellow
      accentDim: '#ca8a04',
      accentSecondary: '#f97316',  // Orange/Fire
      accentSecondaryDim: '#ea580c',
      bgPrimary: '#0c0a09',        // Stone 950
      bgSecondary: '#1c1917',      // Stone 900
      bgCard: '#292524',           // Stone 800
      bgCardHover: '#44403c',      // Stone 700
      textPrimary: '#fafaf9',      // Stone 50
      textSecondary: '#a8a29e',    // Stone 400
      textMuted: '#78716c',        // Stone 500
      border: '#44403c',           // Stone 700
      characterGlow: 'rgba(234, 179, 8, 0.25)',
      heatGlow: 'rgba(249, 115, 22, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'Meet Marshall Law', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'First Buttons', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Core Mids & Lows', section: 'Foundation', content: Chapter3 },
    
    // Phase 2: Strings & Combos
    { id: 4, title: 'Jab Strings', section: 'Strings & Combos', content: Chapter4 },
    { id: 5, title: 'First Combos', section: 'Strings & Combos', content: Chapter5 },
    
    // Phase 3: Core Tools
    { id: 6, title: 'Dragon Charge (DSS)', section: 'Core Tools', content: Chapter6 },
    { id: 7, title: 'The Slide', section: 'Core Tools', content: Chapter7 },
    
    // Phase 4: Game Systems
    { id: 8, title: 'Standard Combos', section: 'Game Systems', content: Chapter8 },
    { id: 9, title: 'Punishment', section: 'Game Systems', content: Chapter9 },
    { id: 10, title: 'Frame Traps & Setups', section: 'Game Systems', content: Chapter10 },
    
    // Phase 5: Heat & Defense
    { id: 11, title: 'Heat System', section: 'Heat & Defense', content: Chapter11 },
    { id: 12, title: 'Defense & Back Turn', section: 'Heat & Defense', content: Chapter12 },
    
    // Phase 6: Mastery
    { id: 13, title: 'Complete Law', section: 'Mastery', content: Chapter13 },
  ],
}
