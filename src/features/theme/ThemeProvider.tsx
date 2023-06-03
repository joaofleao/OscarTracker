import React, { useState } from 'react'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native'

import { getTheme } from '../../styles'
import type { ModeType } from '../../types'
import ThemeContext, { type ThemeContextType } from './ThemeContext'

const ThemeProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [loadingText, setLoadingText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [mode] = useState<ModeType>('dark')

  const theme = getTheme(mode)

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
    theme,
  } satisfies ThemeContextType

  return (
    <ThemeContext.Provider value={value}>
      <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
