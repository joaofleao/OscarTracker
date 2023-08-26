import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  align: 'left' | 'center' | 'right'
  leadingButton: boolean
  trailingButton: boolean
  bigHeader: boolean
}

export const Container = styled.View((props: Props) => {
  return {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: props.theme.spacings.space10,
    minHeight: 54,
    paddingTop: props.theme.spacings.space12,
    paddingBottom: props.theme.spacings.space12,
  }
})

export const Title = styled.Text((props: Props) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.bigHeader
      ? props.theme.typography.sizes.fontSize8
      : props.theme.typography.sizes.fontSize5,
    lineHeight: props.bigHeader
      ? props.theme.typography.sizes.fontSize12
      : props.theme.typography.sizes.fontSize8,
    fontFamily: props.theme.typography.primary.semibold,
    textAlign: props.align,
  }
})

export const Description = styled.Text((props: Props) => {
  return {
    color: props.theme.palette.text.light,
    fontSize: props.bigHeader
      ? props.theme.typography.sizes.fontSize5
      : props.theme.typography.sizes.fontSize3,
    lineHeight: props.bigHeader
      ? props.theme.typography.sizes.fontSize10
      : props.theme.typography.sizes.fontSize8,
    fontFamily: props.theme.typography.primary.medium,
    textAlign: props.align,
  }
})

export const TextContainer = styled.View((props: Props) => {
  return {
    marginRight:
      (props.trailingButton ||
        (!props.trailingButton && props.leadingButton && props.align === 'center')) &&
      '16px',
    marginLeft:
      (props.leadingButton ||
        (!props.leadingButton && props.trailingButton && props.align === 'center')) &&
      '16px',
    flex: 1,
    minHeight: 54,
    justifyContent: 'center',
  }
})

export const ButtonContainer = styled.View(() => {
  return {
    minWidth: 54,
    height: '100%',
  }
})
