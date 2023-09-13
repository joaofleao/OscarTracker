import { palette } from './colors'
import { typography } from './typography'
import { getPalette } from './utils'
import type { ModeType, ThemeType } from '@types'

export const getTheme = (mode: ModeType): ThemeType => {
  const theme = {
    palette: getPalette(mode, palette),
    typography,
  } satisfies ThemeType
  return theme
}
