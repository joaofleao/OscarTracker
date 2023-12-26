import React from 'react'
import { Animated } from 'react-native'

interface usePressableAnimationProps {
  disabled?: boolean
}

const defaultValues: usePressableAnimationProps = {
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
  const { disabled } = { ...defaultValues, ...props }
  const scaleAnimation = React.useRef(new Animated.Value(0)).current
  const opacityAnimation = React.useRef(new Animated.Value(0)).current

  const scale = scaleAnimation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.95] })

  const opacity = opacityAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  })

  const animationPressIn = (): void => {
    if (!disabled)
      Animated.spring(scaleAnimation, {
        toValue: 1,
        speed: 200,
        useNativeDriver: true,
      }).start()
  }

  const animationPressOut = (): void => {
    if (!disabled)
      Animated.spring(scaleAnimation, {
        toValue: 0,
        speed: 200,
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

  return {
    scale,
    opacity,
    animationPressIn,
    animationPressOut,
  }
}

export default usePressableAnimation
