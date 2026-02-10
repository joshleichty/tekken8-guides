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

export const reinaConfig: CharacterConfig = {
  slug: 'reina',
  name: 'Reina',
  subtitle: 'Purple Lightning — Tekken 8 Season 2',
  icon: '⚡',
  description: 'A Mishima-style stance character who chains pressure through fluid stance transitions. Master her core loop, learn to flow between Sentai and Heaven\'s Wrath, and overwhelm opponents with relentless offense.',
  
  theme: {
    name: 'reina',
    colors: {
      // Reina's theme: Deep purple with electric blue accents (her purple lightning aesthetic)
      accent: '#a855f7',           // Purple (her signature color)
      accentDim: '#7c3aed',
      accentSecondary: '#38bdf8',  // Electric blue (Mishima lightning)
      accentSecondaryDim: '#0ea5e9',
      bgPrimary: '#0c0612',        // Deep purple-black
      bgSecondary: '#100a18',
      bgCard: '#1a1028',
      bgCardHover: '#251538',
      textPrimary: '#f5f3ff',      // Light purple tint
      textSecondary: '#b8a8c8',
      textMuted: '#6b5880',
      border: '#3d2d55',
      characterGlow: 'rgba(168, 85, 247, 0.3)',
      heatGlow: 'rgba(56, 189, 248, 0.4)',
    },
  },
  
  chapters: [
    // Phase 1: The Core Loop - Give them something that works IMMEDIATELY
    { id: 1, title: 'Purple Lightning', section: 'The Core', content: Chapter1 },
    { id: 2, title: 'Why This Works', section: 'The Core', content: Chapter2 },
    
    // Phase 2: Stance Flow - Teach stances as connected, not separate
    { id: 3, title: 'Sentai Pressure', section: 'Stance Flow', content: Chapter3 },
    { id: 4, title: 'Heaven\'s Wrath', section: 'Stance Flow', content: Chapter4 },
    { id: 5, title: 'The Stance Web', section: 'Stance Flow', content: Chapter5 },
    
    // Phase 3: Building Your Arsenal
    { id: 6, title: 'Neutral Tools', section: 'Arsenal', content: Chapter6 },
    { id: 7, title: 'Combos', section: 'Arsenal', content: Chapter7 },
    { id: 8, title: 'Punishment', section: 'Arsenal', content: Chapter8 },
    
    // Phase 4: Defense
    { id: 9, title: 'Defense & Movement', section: 'Defense', content: Chapter9 },
    
    // Phase 5: Advanced Systems
    { id: 10, title: 'Heat System', section: 'Advanced', content: Chapter10 },
    { id: 11, title: 'Wall Game', section: 'Advanced', content: Chapter11 },
    { id: 12, title: 'The Electric Path', section: 'Advanced', content: Chapter12 },
    
    // Phase 6: Mastery
    { id: 13, title: 'Complete Reina', section: 'Mastery', content: Chapter13 },
  ],
}
