import React, { useState } from 'react'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native'

import { getTheme } from '../../styles'
import type { ModeType } from '../../types'
import ThemeContext, { type ThemeContextType } from './ThemeContext'

const ThemeProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [mode, setMode] = useState<ModeType>('dark')
  const theme = getTheme(mode)

  const value = {
    ...theme,
    mode,
    setMode,
  } satisfies ThemeContextType

  return (
    <ThemeContext.Provider value={value}>
      <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
