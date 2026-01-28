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
import { Chapter18 } from './chapters/Chapter18'

export const bryanConfig: CharacterConfig = {
  slug: 'bryan',
  name: 'Bryan Fury',
  subtitle: 'Counterhit Demon — Tekken 8',
  icon: '💀',
  description: 'A counter-hit specialist with devastating keepout, explosive damage, and a unique taunt mechanic that rewards patience and timing.',
  
  theme: {
    name: 'bryan',
    colors: {
      // Bryan's theme: Cold steel blue with red heat accents
      accent: '#4a9eff',           // Electric blue
      accentDim: '#2d6bb8',
      accentSecondary: '#ff4444',  // Aggressive red
      accentSecondaryDim: '#b82d2d',
      bgPrimary: '#080a0c',        // Near black with blue tint
      bgSecondary: '#0d1114',
      bgCard: '#131820',
      bgCardHover: '#1a222d',
      textPrimary: '#e4e8ec',
      textSecondary: '#9aa4b0',
      textMuted: '#5c6670',
      border: '#2a3540',
      characterGlow: 'rgba(74, 158, 255, 0.2)',
      heatGlow: 'rgba(255, 68, 68, 0.3)',
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'The Bryan Identity', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'Your First 10 Minutes', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Movement & Spacing', section: 'Foundation', content: Chapter3 },
    
    // Phase 2: Core Tools
    { id: 4, title: 'The Keepout Game', section: 'Core Tools', content: Chapter4 },
    { id: 5, title: 'Mid Pokes & Mental Frames', section: 'Core Tools', content: Chapter5 },
    { id: 6, title: 'Low Pokes', section: 'Core Tools', content: Chapter6 },
    { id: 7, title: 'Jab Pressure', section: 'Core Tools', content: Chapter7 },
    
    // Phase 3: Counter-Hit Game
    { id: 8, title: 'Counter-Hit Fishing', section: 'Counter-Hits', content: Chapter8 },
    { id: 9, title: 'String Extensions', section: 'Counter-Hits', content: Chapter9 },
    
    // Phase 4: Combos
    { id: 10, title: 'Beginner Combos', section: 'Combos', content: Chapter10 },
    { id: 11, title: 'Optimal Combos', section: 'Combos', content: Chapter11 },
    
    // Phase 5: Punishment
    { id: 12, title: 'Punishment Guide', section: 'Punishment', content: Chapter12 },
    
    // Phase 6: Heat & Snake Eyes
    { id: 13, title: 'Heat System', section: 'Heat', content: Chapter13 },
    { id: 14, title: 'Snake Eyes Install', section: 'Heat', content: Chapter14 },
    
    // Phase 7: Defense
    { id: 15, title: 'Defense & Panic Options', section: 'Defense', content: Chapter15 },
    
    // Phase 8: Advanced
    { id: 16, title: 'Taunt Fundamentals', section: 'Advanced', content: Chapter16 },
    { id: 17, title: 'Frame Traps & Conditioning', section: 'Advanced', content: Chapter17 },
    
    // Phase 9: Mastery
    { id: 18, title: 'The Complete Bryan', section: 'Mastery', content: Chapter18 },
  ],
}
