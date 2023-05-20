import styled from 'styled-components/native'

import { IconComponent } from '../../components'
import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  variant: 'primary' | 'secondary' | 'outlined' | 'text'
  width: 'fit' | 'fixed' | 'full'
  scale: any
  iconPositon: 'trailing' | 'leading'
  icon: string
  name: string
}

const getBackgroundColor = (props: Props): string => {
  if (props.variant === 'primary') return props.theme.palette.primary.default
  if (props.variant === 'secondary') return props.theme.palette.primary.shades.shade5
  return 'transparent'
}

const getContentColor = (props: Props): string => {
  if (props.variant === 'primary') return props.theme.palette.text.inverse
  return props.theme.palette.primary.default
}

const getBorder = (props: Props): string => {
  if (props.variant === 'outlined') return props.theme.palette.primary.default

  return 'transparent'
}
const getWidth = (props: Props): string => {
  if (props.width === 'fit') return 'auto'
  if (props.width === 'fixed') return props.theme.spacing.space256
  return '100%'
}
const getHorizontalPadding = (props: Props): any => {
  if (props.icon != null && props.iconPositon === 'leading') return { paddingRight: props.theme.spacing.space24, paddingLeft: props.theme.spacing.space20 }
  if (props.icon != null && props.iconPositon === 'trailing') return { paddingRight: props.theme.spacing.space20, paddingLeft: props.theme.spacing.space24 }
  return { paddingHorizontal: props.theme.spacing.space24 }
}

export const Button = styled.Pressable((props: Props) => ({
  background: getBackgroundColor(props),
  border: getBorder(props),
  paddingVertical: props.theme.spacing.space16,
  ...getHorizontalPadding(props),
  borderRadius: props.theme.spacing.space20,
  width: getWidth(props),
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}))

export const Label = styled.Text((props: Props) => ({
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.size.font16,
  lineHeight: props.theme.typography.size.font20,
  color: getContentColor(props),
  maxWidth: '80%',
  textAlign: 'center',
}))

export const Icon = styled(IconComponent)((props: Props) => ({
  color: getContentColor(props),
  fontSize: props.theme.typography.size.font20,
  lineHeight: props.theme.typography.size.font20,
  marginRight: props.name !== null && props.iconPositon === 'leading' && props.theme.spacing.space8,
  marginLeft: props.name !== null && props.iconPositon === 'trailing' && props.theme.spacing.space8,
}))
