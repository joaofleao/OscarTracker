import { Animated, Pressable } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View(() => {
  return {
    flexDirection: 'row',
    gap: '24px',
    flex: 1,

    alignItems: 'center',
  }
})

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const Toggle = styled(AnimatedPressable)((props) => {
  return {
    borderWidth: 1,
    borderColor: props.theme.colors.background.container,
    borderRadius: '24px',

    width: '54px',
    height: '30px',

    flexDirection: 'row',
  }
})

type IndicatorTypes = {
  selected: boolean
  disabled: boolean
}
export const Indicator = styled(Animated.View)<IndicatorTypes>((props) => {
  return {
    backgroundColor: props.disabled
      ? props.theme.colors.background.container
      : props.selected
      ? props.theme.colors.primary.default
      : props.theme.colors.primary.shades.shade10,
    height: '24px',
    width: '24px',
    margin: '2px',
    borderRadius: '24px',
    position: 'absolute',
  }
})

export const Label = styled.Text((props) => {
  return {
    flex: 1,
    color: props.theme.colors.text.default,
    fontFamily: props.theme.fonts.primary.semibold,
    fontSize: '16px',
  }
})
