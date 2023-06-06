import { createContext } from 'react'

import { type ThemeType } from '../../types'

export interface ThemeContextType {
  theme: ThemeType
  mode: 'dark' | 'light' | 'highContrast'
  setMode: (mode: 'dark' | 'light' | 'highContrast') => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)
ThemeContext.displayName = 'ThemeContext'

export default ThemeContext
