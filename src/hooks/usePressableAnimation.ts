import React from 'react'
import { Animated } from 'react-native'

interface usePressableAnimationProps {
  scaleTo?: number
  opacityTo?: number
  disabled?: boolean
}

const defaultValues: usePressableAnimationProps = {
  scaleTo: 0.98,
  opacityTo: 0.8,
  disabled: false,
}

const usePressableAnimation = (
  props?: usePressableAnimationProps,
): {
  scale: Animated.AnimatedInterpolation<number>
  opacity: Animated.AnimatedInterpolation<number>
  animationPressIn: () => void
  animationPressOut: () => void
} => {
  const { scaleTo, opacityTo, disabled } = { ...defaultValues, ...props }
  const animation = React.useRef(new Animated.Value(0)).current

  const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, scaleTo] })
  const opacity = animation.interpolate({ inputRange: [0, 1], outputRange: [1, opacityTo] })
  const disabledOpacity = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.5] })

  const animationPressIn = (): void => {
    Animated.spring(animation, {
      toValue: 1,
      speed: 200,
      useNativeDriver: true,
    }).start()
  }

  const animationPressOut = (): void => {
    Animated.spring(animation, {
      toValue: 0,
      speed: 200,
      useNativeDriver: true,
    }).start()
  }

  React.useEffect(() => {
    if (disabled) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    }
  }, [disabled, animation])

  return {
    scale,
    opacity: disabled ? disabledOpacity : opacity,
    animationPressIn,
    animationPressOut,
  }
}

export default usePressableAnimation
