import { useEffect, useRef } from 'react'
import { Animated, ViewProps } from 'react-native'

import useKeyboard from '../../hooks/useKeyboard'
import * as Styled from './styles'
import useScreenInsets from '@hooks/useScreenInsets'

const Footer = (props: ViewProps): JSX.Element => {
  const { bottom } = useScreenInsets()
  const keyboardOpen = useKeyboard()

  const animation = useRef<Animated.Value>(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(animation, {
      toValue: keyboardOpen ? 1 : 0,
      useNativeDriver: true,
    }).start()
  }, [keyboardOpen, animation])

  const transform = [
    {
      translateY: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 400],
      }),
    },
  ]

  return (
    <Styled.Footer
      style={{ transform, bottom }}
      {...props}
    />
  )
}

export default Footer
