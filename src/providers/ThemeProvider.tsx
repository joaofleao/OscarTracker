import { useState } from 'react'
import { ThemeContextType } from '../types'
import { ThemeContext } from '../contexts'

type Provider = {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<Provider> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [loadingMessage, setLoadingMessage] = useState('')

  const value = {
    isLoading,
    setIsLoading,
    loadingMessage,
    setLoadingMessage,
  } satisfies ThemeContextType

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
