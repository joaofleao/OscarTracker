import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  align: 'left' | 'center' | 'right'
  leadingButton: boolean
  trailingButton: boolean
  bigHeader: boolean
}

export const Container = styled.View((props: Props) => ({
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  backgroundColor: props.theme.palette.background.default,
}))

export const Description = styled.Text((props: Props) => ({
  color: props.theme.palette.text.default,
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.size.font20,
  marginTop: props.theme.spacing.space20,
}))
