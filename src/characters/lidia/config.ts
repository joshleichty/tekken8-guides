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

export const lidiaConfig: CharacterConfig = {
  slug: 'lidia',
  name: 'Lidia',
  subtitle: 'The Warrior Prime Minister — Tekken 8 Season 2',
  icon: '🏛️',
  description: 'Four stances, devastating heat, and a gameplan built on patience and reads. Lidia rewards players who observe first and strike decisively.',

  theme: {
    name: 'lidia',
    colors: {
      accent: '#c8a44e',
      accentDim: '#a6853c',
      accentSecondary: '#dc2626',
      accentSecondaryDim: '#b91c1c',
      bgPrimary: '#0a0a0f',
      bgSecondary: '#151520',
      bgCard: '#1e1e2a',
      bgCardHover: '#2a2a38',
      textPrimary: '#f0ede6',
      textSecondary: '#9e9bb0',
      textMuted: '#6b6880',
      border: '#2e2e40',
      characterGlow: 'rgba(200, 164, 78, 0.25)',
      heatGlow: 'rgba(220, 38, 38, 0.35)',
    },
  },

  chapters: [
    { id: 1, title: 'The Warrior Prime Minister', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'The Lie on the Screen', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Controlling the Arena', section: 'Neutral Game', content: Chapter3 },
    { id: 4, title: 'The Approach', section: 'Neutral Game', content: Chapter4 },
    { id: 5, title: 'Reading the Stance', section: 'Stances', content: Chapter5 },
    { id: 6, title: "The Wolf's Patience", section: 'Stances', content: Chapter6 },
    { id: 7, title: 'Combos', section: 'Execution', content: Chapter7 },
    { id: 8, title: 'The Low Game', section: 'Conditioning', content: Chapter8 },
    { id: 9, title: 'Heaven and Earth', section: 'Heat System', content: Chapter9 },
    { id: 10, title: 'Frame Traps & Pressure', section: 'Advanced', content: Chapter10 },
    { id: 11, title: 'The Complete Lidia', section: 'Mastery', content: Chapter11 },
  ],
}
