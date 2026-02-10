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

export const leeConfig: CharacterConfig = {
  slug: 'lee',
  name: 'Lee Chaolan',
  subtitle: 'The Silver-Haired Demon — Tekken 8 Season 2',
  icon: '🌹',
  description: 'The precision instrument. Lee turns defense into art with the best 10-frame punish in the game, an 11-frame CH launcher, and keepout that makes approaching him terrifying.',

  theme: {
    name: 'lee',
    colors: {
      accent: '#a78bfa',           // Violet 400 (silver-haired demon)
      accentDim: '#7c3aed',        // Violet 600
      accentSecondary: '#c0c0c0',  // Silver
      accentSecondaryDim: '#9ca3af', // Gray 400
      bgPrimary: '#09090b',        // Zinc 950
      bgSecondary: '#18181b',      // Zinc 900
      bgCard: '#27272a',           // Zinc 800
      bgCardHover: '#3f3f46',      // Zinc 700
      textPrimary: '#fafafa',      // Zinc 50
      textSecondary: '#a1a1aa',    // Zinc 400
      textMuted: '#71717a',        // Zinc 500
      border: '#3f3f46',           // Zinc 700
      characterGlow: 'rgba(167, 139, 250, 0.25)',
      heatGlow: 'rgba(239, 68, 68, 0.35)',
    },
  },

  chapters: [
    // Phase 1: Foundation — "Meet Lee"
    { id: 1, title: 'The Silver-Haired Demon', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'First Buttons', section: 'Foundation', content: Chapter2 },

    // Phase 2: The Counter-Hit Web
    { id: 3, title: 'Reading Buttons', section: 'Counter-Hit Web', content: Chapter3 },
    { id: 4, title: 'Keepout', section: 'Counter-Hit Web', content: Chapter4 },

    // Phase 3: Execution Unlocks
    { id: 5, title: 'Just Frame Mastery', section: 'Execution', content: Chapter5 },
    { id: 6, title: 'Punishment', section: 'Execution', content: Chapter6 },

    // Phase 4: Offense & Stance
    { id: 7, title: 'The Crouch Game', section: 'Offense', content: Chapter7 },
    { id: 8, title: 'Hitman Stance', section: 'Offense', content: Chapter8 },

    // Phase 5: Combos & Heat
    { id: 9, title: 'Combos', section: 'Combos & Heat', content: Chapter9 },
    { id: 10, title: 'Heat System', section: 'Combos & Heat', content: Chapter10 },

    // Phase 6: Complete Lee
    { id: 11, title: 'The Complete Lee', section: 'Mastery', content: Chapter11 },
  ],
}
