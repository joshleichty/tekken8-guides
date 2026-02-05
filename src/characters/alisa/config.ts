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

export const alisaConfig: CharacterConfig = {
  slug: 'alisa',
  name: 'Alisa Bosconovitch',
  subtitle: 'Destroying Automaton — Tekken 8',
  icon: '🪽',
  description:
    'A movement-heavy pressure specialist. Alisa wins by forcing approach checks, converting into DES pressure, and cashing out with chip, stance mix, and wall carry.',

  theme: {
    name: 'alisa',
    colors: {
      accent: '#ff6ba8',
      accentDim: '#d64d86',
      accentSecondary: '#57c8ff',
      accentSecondaryDim: '#2f8fbe',
      bgPrimary: '#100a12',
      bgSecondary: '#1a111d',
      bgCard: '#23162a',
      bgCardHover: '#2d1c36',
      textPrimary: '#fff2f8',
      textSecondary: '#d8bcd0',
      textMuted: '#9a7890',
      border: '#4b3257',
      characterGlow: 'rgba(255, 107, 168, 0.25)',
      heatGlow: 'rgba(87, 200, 255, 0.3)',
    },
  },

  chapters: [
    { id: 1, title: 'The Alisa Win Condition', section: 'Foundation', content: Chapter1 },
    { id: 2, title: 'Your Entry Buttons', section: 'Foundation', content: Chapter2 },
    { id: 3, title: 'DES Pressure Engine', section: 'Pressure', content: Chapter3 },
    { id: 4, title: 'DBT Mixups That Matter', section: 'Pressure', content: Chapter4 },
    { id: 5, title: 'Neutral and Low Game', section: 'Neutral', content: Chapter5 },
    { id: 6, title: 'Punishment and Whiff Game', section: 'Fundamentals', content: Chapter6 },
    { id: 7, title: 'Heat Conversion Plan', section: 'Heat', content: Chapter7 },
    { id: 8, title: 'Wall and Oki Control', section: 'Advanced', content: Chapter8 },
    { id: 9, title: 'Defense and Anti-Stepping', section: 'Advanced', content: Chapter9 },
    { id: 10, title: 'Ranked Playbook', section: 'Mastery', content: Chapter10 },
  ],
}
