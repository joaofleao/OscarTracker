import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

export const Container = styled.View((props: StyledProps) => ({
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  backgroundColor: props.theme.palette.background.default,
}))

export const Description = styled.Text((props: StyledProps) => ({
  color: props.theme.palette.text.default,
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.sizes.fontSize5,
  marginTop: props.theme.spacings.space5,
}))
