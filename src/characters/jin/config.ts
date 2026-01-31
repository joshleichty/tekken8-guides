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
import { Chapter10FrameTraps } from './chapters/Chapter10FrameTraps'
import { Chapter10 } from './chapters/Chapter10'
import { Chapter11 } from './chapters/Chapter11'
import { Chapter12 } from './chapters/Chapter12'
// Part 2: Advanced Jin
import { Chapter14HotCold } from './chapters/Chapter14HotCold'
import { Chapter15DrillingPressure } from './chapters/Chapter15DrillingPressure'
import { Chapter16ReadingAdapting } from './chapters/Chapter16ReadingAdapting'
import { Chapter17Integration } from './chapters/Chapter17Integration'

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
    // Phase 1: Foundation
    { id: 1, title: 'Meet Jin Kazama', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'First Buttons', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'Core Mids & Lows', section: 'Foundation', content: Chapter3 },
    
    // Phase 2: Strings & Combos
    { id: 4, title: 'Jab Strings', section: 'Strings & Combos', content: Chapter4 },
    { id: 5, title: 'First Combos', section: 'Strings & Combos', content: Chapter5 },
    
    // Phase 3: Core Tools
    { id: 6, title: 'The Electric', section: 'Core Tools', content: Chapter6 },
    { id: 7, title: 'ZEN Stance', section: 'Core Tools', content: Chapter7 },
    
    // Phase 4: Game Systems
    { id: 8, title: 'Standard Combos', section: 'Game Systems', content: Chapter8 },
    { id: 9, title: 'Punishment', section: 'Game Systems', content: Chapter9 },
    { id: 10, title: 'Frame Traps & Setups', section: 'Game Systems', content: Chapter10FrameTraps },
    
    // Phase 5: Heat & Defense
    { id: 11, title: 'Heat System', section: 'Heat & Defense', content: Chapter10 },
    { id: 12, title: 'Defense & Parry', section: 'Heat & Defense', content: Chapter11 },
    
    // Phase 6: Mastery (Part 1 Conclusion)
    { id: 13, title: 'Complete Jin', section: 'Mastery', content: Chapter12 },
    
    // Part 2: Advanced Jin - Practice & Integration
    { id: 14, title: 'The Hot & Cold Mindset', section: 'Advanced Training', content: Chapter14HotCold },
    { id: 15, title: 'Drilling Jin\'s Pressure', section: 'Advanced Training', content: Chapter15DrillingPressure },
    { id: 16, title: 'Reading & Adapting', section: 'Advanced Training', content: Chapter16ReadingAdapting },
    { id: 17, title: 'Integration Challenges', section: 'Advanced Training', content: Chapter17Integration },
  ],
}
