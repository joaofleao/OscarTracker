import { SafeAreaView } from 'react-native'
import { Platform } from 'react-native'

import useKeyboard from '../../hooks/useKeyboard'
import * as Styled from './styles'

export interface ScreenProps extends Partial<SafeAreaView> {
  children?: JSX.Element | JSX.Element[]
  showTop?: boolean
  showBottom?: boolean
}
const defaultValue: ScreenProps = {
  showTop: false,
  showBottom: false,
}

const Screen = (props: ScreenProps): JSX.Element => {
  const { showBottom, showTop, children, ...rest } = { defaultValue, ...props }

  const keyboardOpen = useKeyboard()

  return (
    <Styled.Screen
      showBottom={(Platform.OS === 'android' && !keyboardOpen) || showBottom}
      showTop={Platform.OS === 'android' || showTop}
      {...rest}
    >
      {children}
    </Styled.Screen>
  )
}

export default Screen
