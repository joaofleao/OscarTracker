import { Animated } from 'react-native'
import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

interface ConteinerProps extends StyledProps {
  isSuccess: boolean
}

export const Container = styled(Animated.View)((props: ConteinerProps) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 20,
  position: 'absolute',
  marginHorizontal: props.theme.sizes.size10,
  padding: props.theme.sizes.size9,
  borderRadius: props.theme.sizes.size7,
  backgroundColor: props.isSuccess ? props.theme.palette.positive.default : props.theme.palette.negative.default,
}))

export const Content = styled.View((props: StyledProps) => ({
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
}))

export const Informations = styled.View((props: StyledProps) => ({
  flex: 1,
  marginHorizontal: props.theme.sizes.size9,
}))

export const Title = styled.Text((props: StyledProps) => ({
  color: props.theme.palette.text.default,
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.sizes.fontSize3,
  lineHeight: props.theme.typography.sizes.fontSize7,
}))

export const Description = styled.Text((props: StyledProps) => ({
  color: props.theme.palette.text.default,
  fontFamily: props.theme.typography.primary.medium,
  fontSize: props.theme.typography.sizes.fontSize2,
  lineHeight: props.theme.typography.sizes.fontSize5,
}))
