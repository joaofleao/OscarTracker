import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, Pressable, type TextInput, type TextInputProps, View } from 'react-native'

import { Button, IconComponent } from '../../components'
import { useTheme } from '../../features'
import * as Styled from './styles'

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

  const inputRef = useRef<TextInput>(null)
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
  }, [value])

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
        outputRange: [0, -22],
      }),
    },
    {
      translateX: focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -(label != null && label.length * 2.5) | 0],
      }),
    },
  ]

  const getHelperText = (): JSX.Element => {
    if (showError && errorText != null)
      return (
        <Styled.ErrorContainer>
          <IconComponent
            name="alert-circle"
            color={theme.palette.negative.default}
            size={14}
          />
          <Styled.ErrorMessage>{errorText}</Styled.ErrorMessage>
        </Styled.ErrorContainer>
      )
    return <></>
  }

  return (
    <Styled.Container>
      <Pressable onPress={() => inputRef.current?.focus()}>
        <Styled.Content>
          {type !== 'search' && (
            <Styled.LabelContainer style={{ transform }}>
              <Styled.Label isFocused={isFocused}>{label}</Styled.Label>
            </Styled.LabelContainer>
          )}

          {type === 'search' && (
            <IconComponent
              name="search"
              size={24}
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
            onBlur={() => {
              setIsFocused(false)
            }}
            onFocus={() => {
              setIsFocused(true)
            }}
            {...rest}
          />
          {type !== 'search' && (
            <View style={{ height: 50 }}>
              {type === 'password' && (
                <Button
                  variant="action"
                  icon={isPasswordVisible ? 'eye' : 'eye-off'}
                  onPress={() => {
                    setIsPasswordVisible((value) => !value)
                  }}
                  width="fit"
                />
              )}
            </View>
          )}
        </Styled.Content>
      </Pressable>
      {getHelperText()}
    </Styled.Container>
  )
}

export default Input
