import styled from 'styled-components/native'

import { IconComponent } from '../../components'
import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  disabled: boolean
  variant: 'primary' | 'secondary' | 'outlined' | 'text'
  width: 'fit' | 'fixed' | 'full'
  scale: any
}

const getBackgroundColor = (props: Props): string => {
  if (props.variant === 'primary') {
    if (props.disabled) return props.theme.palette.primary.shades.shade30
    return props.theme.palette.primary.default
  }
  if (props.variant === 'secondary') {
    return props.theme.palette.primary.shades.shade5
  }
  return 'transparent'
}

const getContentColor = (props: Props): string => {
  if (props.variant === 'primary') {
    if (props.disabled) return props.theme.palette.background.default
    return props.theme.palette.text.inverse
  }
  if (props.disabled) return props.theme.palette.primary.shades.shade15
  return props.theme.palette.primary.default
}

const getBorder = (props: Props): string => {
  if (props.variant === 'outlined') {
    if (props.disabled) return props.theme.palette.primary.shades.shade15
    return props.theme.palette.primary.default
  }
  return 'transparent'
}
const getWidth = (props: Props): string => {
  if (props.width === 'fit') return 'auto'
  if (props.width === 'fixed') return props.theme.spacing.space256
  return '100%'
}

export const Button = styled.Pressable((props: Props) => ({
  background: getBackgroundColor(props),
  border: getBorder(props),
  padding: props.theme.spacing.space20,
  borderRadius: props.theme.spacing.space24,
  width: getWidth(props),
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}))

export const Label = styled.Text((props: Props) => ({
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.size.font18,
  lineHeight: props.theme.typography.size.font24,
  marginHorizontal: props.theme.spacing.space12,
  color: getContentColor(props),
  maxWidth: '80%',
  textAlign: 'center',
  backgroundColor: 'red',
}))

export const Icon = styled(IconComponent)((props: Props) => ({
  color: getContentColor(props),
  fontSize: props.theme.typography.size.font24,
  lineHeight: props.theme.typography.size.font24,
}))
