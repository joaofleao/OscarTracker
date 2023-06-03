import { createContext } from 'react'

import { type ThemeType } from '../../types'

export interface ThemeContextType {
  loadingText: string
  isLoading: boolean
  stopLoading: () => void
  startLoading: (loading: string) => void
  theme: ThemeType
}

const ThemeContext = createContext<ThemeContextType | null>(null)
ThemeContext.displayName = 'ThemeContext'

export default ThemeContext
