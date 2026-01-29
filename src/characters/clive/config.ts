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

export const cliveConfig: CharacterConfig = {
  slug: 'clive',
  name: 'Clive Rosfield',
  subtitle: 'Shield of the Undying Flame — Tekken 8 Season 2',
  icon: '🔥',
  description: 'The mid-range master from Final Fantasy XVI. Clive controls space with his massive sword, transitions into Phoenix Shift for devastating mixups, and builds Zantetsuken meter for explosive finishers.',
  
  theme: {
    name: 'clive',
    colors: {
      // Clive's theme: Fire and steel - orange flames with dark steel undertones
      accent: '#f97316',           // Orange 500 - Phoenix flames
      accentDim: '#ea580c',        // Orange 600
      accentSecondary: '#3b82f6',  // Blue 500 - Ifrit ice contrast
      accentSecondaryDim: '#2563eb', // Blue 600
      bgPrimary: '#0c0a09',        // Stone 950 - Dark steel
      bgSecondary: '#1c1917',      // Stone 900
      bgCard: '#292524',           // Stone 800
      bgCardHover: '#44403c',      // Stone 700
      textPrimary: '#fafaf9',      // Stone 50
      textSecondary: '#a8a29e',    // Stone 400
      textMuted: '#78716c',        // Stone 500
      border: '#44403c',           // Stone 700
      characterGlow: 'rgba(249, 115, 22, 0.25)', // Orange glow
      heatGlow: 'rgba(239, 68, 68, 0.35)',       // Red heat
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'The Clive Identity', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'Controlling Space', section: 'Foundation', content: Chapter2 },
    
    // Phase 2: Core Tools
    { id: 3, title: 'Phoenix Shift', section: 'Core Tools', content: Chapter3 },
    { id: 4, title: 'Lows & Pressure', section: 'Core Tools', content: Chapter4 },
    
    // Phase 3: Combos & Damage
    { id: 5, title: 'Combos', section: 'Combos', content: Chapter5 },
    { id: 6, title: 'Punishment', section: 'Combos', content: Chapter6 },
    
    // Phase 4: Mechanics & Defense
    { id: 7, title: 'Heat & Zantetsuken', section: 'Mechanics', content: Chapter7 },
    { id: 8, title: 'Defense & Parry', section: 'Mechanics', content: Chapter8 },
    
    // Phase 5: Mastery
    { id: 9, title: 'Complete Clive', section: 'Mastery', content: Chapter9 },
  ],
}
