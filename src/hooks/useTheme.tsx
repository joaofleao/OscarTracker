import { useContext } from "react"
import { ThemeContext } from "../contexts"

const useTheme = () => {
  return useContext(ThemeContext)
}

export default useTheme
