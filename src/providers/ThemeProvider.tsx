import { useState } from 'react'
import { ThemeContextType } from '../types'
import { ThemeContext } from '../contexts'

type Provider = {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<Provider> = ({ children }) => {
  const [loadingText, setLoadingText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const startLoading = (text: string) => {
    setLoadingText(text)
    setIsLoading(true)
  }

  const stopLoading = () => {
    setTimeout(() => setIsLoading(false), 1000)
  }

  const value = {
    isLoading,
    loadingText,
    stopLoading,
    startLoading,
  } satisfies ThemeContextType

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
