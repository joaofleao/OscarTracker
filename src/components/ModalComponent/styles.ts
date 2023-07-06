import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  closeButton?: boolean
}

export const Background = styled.View((props: Props) => ({
  backgroundColor: props.theme.palette.background.backdrop,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  padding: props.theme.spacings.space20,
}))

export const Modal = styled.View((props: Props) => ({
  backgroundColor: props.theme.palette.background.default,
  padding: props.theme.spacings.space17,
  paddingTop: props.theme.spacings.space17,
  borderRadius: props.theme.spacings.space17,
  maxHeight: '80%',
}))

export const HeaderContent = styled.View((props: Props) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
}))

export const Title = styled.Text((props: Props) => ({
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.sizes.fontSize8,
  lineHeight: props.theme.typography.sizes.fontSize11,
  color: props.theme.palette.text.default,
  flex: 1,
  marginRight: props.closeButton ?? props.theme.spacings.space12,
}))

export const Description = styled.Text((props: Props) => ({
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.sizes.fontSize5,
  lineHeight: props.theme.typography.sizes.fontSize11,
  color: props.theme.palette.text.disabled,
  marginVertical: props.theme.spacings.space10,
}))

export const Footer = styled.View((props: Props) => ({
  alignItems: 'center',
}))
