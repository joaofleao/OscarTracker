import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Screen = styled(SafeAreaView)((props: StyledProps) => ({
  backgroundColor: props.theme.palette.background.default,
  flex: 1,
}))
