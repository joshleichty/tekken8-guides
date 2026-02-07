import type { CounterConfig } from '../../../types'
import { Chapter1 } from './chapters/Chapter1'
import { Chapter2 } from './chapters/Chapter2'
import { Chapter3 } from './chapters/Chapter3'
import { Chapter4 } from './chapters/Chapter4'

export const alisaCounterConfig: CounterConfig = {
  slug: 'alisa',
  name: 'vs Alisa',
  subtitle: 'Counter Guide — Learn to Beat Alisa Bosconovitch',
  icon: '🎯',
  description: 'Shut down the chainsaw blender. Learn what actually matters against Alisa, train the distinctions that are real, and stop guessing.',

  theme: {
    name: 'alisa-counter',
    colors: {
      accent: '#dc2626',
      accentDim: '#991b1b',
      accentSecondary: '#f472b6',
      accentSecondaryDim: '#be185d',
      bgPrimary: '#0a0a0a',
      bgSecondary: '#171717',
      bgCard: '#262626',
      bgCardHover: '#404040',
      textPrimary: '#fafafa',
      textSecondary: '#a3a3a3',
      textMuted: '#737373',
      border: '#404040',
      characterGlow: 'rgba(220, 38, 38, 0.2)',
      heatGlow: 'rgba(220, 38, 38, 0.35)',
    },
  },

  chapters: [
    { id: 1, title: 'The Alisa Problem', section: 'Understanding', content: Chapter1 },
    { id: 2, title: 'What You\'ll Actually Face', section: 'Knowledge', content: Chapter2 },
    { id: 3, title: 'The Chainsaw Blender', section: 'Knowledge', content: Chapter3 },
    { id: 4, title: 'Training', section: 'Practice', content: Chapter4 },
  ],
}
