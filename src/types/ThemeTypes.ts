import type { SimplifiedPaletteType } from '../styles/colors'
import type { SpacingType } from '../styles/spacing'
import type { TypographyType } from '../styles/typography'

export type ModeType = 'dark' | 'light' | 'highContrast'

export interface ThemeType {
  palette: SimplifiedPaletteType
  spacing: SpacingType
  typography: TypographyType
}

export interface StyledProps {
  theme: ThemeType
}
