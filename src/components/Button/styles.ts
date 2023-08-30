import styled from 'styled-components/native'

import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  label: string
  variant: 'primary' | 'secondary' | 'outlined' | 'text' | 'action'
  width: 'fit' | 'fixed' | 'full'
  icon: boolean
  name: string
}

export const Pressable = styled.Pressable((props: Props) => {
  const getBackgroundColor = (): string => {
    if (props.variant === 'primary') return props.theme.palette.primary.default
    if (props.variant === 'secondary') return props.theme.palette.primary.shades.shade5
    if (props.variant === 'action') return props.theme.palette.primary.shades.shade5
    return 'transparent'
  }

  const getWidth = (): string => {
    if (props.width === 'fit') return 'auto'
    // if (props.width === 'fixed') return props.theme.spacings.space31
    // return '100%'
  }

  const getHorizontalPadding = (): string => {
    if (props.variant === 'action') return props.theme.spacings.space8
    if (props.icon != null) return props.theme.spacings.space9
    return props.theme.spacings.space11
  }

  const getVerticalPadding = (): string => {
    if (props.variant === 'action') return props.theme.spacings.space8
    if (props.icon != null) return props.theme.spacings.space9
    return props.theme.spacings.space9
  }

  return {
    background: getBackgroundColor(),
    paddingVertical: getVerticalPadding(),
    paddingHorizontal: getHorizontalPadding(),
    border: props.variant === 'outlined' ? props.theme.palette.primary.default : 'transparent',
    borderRadius:
      props.variant === 'action' ? props.theme.spacings.space9 : props.theme.spacings.space10,
    width: getWidth(),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export const Label = styled.Text((props: Props) => {
  const getContentColor = (): string => {
    if (props.variant === 'primary') return props.theme.palette.text.inverse
    return props.theme.palette.primary.default
  }
  return {
    fontFamily: props.theme.typography.primary.bold,
    fontSize: props.theme.typography.sizes.fontSize3,
    lineHeight: props.theme.typography.sizes.fontSize5,
    color: getContentColor(),

    textAlign: 'center',
  }
})
