import type { ColorsType } from '@styles/colors'
import type { FontsType } from '@styles/fonts'

export type ModeType = 'dark' | 'light' | 'highContrast'

export interface ThemeType {
  colors: ColorsType
  fonts: FontsType
}
