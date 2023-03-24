import { createContext } from "react"
import { type ThemeContextType } from "../types"

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)
ThemeContext.displayName = "ThemeContext"

export default ThemeContext
