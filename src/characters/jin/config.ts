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

export const jinConfig: CharacterConfig = {
  slug: 'jin',
  name: 'Jin Kazama',
  subtitle: 'Lightning of Fate — Tekken 8 Season 2',
  icon: '⚡',
  description: 'The complete martial artist. Jin excels at everything — pokes, punishment, mixups, and defense. Master the Electric and you master Tekken.',
  
  theme: {
    name: 'jin',
    colors: {
      // Jin's theme: Electric blue with devil red undertones
      accent: '#3b82f6',           // Electric blue
      accentDim: '#1d4ed8',
      accentSecondary: '#dc2626',  // Devil red
      accentSecondaryDim: '#991b1b',
      bgPrimary: '#030712',        // Near black
      bgSecondary: '#0f172a',      // Slate 900
      bgCard: '#1e293b',           // Slate 800
      bgCardHover: '#334155',      // Slate 700
      textPrimary: '#f1f5f9',      // Slate 100
      textSecondary: '#94a3b8',    // Slate 400
      textMuted: '#64748b',        // Slate 500
      border: '#334155',           // Slate 700
      characterGlow: 'rgba(59, 130, 246, 0.25)',
      heatGlow: 'rgba(220, 38, 38, 0.35)',
    },
  },
  
  chapters: [
    // Phase 1: Understanding Jin (for Law players)
    { id: 1, title: 'How Jin Wins', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'Your Poke Loops', section: 'Foundation', content: Chapter2 },
    
    // Phase 2: Building Offense
    { id: 3, title: 'Counter-Hit Weapons', section: 'Offense', content: Chapter3 },
    { id: 4, title: 'Opening People Up', section: 'Offense', content: Chapter4 },
    { id: 5, title: 'Plus Frame Weapons', section: 'Offense', content: Chapter5 },
    
    // Phase 3: Core Tools
    { id: 6, title: 'ZEN Stance', section: 'Core Tools', content: Chapter6 },
    { id: 7, title: 'Combos', section: 'Core Tools', content: Chapter7 },
    { id: 8, title: 'Punishment', section: 'Core Tools', content: Chapter8 },
    
    // Phase 4: Game Systems
    { id: 9, title: 'Heat System', section: 'Game Systems', content: Chapter9 },
    { id: 10, title: 'Wall Game', section: 'Game Systems', content: Chapter10 },
    { id: 11, title: 'Defense', section: 'Game Systems', content: Chapter11 },
    
    // Phase 5: Mastery
    { id: 12, title: 'Putting It All Together', section: 'Mastery', content: Chapter12 },
  ],
}
