import { Platform } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

import useKeyboard from '../../hooks/useKeyboard'
import * as Styled from './styles'

export interface ScreenProps extends SafeAreaViewProps {
  showTop?: boolean
  showBottom?: boolean
}
const defaultValue: ScreenProps = {
  showTop: false,
  showBottom: false,
}

const Screen = (props: ScreenProps): JSX.Element => {
  const { showBottom, showTop, ...rest } = { defaultValue, ...props }

  const keyboardOpen = useKeyboard()

  return (
    <Styled.Screen
      showBottom={(Platform.OS === 'android' && !keyboardOpen) || showBottom}
      showTop={Platform.OS === 'android' || showTop}
      {...rest}
    />
  )
}

export default Screen
