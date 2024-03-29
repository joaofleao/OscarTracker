import { Animated, Pressable } from 'react-native'
import styled from 'styled-components/native'

interface PressableProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'text'
  icon: boolean
  size?: 'action' | 'default'
  width: 'fit' | 'fixed' | 'full'
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const Container = styled(AnimatedPressable)<PressableProps>((props) => {
  const getBackgroundColor = (): string => {
    if (props.variant === 'primary') return props.theme.colors.primary.default
    if (props.variant === 'tertiary') return props.theme.colors.background.container
    if (props.variant === 'secondary') return props.theme.colors.primary.shades.shade5
    return 'transparent'
  }

  const getHorizontalPadding = (): string => {
    if (props.size === 'action') return '8px'
    if (props.icon) return '10px'
    return '24px'
  }

  const getVerticalPadding = (): string => {
    if (props.size === 'action') return '8px'
    if (props.icon) return '10px'
    return '12px'
  }

  const getBorderRadius = (): string => {
    if (props.size === 'action' || props.icon) return '12px'
    return '16px'
  }

  return {
    background: getBackgroundColor(),
    paddingVertical: getVerticalPadding(),
    paddingHorizontal: getHorizontalPadding(),
    borderRadius: getBorderRadius(),
    border: props.variant === 'outlined' ? props.theme.colors.primary.default : 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: props.width === 'fixed' ? '256px' : 'auto',
    flex: props.width === 'full' ? 1 : null,
  }
})

interface LabelProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'text'
  size?: 'action' | 'default'
}

export const Label = styled.Text<LabelProps>((props) => {
  const getContentColor = (): string => {
    if (props.variant === 'primary') return props.theme.colors.text.inverse
    return props.theme.colors.primary.default
  }

  return {
    fontFamily: props.theme.fonts.primary.bold,
    fontSize: props.size === 'action' ? '12px' : '16px',
    lineHeight: props.size === 'action' ? '18px' : '20px',
    color: getContentColor(),
    textAlign: 'center',
  }
})
interface ContentProps {
  loading: boolean
}

export const Content = styled.View<ContentProps>((props) => {
  return {
    opacity: props.loading ? 0 : 1,
  }
})
interface LoadingContentProps {
  loading: boolean
}

export const LoadingContent = styled.View<LoadingContentProps>((props) => {
  return {
    opacity: props.loading ? 1 : 0,
    position: 'absolute',
  }
})
