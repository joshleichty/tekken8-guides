import type { CharacterConfig } from '../../types'
import { Chapter1 } from './chapters/Chapter1'
import { Chapter2 } from './chapters/Chapter2'
import { Chapter3 } from './chapters/Chapter3'
import { Chapter4 } from './chapters/Chapter4'
import { Chapter5 } from './chapters/Chapter5'
import { Chapter6 } from './chapters/Chapter6'
import { Chapter7 } from './chapters/Chapter7'
import { Chapter8 } from './chapters/Chapter8'

export const reinaConfig: CharacterConfig = {
  slug: 'reina',
  name: 'Reina',
  subtitle: 'Purple Lightning — Tekken 8 Season 2',
  icon: '⚡',
  description: 'Half Mishima, half Taido. Reina blends electric execution with flowing stance transitions to create relentless pressure that connects everything.',

  theme: {
    name: 'reina',
    colors: {
      accent: '#a855f7',
      accentDim: '#7e22ce',
      accentSecondary: '#f59e0b',
      accentSecondaryDim: '#d97706',
      bgPrimary: '#030712',
      bgSecondary: '#0f0a1a',
      bgCard: '#1a1025',
      bgCardHover: '#2a1a3a',
      textPrimary: '#f1f5f9',
      textSecondary: '#94a3b8',
      textMuted: '#64748b',
      border: '#2e1f4a',
      characterGlow: 'rgba(168, 85, 247, 0.25)',
      heatGlow: 'rgba(245, 158, 11, 0.35)',
    },
  },

  chapters: [
    { id: 1, title: 'Simpler Than You Think', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'The Sentai Engine', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Punishment Into Pressure', section: 'Core Tools', content: Chapter3 },
    { id: 4, title: "Heaven's Wrath", section: 'Core Tools', content: Chapter4 },
    { id: 5, title: 'Space and Pokes', section: 'Offense', content: Chapter5 },
    { id: 6, title: 'Combos', section: 'Core Tools', content: Chapter6 },
    { id: 7, title: 'Heat System', section: 'Game Systems', content: Chapter7 },
    { id: 8, title: 'The Complete Reina', section: 'Mastery', content: Chapter8 },
  ],
}
