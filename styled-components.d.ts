/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { ThemeType } from './src/types'

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
