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

export const paulConfig: CharacterConfig = {
  slug: 'paul',
  name: 'Paul Phoenix',
  subtitle: 'The Strongest in the Universe — Hot-Blooded Destroyer',
  icon: '👊',
  description: 'A devastating mixup machine built on the simplest 50/50 in the game. Paul wins by forcing a guess between the most damaging mid and the most damaging low in Tekken — and both answers hurt.',

  theme: {
    name: 'paul',
    colors: {
      accent: '#dc2626',
      accentDim: '#991b1b',
      accentSecondary: '#f59e0b',
      accentSecondaryDim: '#b45309',
      bgPrimary: '#0a0a0a',
      bgSecondary: '#171717',
      bgCard: '#1c1c1c',
      bgCardHover: '#262626',
      textPrimary: '#fafafa',
      textSecondary: '#d4d4d4',
      textMuted: '#a3a3a3',
      border: '#2a2a2a',
      characterGlow: 'rgba(220, 38, 38, 0.3)',
      heatGlow: 'rgba(245, 158, 11, 0.4)',
    },
  },

  chapters: [
    // The Kill Chain
    { id: 1, title: 'The Strongest in the Universe', section: 'The Kill Chain', content: Chapter1 },
    { id: 2, title: 'The Fist and the Sweep', section: 'The Kill Chain', content: Chapter2 },

    // The Foundation
    { id: 3, title: 'Your Buttons', section: 'The Foundation', content: Chapter3 },
    { id: 4, title: 'Closing In', section: 'The Foundation', content: Chapter4 },

    // The Engine
    { id: 5, title: 'The Sway', section: 'The Engine', content: Chapter5 },
    { id: 6, title: 'The Crouch Dash', section: 'The Engine', content: Chapter6 },

    // The Payoff
    { id: 7, title: 'Damage', section: 'The Payoff', content: Chapter7 },
    { id: 8, title: 'The Wall', section: 'The Payoff', content: Chapter8 },

    // The Edge
    { id: 9, title: 'Burning', section: 'The Edge', content: Chapter9 },
    { id: 10, title: 'Grab \'Em', section: 'The Edge', content: Chapter10 },

    // The Complete Player
    { id: 11, title: 'The Punisher', section: 'The Complete Player', content: Chapter11 },
    { id: 12, title: 'The Complete Paul', section: 'The Complete Player', content: Chapter12 },
  ],
}
