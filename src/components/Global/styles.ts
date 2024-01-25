import { Animated, Platform } from 'react-native'
import styled from 'styled-components/native'

import useScreenInsets from '@hooks/useScreenInsets'

export const Screen = styled.SafeAreaView((props) => {
  return {
    backgroundColor: props.theme.colors.background.default,
    flex: 1,
    position: 'relative',
  }
})

export const Separator = styled.View({
  width: '20px',
  height: '20px',
})

export const SmallSeparator = styled.View({
  width: '8px',
  height: '8px',
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '22px',
    lineHeight: '32px',
    color: props.theme.colors.text.default,
    letterSpacing: '1.5px',
  }
})

export const Description = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.regular,
    fontSize: '16px',
    lineHeight: '24px',
    color: props.theme.colors.text.default,
    letterSpacing: '1px',
  }
})

type FooterProps = {
  considerNavBar?: boolean
  keyboardOpen?: boolean
}

export const Footer = styled(Animated.View)<FooterProps>((props) => {
  const insets = useScreenInsets()

  return {
    opacity: props.keyboardOpen && Platform.OS === 'android' ? 0 : 1,
    bottom: (props.considerNavBar ? 84 : 0) + (Platform.OS === 'android' ? 0 : insets.bottom) + 12,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  }
})

export const NavBarSeparator = styled.View({
  width: '100%',
  height: '100px',
})
