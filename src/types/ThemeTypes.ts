import type { SimplifiedPaletteType } from '../styles/colors'
import { type RadiusType } from '../styles/radius'
import { type SizesType } from '../styles/sizes'
import type { SpacingsType } from '../styles/spacings'
import type { TypographyType } from '../styles/typography'

export type ModeType = 'dark' | 'light' | 'highContrast'

export interface ThemeType {
  palette: SimplifiedPaletteType
  spacings: SpacingsType
  typography: TypographyType
  sizes: SizesType
  radius: RadiusType
}

export interface StyledProps {
  theme: ThemeType
}
