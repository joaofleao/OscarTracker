import type { SimplifiedPaletteType } from '../styles/colors'
import { type RadiusType } from '../styles/radius'
import type { TypographyType } from '../styles/typography'

export type ModeType = 'dark' | 'light' | 'highContrast'

export interface ThemeType {
  palette: SimplifiedPaletteType
  typography: TypographyType
  radius: RadiusType
}
