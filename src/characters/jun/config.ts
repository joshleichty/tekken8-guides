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

export const junConfig: CharacterConfig = {
  slug: 'jun',
  name: 'Jun Kazama',
  subtitle: 'Light of Hope — Tekken 8 Season 2',
  icon: '🕊️',
  description: 'A defensive counter-hit specialist who punishes opponents for pressing buttons. Master her plus frame traps, learn her flowing stance transitions, and make opponents fear every decision they make.',
  
  theme: {
    name: 'jun',
    colors: {
      // Jun's theme: Ethereal white/silver with nature-inspired accents
      accent: '#94e2d5',           // Soft teal (nature/healing)
      accentDim: '#74c7b8',
      accentSecondary: '#f5c2e7',  // Soft pink (her outfit accents)
      accentSecondaryDim: '#e0a8cf',
      bgPrimary: '#0a0f14',        // Deep forest night
      bgSecondary: '#0e151c',
      bgCard: '#141e28',
      bgCardHover: '#1a2836',
      textPrimary: '#e8f0f2',      // Soft white
      textSecondary: '#a8c0c8',
      textMuted: '#5c7a85',
      border: '#2a3d4a',
      characterGlow: 'rgba(148, 226, 213, 0.3)',
      heatGlow: 'rgba(245, 194, 231, 0.4)',
    },
  },
  
  chapters: [
    // Phase 1: The Core Trap - One concept that defines Jun
    { id: 1, title: 'The Trap', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'The Jab String Web', section: 'Foundation', content: Chapter2 },
    
    // Phase 2: Pressure & Plus Frames
    { id: 3, title: 'Making Them Freeze', section: 'Pressure', content: Chapter3 },
    { id: 4, title: 'The Counter-Hit Arsenal', section: 'Pressure', content: Chapter4 },
    
    // Phase 3: Punishment
    { id: 5, title: 'Punishment', section: 'Punishment', content: Chapter5 },
    
    // Phase 4: The Stance Web
    { id: 6, title: 'The Stance Web', section: 'Stances', content: Chapter6 },
    
    // Phase 5: Damage
    { id: 7, title: 'Damage Conversion', section: 'Combos', content: Chapter7 },
    
    // Phase 6: Heat & Mechanics
    { id: 8, title: 'Heat - When Jun Becomes Terrifying', section: 'Heat System', content: Chapter8 },
    { id: 9, title: 'The Kazama Way', section: 'Heat System', content: Chapter9 },
    
    // Phase 7: Mastery
    { id: 10, title: 'Reading the Opponent', section: 'Mastery', content: Chapter10 },
  ],
}
