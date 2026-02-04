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

export const kazuyaConfig: CharacterConfig = {
  slug: 'kazuya',
  name: 'Kazuya Mishima',
  subtitle: 'Mr. Tekken — The Vortex Architect',
  icon: '👹',
  description: 'A ruthless Mishima built on punishment, knockdowns, and a terrifying 50/50. Kazuya wins by forcing clean guesses and cashing out with massive damage.',

  theme: {
    name: 'kazuya',
    colors: {
      accent: '#e11d48',
      accentDim: '#9f1239',
      accentSecondary: '#f59e0b',
      accentSecondaryDim: '#b45309',
      bgPrimary: '#0b0b0b',
      bgSecondary: '#141414',
      bgCard: '#1f1f1f',
      bgCardHover: '#292929',
      textPrimary: '#f5f5f5',
      textSecondary: '#d4d4d4',
      textMuted: '#a3a3a3',
      border: '#2a2a2a',
      characterGlow: 'rgba(225, 29, 72, 0.3)',
      heatGlow: 'rgba(245, 158, 11, 0.4)',
    },
  },

  chapters: [
    { id: 1, title: 'A Round in One Sentence', section: 'The Sentence', content: Chapter1 },
    { id: 2, title: 'The Contract Moves', section: 'The Contract', content: Chapter2 },
    { id: 3, title: 'Hold Them Still', section: 'The Contract', content: Chapter3 },
    { id: 4, title: 'Make It Miss', section: 'The Whiff', content: Chapter4 },
    { id: 5, title: 'The Oki Tax', section: 'The Ground', content: Chapter5 },
    { id: 6, title: 'Punish Architecture', section: 'The Verdict', content: Chapter6 },
    { id: 7, title: 'Electric School', section: 'The Verdict', content: Chapter7 },
    { id: 8, title: 'Containment & Traps', section: 'The Cage', content: Chapter8 },
    { id: 9, title: 'Combos That Matter', section: 'The Cashout', content: Chapter9 },
    { id: 10, title: 'Heat & Devil', section: 'The Cashout', content: Chapter10 },
    { id: 11, title: 'Defense Without Panic', section: 'The Survival', content: Chapter11 },
    { id: 12, title: 'The Long Set', section: 'The Survival', content: Chapter12 },
  ],
}
