import { Animated, StyleSheet } from 'react-native'
import { styled } from 'styled-components/native'

export const Header = styled.View(() => {
  return {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '120px',
  }
})

export const Content = styled.View(() => {
  return {
    gap: '28px',
  }
})

export const Footer = styled(Animated.View)({
  position: 'absolute',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'flex-end',
})

export const ButtonContainer = styled.View(() => {
  return {
    alignItems: 'center',
  }
})

export const ForgotLabel = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: '12px',
    color: props.theme.colors.primary.default,
  }
})

export const ForgotButton = styled.TouchableOpacity(() => {
  return {
    padding: '12px',
  }
})

export const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
})
