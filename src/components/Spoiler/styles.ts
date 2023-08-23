import { Animated } from 'react-native'
import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Container = styled.Pressable((props: StyledProps) => ({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: props.theme.radius.borderRadius4,
  overflow: 'hidden',
  position: 'relative',
}))

export const Background = styled(Animated.View)((props: StyledProps) => ({
  height: '100%',
  width: '100%',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.theme.palette.background.container,
  padding: props.theme.sizes.size6,
}))
export const Title = styled.Text((props: StyledProps) => ({
  color: props.theme.palette.text.default,
  fontFamily: props.theme.typography.primary.bold,
  textAlign: 'center',
}))
