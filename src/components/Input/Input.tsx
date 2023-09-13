import { useEffect, useRef, useState } from 'react'
import { Animated, Easing, Pressable, type TextInputProps, View } from 'react-native'

import * as Styled from './styles'
import { Button, Icon } from '@components'
import { useTheme } from '@features'

export interface InputProps extends TextInputProps {
  label?: string
  errorText?: string
  type?: 'password' | 'email' | 'text' | 'search'
  validation?: boolean
  value?: string
}

const Input = (props: InputProps): JSX.Element => {
  const { label, errorText, type, value, validation, ...rest } = props

  const theme = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(type === 'password')
  const [showError, setShowError] = useState<boolean>(false)

  const inputRef = useRef(null)
  const focusAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start()
  }, [focusAnim, isFocused, value])

  useEffect(() => {
    const userTyping = setTimeout(() => {
      if (validation !== undefined && !validation && value != null && value !== '') {
        setShowError(true)
      } else setShowError(false)
    }, 1000)
    return () => {
      clearTimeout(userTyping)
    }
  }, [value, validation])

  const transform = [
    {
      scale: focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.7],
      }),
    },
    {
      translateY: focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -16],
      }),
    },
    {
      translateX: focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, label != null ? -(label.length * 2) : 0],
      }),
    },
  ]

  const getHelperText = (): JSX.Element | null => {
    if (showError && errorText != null)
      return (
        <Styled.ErrorContainer>
          <Icon.AlertCircle
            color={theme.palette.negative.default}
            height={14}
            width={14}
          />
          <Styled.ErrorMessage>{errorText}</Styled.ErrorMessage>
        </Styled.ErrorContainer>
      )
  }

  const onBlur = (): void => {
    setIsFocused(false)
  }

  const onFocus = (): void => {
    setIsFocused(true)
  }

  const togglePasswordVisible = (): void => {
    setIsPasswordVisible((isVisible) => {
      return !isVisible
    })
  }
  const focusRef = (): void => {
    inputRef.current?.focus()
  }

  return (
    <View>
      <Pressable onPress={focusRef}>
        <Styled.Content>
          {type !== 'search' && (
            <Styled.LabelContainer style={{ transform }}>
              <Styled.Label isFocused={isFocused}>{label}</Styled.Label>
            </Styled.LabelContainer>
          )}

          {type === 'search' && (
            <Icon.Search
              width={18}
              height={18}
              color={theme.palette.primary.default}
            />
          )}

          <Styled.Input
            isSearch={type === 'search'}
            secureTextEntry={isPasswordVisible}
            placeholderTextColor={type === 'search' ? theme.palette.text.light : 'transparent'}
            placeholder={'Search'}
            autoCapitalize="none"
            ref={inputRef}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            {...rest}
          />

          {type === 'password' && (
            <Button
              variant="action"
              icon={isPasswordVisible ? <Icon.Eye /> : <Icon.EyeOff />}
              onPress={togglePasswordVisible}
            />
          )}
        </Styled.Content>
      </Pressable>
      {getHelperText()}
    </View>
  )
}

export default Input
