import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  align: 'left' | 'center' | 'right'
  leadingButton: boolean
  trailingButton: boolean
  bigHeader: boolean
}

export const Container = styled.View((props: Props) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginHorizontal: props.theme.spacing.space20,
  minHeight: 54,
}))

export const Title = styled.Text((props: Props) => ({
  color: props.theme.palette.text.default,
  fontSize: props.bigHeader ? props.theme.typography.size.font26 : props.theme.typography.size.font20,
  lineHeight: props.bigHeader ? props.theme.typography.size.font42 : props.theme.typography.size.font32,
  fontFamily: props.theme.typography.primary.semibold,
  textAlign: props.align,
}))

export const Description = styled.Text((props: Props) => ({
  color: props.theme.palette.text.light,
  fontSize: props.bigHeader ? props.theme.typography.size.font20 : props.theme.typography.size.font16,
  lineHeight: props.bigHeader ? props.theme.typography.size.font32 : props.theme.typography.size.font26,
  fontFamily: props.theme.typography.primary.medium,
  textAlign: props.align,
}))

export const TextContainer = styled.View((props: Props) => ({
  marginRight: (props.trailingButton || (!props.trailingButton && props.leadingButton && props.align === 'center')) && '16px',
  marginLeft: (props.leadingButton || (!props.leadingButton && props.trailingButton && props.align === 'center')) && '16px',
  flex: 1,
}))

export const ButtonContainer = styled.View((props: Props) => ({
  minWidth: 54,
  height: '100%',
}))
