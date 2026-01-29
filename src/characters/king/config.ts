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

export const kingConfig: CharacterConfig = {
  slug: 'king',
  name: 'King',
  subtitle: 'The Grappler King — Tekken 8 Season 2',
  icon: '👑',
  description: 'The ultimate grappler. King has the best throw game in Tekken — devastating command grabs, chain throws that can deal 100+ damage, and throws that look identical but require different breaks. Master the clinch, master the game.',
  
  theme: {
    name: 'king',
    colors: {
      // King's theme: Championship gold with black leather accents
      accent: '#fbbf24',           // Gold
      accentDim: '#d97706',
      accentSecondary: '#f59e0b',   // Brighter gold for highlight-secondary
      accentSecondaryDim: '#d97706',
      bgPrimary: '#0a0a0a',         // Near black
      bgSecondary: '#111111',       // Dark grey
      bgCard: '#1a1a1a',            // Card grey
      bgCardHover: '#262626',       // Hover grey
      textPrimary: '#ffffff',       // Pure white for maximum contrast
      textSecondary: '#e5e7eb',     // Brighter light grey
      textMuted: '#b8bcc4',         // Brighter medium grey
      border: '#4b5563',            // Lighter border grey for better visibility
      characterGlow: 'rgba(251, 191, 36, 0.25)',
      heatGlow: 'rgba(31, 41, 55, 0.4)',
    },
  },
  
  chapters: [
    // Phase 1: The Grappler's Foundation
    { id: 1, title: "The Wrestler's Creed", section: 'The Grappler\'s Foundation', content: Chapter1 },
    { id: 2, title: 'Your First Throws', section: 'The Grappler\'s Foundation', content: Chapter2 },
    { id: 3, title: 'Getting the Clinch', section: 'The Grappler\'s Foundation', content: Chapter3 },
    
    // Phase 2: The Throw Game
    { id: 4, title: 'Throw Buffering', section: 'The Throw Game', content: Chapter4 },
    { id: 5, title: 'The Indistinguishable Mixup', section: 'The Throw Game', content: Chapter5 },
    { id: 6, title: 'Chain Throws', section: 'The Throw Game', content: Chapter6 },
    
    // Phase 3: Making Throws Work
    { id: 7, title: 'Mid Pokes', section: 'Making Throws Work', content: Chapter7 },
    { id: 8, title: 'Low Pokes', section: 'Making Throws Work', content: Chapter8 },
    { id: 9, title: 'When They Duck', section: 'Making Throws Work', content: Chapter9 },
    
    // Phase 4: Movement & Stances
    { id: 10, title: 'Jaguar Sprint & Step', section: 'Movement & Stances', content: Chapter10 },
    { id: 11, title: 'Muscle Armor', section: 'Movement & Stances', content: Chapter11 },
    
    // Phase 5: Damage & Systems
    { id: 12, title: 'Combos', section: 'Damage & Systems', content: Chapter12 },
    { id: 13, title: 'Punishment', section: 'Damage & Systems', content: Chapter13 },
    { id: 14, title: 'Heat System', section: 'Damage & Systems', content: Chapter14 },
    
    // Phase 6: Mastery
    { id: 15, title: 'Complete King', section: 'Mastery', content: Chapter15 },
  ],
}
