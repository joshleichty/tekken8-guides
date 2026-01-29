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

export const dragunovConfig: CharacterConfig = {
  slug: 'dragunov',
  name: 'Sergei Dragunov',
  subtitle: 'White Angel of Death — Tekken 8 Season 2',
  icon: '🪖',
  description: 'A relentless pressure monster with devastating throws, oppressive plus frames, and calculated aggression. Dragunov stalks his prey and strikes when the moment is perfect.',
  
  theme: {
    name: 'dragunov',
    colors: {
      // Dragunov's theme: Military cold steel with blood red accents
      accent: '#94a3b8',           // Cold steel grey
      accentDim: '#64748b',
      accentSecondary: '#b91c1c',  // Blood red
      accentSecondaryDim: '#7f1d1d',
      bgPrimary: '#0a0a0a',        // Near black
      bgSecondary: '#111111',      // Dark grey
      bgCard: '#1a1a1a',           // Card grey
      bgCardHover: '#262626',      // Hover grey
      textPrimary: '#e5e5e5',      // Light grey
      textSecondary: '#a3a3a3',    // Medium grey
      textMuted: '#737373',        // Muted grey
      border: '#333333',           // Border grey
      characterGlow: 'rgba(148, 163, 184, 0.2)',
      heatGlow: 'rgba(185, 28, 28, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Know Your Prey
    { id: 1, title: 'The White Angel of Death', section: 'Know Your Prey', content: Chapter1 },
    { id: 2, title: 'First Blood', section: 'Know Your Prey', content: Chapter2 },
    
    // Phase 2: Closing the Distance
    { id: 3, title: 'The Hunt', section: 'Closing the Distance', content: Chapter3 },
    { id: 4, title: 'Plus Frame Prison', section: 'Closing the Distance', content: Chapter4 },
    
    // Phase 3: The Kill
    { id: 5, title: 'Command Grabs', section: 'The Kill', content: Chapter5 },
    { id: 6, title: 'Sneak Stance', section: 'The Kill', content: Chapter6 },
    { id: 7, title: 'Full Crouch Mix', section: 'The Kill', content: Chapter7 },
    
    // Phase 4: Execution
    { id: 8, title: 'Combos', section: 'Execution', content: Chapter8 },
    { id: 9, title: 'Punishment', section: 'Execution', content: Chapter9 },
    
    // Phase 5: Heat & Defense
    { id: 10, title: 'Heat System', section: 'Heat & Defense', content: Chapter10 },
    { id: 11, title: 'Defense & Panic', section: 'Heat & Defense', content: Chapter11 },
    
    // Phase 6: Mastery
    { id: 12, title: 'Complete Dragunov', section: 'Mastery', content: Chapter12 },
  ],
}
