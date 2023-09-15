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

  return {
    background: getBackgroundColor(),
    border: props.variant === 'outlined' ? props.theme.palette.primary.default : 'transparent',
    borderRadius: props.variant === 'action' ? '12px' : '16px',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
