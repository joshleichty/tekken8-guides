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

export const hwoarangConfig: CharacterConfig = {
  slug: 'hwoarang',
  name: 'Hwoarang',
  subtitle: 'Blood Talon — Tekken 8 Season 2',
  icon: '🦅',
  description: 'Four stances, infinite loops, and pressure that never stops. Hwoarang overwhelms opponents with relentless transitions until they crack.',

  theme: {
    name: 'hwoarang',
    colors: {
      accent: '#f97316',
      accentDim: '#ea580c',
      accentSecondary: '#ef4444',
      accentSecondaryDim: '#dc2626',
      bgPrimary: '#0c0a09',
      bgSecondary: '#1c1917',
      bgCard: '#292524',
      bgCardHover: '#44403c',
      textPrimary: '#fafaf9',
      textSecondary: '#a8a29e',
      textMuted: '#78716c',
      border: '#44403c',
      characterGlow: 'rgba(249, 115, 22, 0.25)',
      heatGlow: 'rgba(239, 68, 68, 0.35)',
    },
  },

  chapters: [
    { id: 1, title: 'Blood Talon', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'The First Loop', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'The Infinite Machine', section: 'Core Offense', content: Chapter3 },
    { id: 4, title: 'Punishment Into Pressure', section: 'Core Offense', content: Chapter4 },
    { id: 5, title: 'Getting In', section: 'Neutral Game', content: Chapter5 },
    { id: 6, title: 'Combos', section: 'Execution', content: Chapter6 },
    { id: 7, title: 'Heat', section: 'Game Systems', content: Chapter7 },
    { id: 8, title: 'Defense', section: 'Survival', content: Chapter8 },
    { id: 9, title: 'Conditioning & Adaptation', section: 'Mastery', content: Chapter9 },
    { id: 10, title: "The Master's Toolkit", section: 'Mastery', content: Chapter10 },
  ],
}
