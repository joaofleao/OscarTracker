import { Animated, Pressable } from 'react-native'
import styled from 'styled-components/native'

type ContainerProps = {
  large: boolean
}

const AnimatedContainer = Animated.createAnimatedComponent(Pressable)

export const Container = styled(AnimatedContainer)<ContainerProps>((props) => {
  return {
    width: props.large ? '158px' : '106px',
    gap: '8px',
  }
})

export const Title = styled.Text((props) => {
  return {
    fontFamily: props.theme.fonts.primary.bold,
    color: props.theme.colors.text.default,
    fontSize: '16px',
  }
})
