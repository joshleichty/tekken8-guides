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

export const azucenaConfig: CharacterConfig = {
  slug: 'azucena',
  name: 'Azucena Milagros',
  subtitle: 'The Perfect Blend — Tekken 8 Season 2',
  icon: '☕',
  description: 'A deceptively simple pressure machine who never lets you breathe. Master one approach, two stances, and the counter hits that make opponents afraid to push buttons. She looks like a dancer. She hits like a truck.',

  theme: {
    name: 'azucena',
    colors: {
      accent: '#e88d2a',           // Warm amber/gold (coffee, warmth, energy)
      accentDim: '#c47520',
      accentSecondary: '#d94f6b',  // Vibrant pink-coral (her outfit, Latin energy)
      accentSecondaryDim: '#b8425a',
      bgPrimary: '#0a0806',        // Deep espresso black
      bgSecondary: '#120f0b',
      bgCard: '#1a1510',
      bgCardHover: '#241e16',
      textPrimary: '#f5ede4',      // Warm cream white
      textSecondary: '#a89882',
      textMuted: '#6b5d4e',
      border: '#2a2218',
      characterGlow: 'rgba(232, 141, 42, 0.3)',
      heatGlow: 'rgba(217, 79, 107, 0.4)',
    },
  },

  chapters: [
    // Phase 1: Momentum — The pressure machine
    { id: 1, title: 'The Sledgehammer', section: 'Momentum', content: Chapter1 },
    { id: 2, title: 'The Workhorse', section: 'Momentum', content: Chapter2 },
    { id: 3, title: 'The Best Punish in the Game', section: 'Momentum', content: Chapter3 },

    // Phase 2: The Stances — Simple, explosive, effective
    { id: 4, title: 'Libertador', section: 'The Stances', content: Chapter4 },
    { id: 5, title: 'Back Turn', section: 'The Stances', content: Chapter5 },

    // Phase 3: Disruption — Counter hits and reads
    { id: 6, title: 'Counter Hit Queen', section: 'Disruption', content: Chapter6 },

    // Phase 4: Damage — Combos and optimization
    { id: 7, title: 'Combos', section: 'Damage', content: Chapter7 },

    // Phase 5: The Complete Player
    { id: 8, title: 'Neutral and Poking', section: 'The Complete Player', content: Chapter8 },
    { id: 9, title: 'Heat System', section: 'The Complete Player', content: Chapter9 },

    // Phase 6: Survival and Mastery
    { id: 10, title: 'Defense and Panic', section: 'Survival', content: Chapter10 },
    { id: 11, title: 'The Complete Azucena', section: 'Mastery', content: Chapter11 },
  ],
}
