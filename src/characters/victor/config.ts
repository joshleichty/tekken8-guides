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

export const victorConfig: CharacterConfig = {
  slug: 'victor',
  name: 'Victor Chevalier',
  subtitle: 'Refined Violence — Tekken 8 Season 2',
  icon: '🗡️',
  description: 'The elegant super spy. Victor blends swords, knives, and guns into devastating pressure. Master his dual stances and dominate the wall with unparryable weapon attacks.',
  
  theme: {
    name: 'victor',
    colors: {
      // Victor's theme: Silver steel with burgundy accents
      accent: '#9ca3af',           // Steel silver
      accentDim: '#6b7280',
      accentSecondary: '#991b1b',  // Burgundy red
      accentSecondaryDim: '#7f1d1d',
      bgPrimary: '#0a0a0a',        // Deep black
      bgSecondary: '#171717',      // Neutral 900
      bgCard: '#262626',           // Neutral 800
      bgCardHover: '#404040',      // Neutral 700
      textPrimary: '#fafafa',      // Neutral 50
      textSecondary: '#a3a3a3',    // Neutral 400
      textMuted: '#737373',        // Neutral 500
      border: '#404040',           // Neutral 700
      characterGlow: 'rgba(156, 163, 175, 0.25)',
      heatGlow: 'rgba(153, 27, 27, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'Meet Victor Chevalier', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'First Buttons & Jabs', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Core Mids & Pokes', section: 'Foundation', content: Chapter3 },
    { id: 4, title: 'Low Attacks & Mixups', section: 'Foundation', content: Chapter4 },
    
    // Phase 2: Stance Mastery
    { id: 5, title: 'Perfumer Stance (PRF)', section: 'Stance Mastery', content: Chapter5 },
    { id: 6, title: 'IAI Stance', section: 'Stance Mastery', content: Chapter6 },
    { id: 7, title: 'Stance Transitions', section: 'Stance Mastery', content: Chapter7 },
    
    // Phase 3: Combos
    { id: 8, title: 'First Combos', section: 'Combos', content: Chapter8 },
    { id: 9, title: 'Optimized Combos', section: 'Combos', content: Chapter9 },
    { id: 10, title: 'Wall Combos & Oki', section: 'Combos', content: Chapter10 },
    
    // Phase 4: Game Systems
    { id: 11, title: 'Punishment', section: 'Game Systems', content: Chapter11 },
    { id: 12, title: 'Frame Traps & Pressure', section: 'Game Systems', content: Chapter12 },
    { id: 13, title: 'Heat System', section: 'Game Systems', content: Chapter13 },
    
    // Phase 5: Mastery
    { id: 14, title: 'Defense & Keep-Out', section: 'Mastery', content: Chapter14 },
    { id: 15, title: 'Complete Victor', section: 'Mastery', content: Chapter15 },
  ],
}
