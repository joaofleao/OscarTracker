import { Animated, Pressable } from 'react-native'
import styled from 'styled-components/native'

type ContainerProps = {
  selected: boolean
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const Container = styled(AnimatedPressable)<ContainerProps>((props) => {
  return {
    backgroundColor: props.selected ? props.theme.colors.primary.default : 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    flexDirection: 'row',
    gap: '8px',
    padding: '8px 12px',
    border: `1px solid ${props.theme.colors.primary.default}`,
  }
})

type LabelProps = {
  selected: boolean
}

export const Label = styled.Text<LabelProps>((props) => {
  return {
    color: props.selected ? props.theme.colors.text.inverse : props.theme.colors.primary.default,
    fontFamily: props.theme.fonts.primary.bold,
    textAlign: 'center',
    flex: 1,
  }
})
