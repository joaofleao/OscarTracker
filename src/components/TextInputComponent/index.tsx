import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, Text, TextInput, type TextInputProps, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import colors from 'tailwindcss/colors'

import { IconComponent } from '../../components'

interface InputProps extends TextInputProps {
  label?: string
  errorText?: string | null
  type?: 'password' | 'email' | 'text'
  validation?: boolean
  className?: string
  onBlur?: (event: any) => void
  onFocus?: (event: any) => void
  value?: string
}

const TextInputComponent = ({ label, errorText, type, value, className, onBlur, onFocus, validation, ...props }: InputProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(type === 'password')
  const [showError, setShowError] = useState<boolean>(false)

  const inputRef = useRef<TextInput>(null)
  const focusAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || value != null ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start()
  }, [focusAnim, isFocused, value])

  useEffect(() => {
    const userTyping = setTimeout(() => {
      if (validation !== undefined && !validation && value != null && value.length > 0) {
        setShowError(true)
      } else setShowError(false)
    }, 1000)
    return () => {
      clearTimeout(userTyping)
    }
  }, [value])

  const color = isFocused ? colors.amber[500] : colors.stone[400]

  const getHelperText = (): JSX.Element => {
    if (showError && errorText != null)
      return (
        <View className="flex-row mt-2 ml-2">
          <IconComponent
            name="alert-circle"
            className="text-red-500 mt-1"
            size={14}
          />
          <Text className="font-primaryRegular ml-1 text-sm text-red-500">{errorText}</Text>
        </View>
      )
    return <></>
  }

  return (
    <View className={`mt-5 ${className != null ? className : ''} `}>
      <View className="flex-row justify-center items-center bg-zinc-500/10 rounded-2xl">
        <TextInput
          placeholderTextColor={colors.stone[600]}
          secureTextEntry={isPasswordVisible}
          autoCapitalize="none"
          className="px-4 text-white font-primaryRegular text-base h-12 pb-2 flex-1"
          ref={inputRef}
          {...props}
          value={value}
          onBlur={(event) => {
            setIsFocused(false)
            onBlur?.(event)
          }}
          onFocus={(event) => {
            setIsFocused(true)
            onFocus?.(event)
          }}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={() => {
              setIsPasswordVisible((value) => !value)
            }}
          >
            <IconComponent
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color={colors.amber[500]}
              className="mx-3 leading-6"
            />
          </TouchableOpacity>
        )}
      </View>

      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          className="absolute flex-1 w-full"
          style={{
            transform: [
              {
                scale: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                }),
              },
              {
                translateY: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [12, -32],
                }),
              },
              {
                translateX: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, -32],
                }),
              },
            ],
          }}
        >
          <Text
            className="font-primaryRegular text-base text-white"
            style={{ color }}
          >
            {label}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {getHelperText()}
    </View>
  )
}

export default TextInputComponent
