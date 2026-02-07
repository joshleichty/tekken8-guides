import type { CounterConfig } from '../../../types'
import { Chapter1 } from './chapters/Chapter1'
import { Chapter2 } from './chapters/Chapter2'
import { Chapter3 } from './chapters/Chapter3'
import { Chapter4 } from './chapters/Chapter4'

export const victorCounterConfig: CounterConfig = {
  slug: 'victor',
  name: 'vs Victor',
  subtitle: 'Counter Guide — Learn to Beat Victor Chevalier',
  icon: '🎯',
  description: 'Dismantle Victor\'s refined violence. Learn the golden rules, recognize his patterns, and train the reactions that shut down his entire gameplan.',
  
  theme: {
    name: 'victor-counter',
    colors: {
      // Counter theme: shifted toward crimson/aggressive tones
      accent: '#dc2626',            // Red-600
      accentDim: '#991b1b',         // Red-800
      accentSecondary: '#9ca3af',   // Steel silver (Victor's original accent becomes secondary)
      accentSecondaryDim: '#6b7280',
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
    { id: 1, title: 'Know Your Enemy', section: 'Understanding', content: Chapter1 },
    { id: 2, title: "Victor's Offense", section: 'Knowledge', content: Chapter2 },
    { id: 3, title: 'Training', section: 'Practice', content: Chapter3 },
    { id: 4, title: 'Quick Reference', section: 'Reference', content: Chapter4 },
  ],
}
