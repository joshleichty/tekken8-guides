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

export const liliConfig: CharacterConfig = {
  slug: 'lili',
  name: 'Lili de Rochefort',
  subtitle: 'Fighting Heiress — Tekken 8 Season 2',
  icon: '🩰',
  description:
    'A rhythm-based character who controls the mid-range with long limbs, builds pressure through plus frames and stance transitions, and forces devastating guesses from her backturn and Feisty Rabbit stances.',

  theme: {
    name: 'lili',
    colors: {
      accent: '#e8b4d4',
      accentDim: '#b88aa8',
      accentSecondary: '#c9a0dc',
      accentSecondaryDim: '#9672a8',
      bgPrimary: '#0e0a10',
      bgSecondary: '#160f1a',
      bgCard: '#201626',
      bgCardHover: '#2a1c32',
      textPrimary: '#f8f0f5',
      textSecondary: '#d4c0ce',
      textMuted: '#9a8294',
      border: '#3d2c48',
      characterGlow: 'rgba(232, 180, 212, 0.2)',
      heatGlow: 'rgba(201, 160, 220, 0.3)',
    },
  },

  chapters: [
    { id: 1, title: 'The Waltz', section: 'Identity', content: Chapter1 },
    { id: 2, title: 'Controlling the Floor', section: 'Neutral', content: Chapter2 },
    { id: 3, title: 'The Plus Frame Lock', section: 'Pressure', content: Chapter3 },
    { id: 4, title: 'Dancing Behind Your Back', section: 'Stances', content: Chapter4 },
    { id: 5, title: 'The Low Game', section: 'Pressure', content: Chapter5 },
    { id: 6, title: 'Dew Glide and Feisty Rabbit', section: 'Stances', content: Chapter6 },
    { id: 7, title: 'Making Them Pay', section: 'Fundamentals', content: Chapter7 },
    { id: 8, title: 'Heat and the 50/50', section: 'Heat', content: Chapter8 },
    { id: 9, title: 'Combo Architecture', section: 'Combos', content: Chapter9 },
    { id: 10, title: 'The Ranked Playbook', section: 'Mastery', content: Chapter10 },
  ],
}
