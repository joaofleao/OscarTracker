import { styled } from 'styled-components/native'

import { StyledProps } from '../../types'

interface TextProps extends StyledProps {
  align: 'left' | 'center' | 'right'
  bigHeader: boolean
}

export const TextContainer = styled.View((props: StyledProps) => {
  return {
    gap: props.theme.sizes.size2,
    flex: 1,
    justifyContent: 'center',
  }
})

export const Title = styled.Text((props: TextProps) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.bigHeader
      ? props.theme.typography.sizes.fontSize10
      : props.theme.typography.sizes.fontSize5,
    lineHeight: props.bigHeader
      ? props.theme.typography.sizes.fontSize13
      : props.theme.typography.sizes.fontSize8,
    fontFamily: props.theme.typography.primary.semibold,
    textAlign: props.align,
    alignSelf: props.align,
  }
})

export const Logo = styled.Text((props: TextProps) => {
  return {
    color: props.theme.palette.text.default,
    fontSize: props.bigHeader
      ? props.theme.typography.sizes.fontSize10
      : props.theme.typography.sizes.fontSize5,
    lineHeight: props.bigHeader
      ? props.theme.typography.sizes.fontSize13
      : props.theme.typography.sizes.fontSize8,
    fontFamily: props.theme.typography.secondary.semibold,
    textAlign: props.align,
  }
})

export const Description = styled.Text((props: TextProps) => {
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
