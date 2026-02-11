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

export const eddyConfig: CharacterConfig = {
  slug: 'eddy',
  name: 'Eddy Gordo',
  subtitle: 'The Mandinga Flywheel — Tekken 8 Season 2',
  icon: '🌀',
  description: 'A stance-driven momentum character who builds power through a self-reinforcing cycle. Approach with plus frames, enter stance, force a 50/50, build Mandinga, repeat — each revolution deadlier than the last. He looks like chaos. He plays like a machine.',

  theme: {
    name: 'eddy',
    colors: {
      accent: '#22c55e',
      accentDim: '#1a9e4a',
      accentSecondary: '#f59e0b',
      accentSecondaryDim: '#d97706',
      bgPrimary: '#050c06',
      bgSecondary: '#0a1a0d',
      bgCard: '#0f2413',
      bgCardHover: '#153019',
      textPrimary: '#e8f5eb',
      textSecondary: '#8ab896',
      textMuted: '#4d7a5a',
      border: '#1a3321',
      characterGlow: 'rgba(34, 197, 94, 0.3)',
      heatGlow: 'rgba(245, 158, 11, 0.4)',
    },
  },

  chapters: [
    // Phase 1: The Ginga — Feel the rhythm
    { id: 1, title: 'The Roda', section: 'The Ginga', content: Chapter1 },
    { id: 2, title: 'Your First Weapons', section: 'The Ginga', content: Chapter2 },

    // Phase 2: Building Momentum — Enter the stances
    { id: 3, title: 'Into the Flow', section: 'Building Momentum', content: Chapter3 },
    { id: 4, title: 'The Two Stances', section: 'Building Momentum', content: Chapter4 },

    // Phase 3: The Mandinga Engine — The install and combos
    { id: 5, title: 'Mandinga', section: 'The Mandinga Engine', content: Chapter5 },
    { id: 6, title: 'Combos', section: 'The Mandinga Engine', content: Chapter6 },

    // Phase 4: Controlling the Match — Punishment and heat
    { id: 7, title: 'Punishment', section: 'Controlling the Match', content: Chapter7 },
    { id: 8, title: 'Heat and Power', section: 'Controlling the Match', content: Chapter8 },

    // Phase 5: Mastery — The complete picture
    { id: 9, title: 'The Low Game', section: 'Mastery', content: Chapter9 },
    { id: 10, title: 'Defense and Survival', section: 'Mastery', content: Chapter10 },
    { id: 11, title: 'The Complete Eddy', section: 'Mastery', content: Chapter11 },
  ],
}
