import React from 'react'
import { Animated, type PressableProps } from 'react-native'

import * as Styled from './styles'
import Loading from '@components/Loading'
import { useTheme } from '@features/theme'

export interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'action'
  loading?: boolean
  label?: string
  width?: 'fit' | 'fixed' | 'full'
  icon?: JSX.Element
}
const defaultValue: ButtonProps = {
  width: 'fit',
  variant: 'primary',
  loading: false,
}

const Button = (props: ButtonProps): JSX.Element => {
  const { label, width, variant, disabled, loading, icon, ...rest } = {
    ...defaultValue,
    ...props,
  }

  const theme = useTheme()

  const scaleAnimation = React.useRef(new Animated.Value(0)).current
  const opacityAnimation = React.useRef(new Animated.Value(0)).current
  const scale = scaleAnimation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.95] })
  const opacity = opacityAnimation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.4] })

  const onPressIn = (): void => {
    Animated.spring(scaleAnimation, {
      toValue: 1,
      speed: 200,
      useNativeDriver: true,
    }).start()
    Animated.spring(opacityAnimation, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = (): void => {
    Animated.spring(scaleAnimation, {
      toValue: 0,
      speed: 200,
      useNativeDriver: true,
    }).start()
    Animated.spring(opacityAnimation, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  React.useEffect(() => {
    if (disabled) {
      Animated.spring(opacityAnimation, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.spring(opacityAnimation, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }
  }, [disabled, opacityAnimation])

  const renderIcon =
    icon &&
    React.cloneElement(icon, {
      color: props.variant === 'primary' ? theme.colors.text.inverse : theme.colors.primary.default,
      width: 20,
      height: 20,
      variant,
    })

  const renderLabel = (
    <Styled.Label
      numberOfLines={1}
      variant={variant}
      disabled={disabled}
    >
      {label}
    </Styled.Label>
  )

  const renderLoading = (
    <Loading
      disabled={disabled}
      animation={'circle'}
      size={24}
      type={variant === 'primary' ? 'secondary' : 'primary'}
    />
  )

  const renderContent = icon && !label ? renderIcon : renderLabel

  return (
    <Styled.Animation
      width={width}
      style={{ transform: [{ scale }], opacity }}
    >
      <Styled.Pressable
        icon={!!icon}
        variant={variant}
        disabled={disabled}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        {...rest}
      >
        <Styled.LoadingContent loading={loading}>{renderLoading}</Styled.LoadingContent>
        <Styled.Content loading={loading}>{renderContent}</Styled.Content>
      </Styled.Pressable>
    </Styled.Animation>
  )
}

export default Button
