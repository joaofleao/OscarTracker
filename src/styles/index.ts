import type { ModeType, ThemeType } from '../types'
import { functions } from '../utils'
import { palette } from './colors'
import { spacing } from './spacing'
import { typography } from './typography'

export const getTheme = (mode: ModeType): ThemeType => {
  const theme = {
    palette: functions.getPalette(mode, palette),
    spacing,
    typography,
  } satisfies ThemeType
  return theme
}
