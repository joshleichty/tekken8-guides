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
import { Chapter17 } from './chapters/Chapter17'

export const jack8Config: CharacterConfig = {
  slug: 'jack-8',
  name: 'Jack-8',
  subtitle: 'The Poke Empire — Tekken 8 Season 2',
  icon: '🤖',
  description: 'A fundamentally sound big body with the best poke game in Tekken. Jack dominates through relentless low/mid pressure, exceptional range, and his new Gamma Howl stance.',
  
  theme: {
    name: 'jack-8',
    colors: {
      // Jack-8's theme: Industrial steel with warning yellow accents
      accent: '#f59e0b',           // Warning yellow/orange
      accentDim: '#b45309',
      accentSecondary: '#ef4444',  // Alert red
      accentSecondaryDim: '#b91c1c',
      bgPrimary: '#0a0a0c',        // Near black with industrial tint
      bgSecondary: '#111114',
      bgCard: '#1a1a1f',
      bgCardHover: '#252530',
      textPrimary: '#e5e5e5',
      textSecondary: '#a1a1aa',
      textMuted: '#71717a',
      border: '#3f3f46',
      characterGlow: 'rgba(245, 158, 11, 0.2)',
      heatGlow: 'rgba(239, 68, 68, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'The Jack Identity', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'Your First Session', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Movement & Spacing', section: 'Foundation', content: Chapter3 },
    
    // Phase 2: Core Tools
    { id: 4, title: 'The Poke Empire', section: 'Core Tools', content: Chapter4 },
    { id: 5, title: 'Low Poke Mastery', section: 'Core Tools', content: Chapter5 },
    { id: 6, title: 'Mid-Range Control', section: 'Core Tools', content: Chapter6 },
    
    // Phase 3: Gamma Howl Stance
    { id: 7, title: 'Gamma Howl Defense', section: 'Gamma Howl', content: Chapter7 },
    { id: 8, title: 'Gamma Howl Offense', section: 'Gamma Howl', content: Chapter8 },
    
    // Phase 4: Crouch Mastery
    { id: 9, title: 'Crouch Game', section: 'Crouch Mastery', content: Chapter9 },
    
    // Phase 5: Combos
    { id: 10, title: 'Beginner Combos', section: 'Combos', content: Chapter10 },
    { id: 11, title: 'Optimal Combos', section: 'Combos', content: Chapter11 },
    
    // Phase 6: Punishment
    { id: 12, title: 'Punishment Guide', section: 'Punishment', content: Chapter12 },
    
    // Phase 7: Heat System
    { id: 13, title: 'Heat System', section: 'Heat', content: Chapter13 },
    
    // Phase 8: Throws
    { id: 14, title: 'Throws & Grabs', section: 'Throws', content: Chapter14 },
    
    // Phase 9: Wall & Defense
    { id: 15, title: 'Wall Game', section: 'Wall & Defense', content: Chapter15 },
    { id: 16, title: 'Defense & Power Crush', section: 'Wall & Defense', content: Chapter16 },
    
    // Phase 10: Mastery
    { id: 17, title: 'The Complete Jack', section: 'Mastery', content: Chapter17 },
  ],
}
