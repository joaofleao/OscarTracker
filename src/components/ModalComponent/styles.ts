import styled from 'styled-components/native'

import { ButtonComponent } from '../../components'
import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  closeButton?: boolean
}

export const Background = styled.View((props: Props) => ({
  backgroundColor: props.theme.palette.background.backdrop,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  padding: props.theme.spacing.space20,
}))

export const Modal = styled.View((props: Props) => ({
  backgroundColor: props.theme.palette.background.default,
  padding: props.theme.spacing.space48,
  paddingTop: props.theme.spacing.space48,
  borderRadius: props.theme.spacing.space48,
  maxHeight: '80%',
}))

export const HeaderContent = styled.View((props: Props) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
}))

export const Title = styled.Text((props: Props) => ({
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.size.font26,
  lineHeight: props.theme.typography.size.font36,
  color: props.theme.palette.text.default,
  flex: 1,
  marginRight: props.closeButton ?? props.theme.spacing.space12,
}))

export const Description = styled.Text((props: Props) => ({
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.size.font20,
  lineHeight: props.theme.typography.size.font36,
  color: props.theme.palette.text.disabled,
  marginVertical: props.theme.spacing.space10,
}))

export const Footer = styled.View((props: Props) => ({
  alignItems: 'center',
}))
export const Button = styled(ButtonComponent)((props: Props) => ({
  marginTop: props.theme.spacing.space20,
}))
