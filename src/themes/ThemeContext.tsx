import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { CharacterTheme } from '../types'
import { baseTheme, mergeTheme, themeToCssVars } from './base'

interface ThemeContextValue {
  theme: CharacterTheme
  cssVars: Record<string, string>
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: baseTheme,
  cssVars: themeToCssVars(baseTheme),
})

interface ThemeProviderProps {
  theme?: Partial<CharacterTheme>
  children: ReactNode
}

export function ThemeProvider({ theme: characterTheme, children }: ThemeProviderProps) {
  const value = useMemo(() => {
    const mergedTheme = characterTheme ? mergeTheme(characterTheme) : baseTheme
    return {
      theme: mergedTheme,
      cssVars: themeToCssVars(mergedTheme),
    }
  }, [characterTheme])

  return (
    <ThemeContext.Provider value={value}>
      <div style={value.cssVars as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
