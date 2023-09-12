import type { ModeType, ThemeType } from '../types'
import { palette } from './colors'
import { radius } from './radius'
import { typography } from './typography'
import { getPalette } from './utils'

export const getTheme = (mode: ModeType): ThemeType => {
  const theme = {
    palette: getPalette(mode, palette),
    typography,
    radius,
  } satisfies ThemeType
  return theme
}
