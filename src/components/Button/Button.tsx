import React from 'react'
import { Animated, type PressableProps } from 'react-native'

import { useTheme } from '../../features'
import { Loading } from '../index'
import * as Styled from './styles'

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
      color:
        props.variant === 'primary' ? theme.palette.text.inverse : theme.palette.primary.default,
      size: 18,
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

  const renderContent = (): JSX.Element => {
    if (loading) return renderLoading
    else if (icon != null && label == null) return renderIcon
    else if (icon == null && label != null) return renderLabel
  }

  return (
    <Animated.View style={{ transform: [{ scale }], opacity }}>
      <Styled.Pressable
        width={width}
        icon={icon}
        variant={variant}
        disabled={disabled}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        {...rest}
      >
        {renderContent()}
      </Styled.Pressable>
    </Animated.View>
  )
}

export default Button
