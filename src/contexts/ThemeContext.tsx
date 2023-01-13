import { createContext } from 'react'
import { ThemeContextType } from '../types'

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)
ThemeContext.displayName = 'ThemeContext'

export default ThemeContext
