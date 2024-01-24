import { Animated } from 'react-native'
import { BlurView } from 'expo-blur'
import styled from 'styled-components/native'

export const Container = styled.Pressable(() => {
  return {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
  }
})

export const MovingBackground = styled(Animated.View)(() => {
  return {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export const Blur = styled(BlurView)(() => {
  return {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  }
})
export const Title = styled.Text((props) => {
  return {
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.bold,
    textAlign: 'center',
  }
})
