import { useRef } from 'react'
import { Animated, Easing, Pressable, Text, View } from 'react-native'

import useStyles from './styles'
import usePressableAnimation from '@hooks/usePressableAnimation'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export interface ToggleProps {
  label?: string
  selected?: boolean
  onToggle?: () => void
  disabled?: boolean
}

const defaultProps: ToggleProps = {
  selected: false,
  disabled: false,
}

const Toggle = (props: ToggleProps): JSX.Element => {
  const { label, selected, onToggle, disabled } = {
    ...defaultProps,
    ...props,
  }
  const styles = useStyles({ selected, disabled })

  const translateX = useRef(new Animated.Value(selected ? 24 : 0)).current

  const { animationPressIn, animationPressOut, scale } = usePressableAnimation()

  const handleToggleAnimation = (): void => {
    Animated.timing(translateX, {
      toValue: selected ? 0 : 24,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
    onToggle?.()
  }

  const renderLabel = label && (
    <Text
      style={styles.label}
      numberOfLines={1}
    >
      {label}
    </Text>
  )

  return (
    <View style={styles.container}>
      {renderLabel}
      <AnimatedPressable
        disabled={disabled}
        style={[styles.toggle, { transform: [{ scale }] }]}
        onPress={handleToggleAnimation}
        onPressIn={animationPressIn}
        onPressOut={animationPressOut}
      >
        <Animated.View style={[styles.indicator, { transform: [{ translateX }] }]} />
      </AnimatedPressable>
    </View>
  )
}

export default Toggle
