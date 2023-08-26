import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Container = styled.View((props: StyledProps) => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: props.theme.sizes.size3,
    alignItems: 'center',
  }
})

export const Number = styled.Text((props: StyledProps) => {
  return {
    color: props.theme.palette.text.light,
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
  }
})

export const Track = styled.View((props: StyledProps) => {
  return {
    backgroundColor: props.theme.palette.background.container,
    height: props.theme.sizes.size5,
    borderRadius: props.theme.radius.borderRadius7,
    flex: 1,
    marginHorizontal: props.theme.sizes.size6,
    overflow: 'hidden',
  }
})

export const Progress = styled(Animated.View)((props: StyledProps) => {
  return {
    backgroundColor: props.theme.palette.primary.default,
    width: '200%',
    height: '100%',
    borderRadius: props.theme.radius.borderRadius7,
  }
})
