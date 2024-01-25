import React from 'react'
import { GestureResponderEvent, PressableProps, StyleProp, ViewStyle } from 'react-native'

import * as Styled from './styles'
import { useTheme } from '@features/theme'
import usePressableAnimation from '@hooks/usePressableAnimation'

export type TextToggleProps = PressableProps & {
  selected: boolean
  label: string
  onToggle: (value: boolean) => void
  icon: JSX.Element
  style?: StyleProp<ViewStyle>
}

const defaultValues = {
  selected: false,
}

const TextToggle = (props: TextToggleProps): JSX.Element => {
  const {
    selected,
    label,
    icon,
    onToggle,
    style,
    onPressIn,
    onPressOut,
    onPress,
    disabled,
    ...rest
  } = {
    ...defaultValues,
    ...props,
  }
  const { colors } = useTheme()

  const { animationPressIn, animationPressOut, scale, opacity } = usePressableAnimation({
    disabled,
  })

  const handlePress = (event: GestureResponderEvent): void => {
    onToggle(!selected)
    onPress?.(event)
  }

  const handlePressIn = (event: GestureResponderEvent): void => {
    animationPressIn()
    onPressIn?.(event)
  }

  const handlePressOut = (event: GestureResponderEvent): void => {
    animationPressOut()
    onPressOut?.(event)
  }

  return (
    <Styled.Container
      style={[style, { transform: [{ scale }], opacity }]}
      selected={selected}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      {...rest}
    >
      {React.cloneElement(icon, {
        width: 18,
        height: 18,
        color: selected ? colors.text.inverse : colors.primary.default,
        filled: selected,
      })}

      <Styled.Label
        numberOfLines={1}
        selected={selected}
      >
        {label}
      </Styled.Label>
    </Styled.Container>
  )
}

export default TextToggle
