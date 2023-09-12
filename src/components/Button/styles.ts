import styled from 'styled-components/native'

interface PressableProps {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'action'
  width: 'fit' | 'fixed' | 'full'
  icon: boolean
}

export const Pressable = styled.Pressable<PressableProps>((props) => {
  const getBackgroundColor = (): string => {
    if (props.variant === 'primary') return props.theme.palette.primary.default
    if (props.variant === 'secondary') return props.theme.palette.primary.shades.shade5
    if (props.variant === 'action') return props.theme.palette.primary.shades.shade5
    return 'transparent'
  }

  const getWidth = (): string => {
    if (props.width === 'fit') return 'auto'
    if (props.width === 'fixed') return '256px'
    return '100%'
  }

  const getHorizontalPadding = (): string => {
    if (props.variant === 'action') return '8px'
    if (props.icon != null) return '16px'
    return '24px'
  }

  const getVerticalPadding = (): string => {
    if (props.variant === 'action') return '8px'
    return '12px'
  }

  return {
    background: getBackgroundColor(),
    paddingVertical: getVerticalPadding(),
    paddingHorizontal: getHorizontalPadding(),
    border: props.variant === 'outlined' ? props.theme.palette.primary.default : 'transparent',
    borderRadius: props.variant === 'action' ? '12px' : '16px',
    width: getWidth(),
    justifyContent: 'center',
    alignItems: 'center',
  }
})

interface LabelProps {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'action'
}

export const Label = styled.Text<LabelProps>((props) => {
  const getContentColor = (): string => {
    if (props.variant === 'primary') return props.theme.palette.text.inverse
    return props.theme.palette.primary.default
  }

  return {
    fontFamily: props.theme.typography.primary.bold,
    fontSize: '16px',
    lineHeight: '20px',
    color: getContentColor(),
    textAlign: 'center',
  }
})
