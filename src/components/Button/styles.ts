import styled from 'styled-components/native'

import IconComponent from '../../assets/icons'
import type { StyledProps } from '../../types'

interface Props extends StyledProps {
  label: string
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
  if (props.width === 'fixed') return props.theme.spacings.space31
  return '100%'
}
const getHorizontalPadding = (props: Props): any => {
  if (props.label !== null) return { paddingHorizontal: props.theme.spacings.space16 }
  if (props.icon !== null && props.iconPositon === 'leading') return { paddingRight: props.theme.spacings.space24, paddingLeft: props.theme.spacings.space20 }
  if (props.icon !== null && props.iconPositon === 'trailing') return { paddingRight: props.theme.spacings.space20, paddingLeft: props.theme.spacings.space24 }
  return { paddingHorizontal: props.theme.spacings.space24 }
}

export const Pressable = styled.Pressable((props: Props) => ({
  background: getBackgroundColor(props),
  border: getBorder(props),
  paddingVertical: props.theme.spacings.space9,
  ...getHorizontalPadding(props),
  borderRadius: props.theme.spacings.space10,
  width: getWidth(props),
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}))

export const Label = styled.Text((props: Props) => ({
  fontFamily: props.theme.typography.primary.bold,
  fontSize: props.theme.typography.sizes.fontSize3,
  lineHeight: props.theme.typography.sizes.fontSize5,
  color: getContentColor(props),
  maxWidth: '80%',
  textAlign: 'center',
}))

export const Icon = styled(IconComponent)((props: Props) => ({
  color: getContentColor(props),
  fontSize: props.theme.typography.sizes.fontSize5,
  lineHeight: props.theme.typography.sizes.fontSize5,
  marginRight: props.name !== null && props.iconPositon === 'leading' && props.label === null && props.theme.spacings.space8,
  marginLeft: props.name !== null && props.iconPositon === 'trailing' && props.label === null && props.theme.spacings.space8,
}))
