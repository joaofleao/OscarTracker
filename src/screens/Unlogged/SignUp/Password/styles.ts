import { Animated, StyleSheet } from 'react-native'
import { styled } from 'styled-components/native'

export const Header = styled.View({
  gap: '12px',
  justifyContent: 'center',
  paddingVertical: '80px',
})

export const Content = styled.View({
  gap: '20px',
  paddingBottom: '64px',
})

export const Footer = styled(Animated.View)({
  position: 'absolute',
  left: '50%',
  right: '50%',
  alignItems: 'center',
  justifyContent: 'flex-end',
})

export const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})
