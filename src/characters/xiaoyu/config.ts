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

export const xiaoyuConfig: CharacterConfig = {
  slug: 'xiaoyu',
  name: 'Ling Xiaoyu',
  subtitle: 'The Dancing Phoenix — Tekken 8 Season 2',
  icon: '🦋',
  description: 'The queen of evasion. Xiaoyu dances around opponents with three fluid stances, crushing their highs, evading their mids, and punishing their impatience. A creative character who rewards reads, timing, and a willingness to play Tekken like no one else.',
  
  theme: {
    name: 'xiaoyu',
    colors: {
      // Xiaoyu's theme: Deep rose/magenta with warm cherry blossom accents
      accent: '#ec4899',           // Pink-500 (her iconic color)
      accentDim: '#be185d',        // Pink-700
      accentSecondary: '#f59e0b',  // Amber (phoenix fire)
      accentSecondaryDim: '#d97706',
      bgPrimary: '#0c0410',        // Deep purple-black
      bgSecondary: '#120720',      // Slightly lighter
      bgCard: '#1e0e2e',           // Dark violet card
      bgCardHover: '#2d1640',      // Hover state
      textPrimary: '#fdf2f8',      // Rose-50 tint
      textSecondary: '#c4b5c8',    // Muted lavender
      textMuted: '#7c6888',        // Deep muted
      border: '#3d1f55',           // Purple border
      characterGlow: 'rgba(236, 72, 153, 0.25)',
      heatGlow: 'rgba(245, 158, 11, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Foundation
    { id: 1, title: 'The Dancing Phoenix', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'Your First Buttons', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Damage From Pokes', section: 'Foundation', content: Chapter3 },
    
    // Phase 2: Stances
    { id: 4, title: 'Art of Phoenix', section: 'Stances', content: Chapter4 },
    { id: 5, title: 'Rain Dance', section: 'Stances', content: Chapter5 },
    
    // Phase 3: Execution
    { id: 6, title: 'First Combos', section: 'Execution', content: Chapter6 },
    { id: 7, title: 'Hypnotist & Heat', section: 'Heat System', content: Chapter7 },
    
    // Phase 4: Game Systems
    { id: 8, title: 'Punishment', section: 'Game Systems', content: Chapter8 },
    { id: 9, title: 'Wall Game & Oki', section: 'Game Systems', content: Chapter9 },
    
    // Phase 5: Mastery
    { id: 10, title: 'The Complete Xiaoyu', section: 'Mastery', content: Chapter10 },
  ],
}
