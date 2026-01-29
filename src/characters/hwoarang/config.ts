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

export const hwoarangConfig: CharacterConfig = {
  slug: 'hwoarang',
  name: 'Hwoarang',
  subtitle: 'Blood Talon — Tekken 8 Season 2',
  icon: '🦅',
  description: 'The relentless pressure machine. Hwoarang has four stances, infinite flowcharts, and suffocating offense. Master his flamingo stances and your opponents will never take their turn.',
  
  theme: {
    name: 'hwoarang',
    colors: {
      // Hwoarang's theme: Fiery orange/red with taekwondo spirit
      accent: '#f97316',           // Orange 500
      accentDim: '#ea580c',        // Orange 600
      accentSecondary: '#ef4444',  // Red 500
      accentSecondaryDim: '#dc2626', // Red 600
      bgPrimary: '#0c0a09',        // Stone 950
      bgSecondary: '#1c1917',      // Stone 900
      bgCard: '#292524',           // Stone 800
      bgCardHover: '#44403c',      // Stone 700
      textPrimary: '#fafaf9',      // Stone 50
      textSecondary: '#a8a29e',    // Stone 400
      textMuted: '#78716c',        // Stone 500
      border: '#44403c',           // Stone 700
      characterGlow: 'rgba(249, 115, 22, 0.25)',
      heatGlow: 'rgba(239, 68, 68, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'Meet Hwoarang', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'First Buttons', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'The Four Stances', section: 'Foundation', content: Chapter3 },
    
    // Phase 2: Core Offense
    { id: 4, title: 'Core Mids & Lows', section: 'Core Offense', content: Chapter4 },
    { id: 5, title: 'Jab Strings & Transitions', section: 'Core Offense', content: Chapter5 },
    
    // Phase 3: Combos & Stances
    { id: 6, title: 'First Combos', section: 'Combos & Stances', content: Chapter6 },
    { id: 7, title: 'Right Flamingo Mastery', section: 'Combos & Stances', content: Chapter7 },
    
    // Phase 4: Execution & Systems
    { id: 8, title: 'Just Frame Skyrocket', section: 'Execution & Systems', content: Chapter8 },
    { id: 9, title: 'Punishment', section: 'Execution & Systems', content: Chapter9 },
    
    // Phase 5: Pressure & Heat
    { id: 10, title: 'Frame Traps & Pressure', section: 'Pressure & Heat', content: Chapter10 },
    { id: 11, title: 'Heat System', section: 'Pressure & Heat', content: Chapter11 },
    
    // Phase 6: Mastery
    { id: 12, title: 'Defense & Panic Moves', section: 'Mastery', content: Chapter12 },
    { id: 13, title: 'Complete Hwoarang', section: 'Mastery', content: Chapter13 },
  ],
}
