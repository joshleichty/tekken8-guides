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

export const larsConfig: CharacterConfig = {
  slug: 'lars',
  name: 'Lars Alexandersson',
  subtitle: 'The Lion of the Rebellion — Tekken 8 Season 2',
  icon: '⚡',
  description: 'A stance-chain character who punishes mistakes and never lets go. Master his legendary punishment, flow through three interconnected stances, and overwhelm opponents with relentless momentum. From bottom tier to arguably the best in the game.',

  theme: {
    name: 'lars',
    colors: {
      accent: '#3b82f6',           // Electric blue (his arc blast lightning)
      accentDim: '#2563eb',
      accentSecondary: '#f59e0b',  // Amber gold (rebellion / military)
      accentSecondaryDim: '#d97706',
      bgPrimary: '#070b14',        // Deep navy black
      bgSecondary: '#0c1220',
      bgCard: '#111827',
      bgCardHover: '#1f2937',
      textPrimary: '#f0f4ff',      // Slightly blue-tinted white
      textSecondary: '#94a3b8',
      textMuted: '#475569',
      border: '#1e293b',
      characterGlow: 'rgba(59, 130, 246, 0.3)',
      heatGlow: 'rgba(245, 158, 11, 0.4)',
    },
  },

  chapters: [
    // Phase 1: Take Your Turn — Punishment is the gateway
    { id: 1, title: 'The Lion of the Rebellion', section: 'Take Your Turn', content: Chapter1 },
    { id: 2, title: 'Punishment Arsenal', section: 'Take Your Turn', content: Chapter2 },

    // Phase 2: Never Let Go — Stances as one flowing system
    { id: 3, title: 'The Stance Chain', section: 'Never Let Go', content: Chapter3 },
    { id: 4, title: 'Stance Pressure', section: 'Never Let Go', content: Chapter4 },

    // Phase 3: Control the Battlefield — Neutral and spacing
    { id: 5, title: 'Neutral Control', section: 'Control the Battlefield', content: Chapter5 },
    { id: 6, title: 'Counter Hits & Frame Traps', section: 'Control the Battlefield', content: Chapter6 },

    // Phase 4: Maximum Damage — Execution
    { id: 7, title: 'Combos', section: 'Maximum Damage', content: Chapter7 },
    { id: 8, title: 'The Wall', section: 'Maximum Damage', content: Chapter8 },

    // Phase 5: Unleash — Heat and advanced pressure
    { id: 9, title: 'Heat System', section: 'Unleash', content: Chapter9 },

    // Phase 6: The Complete Lion — Defense and mastery
    { id: 10, title: 'Defense & Movement', section: 'The Complete Lion', content: Chapter10 },
    { id: 11, title: 'The Complete Lars', section: 'The Complete Lion', content: Chapter11 },
  ],
}
