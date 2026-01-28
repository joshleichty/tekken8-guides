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

export const armorKingConfig: CharacterConfig = {
  slug: 'armor-king',
  name: 'Armor King',
  subtitle: 'Dark Supernova — Tekken 8',
  icon: '🦁',
  description: 'A grappler-hybrid character who excels at whiff punishment, throw mixups, and oki pressure.',
  
  theme: {
    name: 'armor-king',
    colors: {
      accent: '#d4af37',        // Gold
      accentDim: '#8b7320',
      accentSecondary: '#c41e3a', // Dark red
      accentSecondaryDim: '#7a1225',
      bgPrimary: '#0a0808',
      bgSecondary: '#121010',
      bgCard: '#1a1614',
      bgCardHover: '#252220',
      textPrimary: '#e8e4e0',
      textSecondary: '#a8a4a0',
      textMuted: '#706c68',
      border: '#3a3530',
      characterGlow: 'rgba(212, 175, 55, 0.2)',
      heatGlow: 'rgba(196, 30, 58, 0.3)',
    },
  },
  
  chapters: [
    { id: 1, title: 'Meet Armor King', section: 'Fundamentals', content: Chapter1 },
    { id: 2, title: 'Core Pokes', section: 'Fundamentals', content: Chapter2 },
    { id: 3, title: 'Key Strings', section: 'Fundamentals', content: Chapter3 },
    { id: 4, title: 'Lows', section: 'Fundamentals', content: Chapter4 },
    { id: 5, title: 'Counter Hit Tools', section: 'Offense', content: Chapter5 },
    { id: 6, title: 'Plus Frames & Pressure', section: 'Offense', content: Chapter6 },
    { id: 7, title: 'Whiff Punishment', section: 'Offense', content: Chapter7 },
    { id: 8, title: 'Bad Jaguar Stance', section: 'Stances', content: Chapter8 },
    { id: 9, title: 'Crouch Dash Moves', section: 'Stances', content: Chapter9 },
    { id: 10, title: 'Essential Throws', section: 'Throws', content: Chapter10 },
    { id: 11, title: 'Throw Mixups', section: 'Throws', content: Chapter11 },
    { id: 12, title: 'Chain Throws', section: 'Throws', content: Chapter12 },
    { id: 13, title: 'Oki & Ground Game', section: 'Oki', content: Chapter13 },
    { id: 14, title: 'Parries', section: 'Defense', content: Chapter14 },
    { id: 15, title: 'Punishers', section: 'Defense', content: Chapter15 },
    { id: 16, title: 'Heat System', section: 'Advanced', content: Chapter16 },
    { id: 17, title: 'Combos', section: 'Combos', content: Chapter17 },
    { id: 18, title: 'Game Plan', section: 'Mastery', content: Chapter18 },
  ],
}
