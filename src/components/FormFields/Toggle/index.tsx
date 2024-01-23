import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

import * as Styled from './styles'
import usePressableAnimation from '@hooks/usePressableAnimation'

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

  const translateX = useRef(new Animated.Value(selected ? 24 : 0)).current

  const { animationPressIn, animationPressOut, scale } = usePressableAnimation()

  const handleToggleAnimation = (): void => {
    Animated.timing(translateX, {
      toValue: selected ? 0 : 24,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
    if (!disabled) onToggle?.()
  }

  const renderLabel = label && <Styled.Label numberOfLines={1}>{label}</Styled.Label>

  return (
    <Styled.Container>
      {renderLabel}
      <Styled.Toggle
        style={{ transform: [{ scale }] }}
        onPress={handleToggleAnimation}
        onPressIn={animationPressIn}
        onPressOut={animationPressOut}
      >
        <Styled.Indicator
          selected={selected}
          disabled={disabled}
          style={{ transform: [{ translateX }] }}
        />
      </Styled.Toggle>
    </Styled.Container>
  )
}

export default Toggle
