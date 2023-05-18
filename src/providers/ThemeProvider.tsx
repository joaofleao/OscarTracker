import React, { useState } from 'react'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native'

import { ThemeContext, type ThemeContextType } from '../contexts'
import { getTheme } from '../styles'
import type { ModeType } from '../types'

const ThemeProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [loadingText, setLoadingText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [mode] = useState<ModeType>("dark")

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



  return (
    <ThemeContext.Provider value={value} >
      <StyledComponentsProvider theme={getTheme(mode)}>
        {children}
      </StyledComponentsProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
