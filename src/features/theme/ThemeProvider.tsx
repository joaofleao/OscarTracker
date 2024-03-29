import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

import ThemeContext, { type ThemeContextType } from './ThemeContext'
import { colors } from '@styles/colors'
import { fonts } from '@styles/fonts'
import type { ModeType, ThemeType } from '@types'

const ThemeProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [mode, setMode] = useState<ModeType>('dark')
  const theme: ThemeType = {
    colors,
    fonts,
  }

  const value = {
    ...theme,
    mode,
    setMode,
  } satisfies ThemeContextType

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
