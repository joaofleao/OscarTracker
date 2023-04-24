import React, { useState } from 'react'

import { ThemeContext, type ThemeContextType } from '../contexts'

const ThemeProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [loadingText, setLoadingText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const startLoading = (text: string): void => {
    setLoadingText(text)
    setIsLoading(true)
  }

  const stopLoading = (): void => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
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
