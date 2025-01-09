import { useEffect, useRef } from 'react'
import { Animated, View, ViewProps } from 'react-native'

import useKeyboard from '../../../hooks/useKeyboard'
import useStyles from './styles'

type FooterProps = ViewProps & {
  considerNavBar?: boolean
}

const defaultProps: FooterProps = {
  considerNavBar: false,
}

const Footer = (props: FooterProps): JSX.Element => {
  const { considerNavBar } = { ...defaultProps, ...props }
  const keyboardOpen = useKeyboard()
  const styles = useStyles({ considerNavBar, keyboardOpen })

  const translateY = useRef<Animated.Value>(new Animated.Value(0)).current

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: keyboardOpen ? 400 : 0,
      useNativeDriver: true,
    }).start()
  }, [keyboardOpen, translateY])

  return (
    <View
      style={[styles.footer, { transform: [{ translateY }] }]}
      {...props}
    />
  )
}

export default Footer
