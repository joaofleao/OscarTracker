import type { ModeType, ThemeType } from '../types'
import { palette } from './colors'
import { radius } from './radius'
import { sizes } from './sizes'
import { spacings } from './spacings'
import { typography } from './typography'
import { getPalette } from './utils'

export const getTheme = (mode: ModeType): ThemeType => {
  const theme = {
    palette: getPalette(mode, palette),
    spacings,
    typography,
    radius,
    sizes,
  } satisfies ThemeType
  return theme
}
