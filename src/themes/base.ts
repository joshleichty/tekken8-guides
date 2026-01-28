import type { CharacterTheme } from '../types'

// Full required theme colors for internal use
interface FullThemeColors {
  bgPrimary: string
  bgSecondary: string
  bgCard: string
  bgCardHover: string
  accent: string
  accentDim: string
  accentSecondary: string
  accentSecondaryDim: string
  success: string
  successDim: string
  warning: string
  danger: string
  textPrimary: string
  textSecondary: string
  textMuted: string
  border: string
  inputBg: string
  characterGlow?: string
  heatGlow?: string
}

interface FullTheme {
  name: string
  colors: FullThemeColors
  customVars?: Record<string, string>
}

const baseColors: FullThemeColors = {
  bgPrimary: '#0a0a0c',
  bgSecondary: '#111114',
  bgCard: '#1a1a1f',
  bgCardHover: '#222228',
  accent: '#6366f1', // Indigo as default
  accentDim: '#4338ca',
  accentSecondary: '#ec4899', // Pink
  accentSecondaryDim: '#be185d',
  success: '#22c55e',
  successDim: '#166534',
  warning: '#f59e0b',
  danger: '#ef4444',
  textPrimary: '#f0f0f5',
  textSecondary: '#a0a0b0',
  textMuted: '#606070',
  border: '#2a2a35',
  inputBg: '#0d0d10',
}

export const baseTheme: FullTheme = {
  name: 'base',
  colors: baseColors,
}

// Helper to merge character theme with base
export function mergeTheme(characterTheme: CharacterTheme): FullTheme {
  return {
    name: characterTheme.name || baseTheme.name,
    colors: {
      ...baseTheme.colors,
      ...(characterTheme.colors || {}),
    },
    customVars: {
      ...baseTheme.customVars,
      ...(characterTheme.customVars || {}),
    },
  }
}

// Convert theme to CSS variables
export function themeToCssVars(theme: FullTheme): Record<string, string> {
  const vars: Record<string, string> = {}
  
  // Convert camelCase to kebab-case for CSS vars
  const toKebab = (str: string) => 
    str.replace(/([A-Z])/g, '-$1').toLowerCase()
  
  for (const [key, value] of Object.entries(theme.colors)) {
    if (value) {
      vars[`--${toKebab(key)}`] = value
    }
  }
  
  if (theme.customVars) {
    for (const [key, value] of Object.entries(theme.customVars)) {
      vars[`--${key}`] = value
    }
  }
  
  return vars
}
