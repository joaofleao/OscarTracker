import React from 'react'
import { Animated, type PressableProps } from 'react-native'

import { Loading } from '../index'
import * as Styled from './styles'

export interface ButtonProps extends PressableProps {
  label?: string
  width?: 'fit' | 'fixed' | 'full'
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'action'
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconPositon?: 'trailing' | 'leading'
}

const defaultValue = {
  width: 'fixed',
  variant: 'primary',
  disabled: false,
  loading: false,
  iconPositon: 'leading',
}

const Button = (props: ButtonProps): JSX.Element => {
  const { label, width, variant, disabled, loading, icon, iconPositon, ...rest } = {
    ...defaultValue,
    ...props,
  }

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled])

  return (
    <Animated.View style={{ transform: [{ scale }], opacity }}>
      <Styled.Pressable
        width={width}
        iconPositon={iconPositon}
        icon={icon}
        variant={variant}
        disabled={disabled}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        {...rest}
      >
        {loading ? (
          <Loading
            disabled={disabled}
            animation={'circle'}
            size={24}
            type={variant === 'primary' ? 'secondary' : 'primary'}
          />
        ) : (
          <>
            {icon != null && iconPositon === 'leading' && (
              <Styled.Icon
                label={label}
                name={icon}
                iconPositon={iconPositon}
                size={18}
                variant={variant}
                disabled={disabled}
              />
            )}
            {label != null && (
              <Styled.Label
                numberOfLines={1}
                variant={variant}
                disabled={disabled}
              >
                {label}
              </Styled.Label>
            )}
            {icon != null && iconPositon === 'trailing' && (
              <Styled.Icon
                label={label}
                name={icon}
                iconPositon={iconPositon}
                width={24}
                height={24}
                variant={variant}
                disabled={disabled}
              />
            )}
          </>
        )}
      </Styled.Pressable>
    </Animated.View>
  )
}

export default Button
