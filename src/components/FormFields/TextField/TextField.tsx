import { cloneElement, useEffect, useRef, useState } from 'react'
import {
  Animated,
  Easing,
  Pressable,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native'

import useStyles from './styles'
import { useTheme } from '@features/theme'

export interface TextFieldProps extends TextInputProps {
  label?: string
  placeholder?: string
  value?: string
  icon?: JSX.Element
  iconPosition?: 'leading' | 'trailing'
  actionButton?: JSX.Element
  errorText?: string
  valid?: boolean
}

const defaultProps: TextFieldProps = {
  iconPosition: 'leading',
  valid: false,
}

const TextField = (props: TextFieldProps): JSX.Element => {
  const { label, value, placeholder, icon, iconPosition, actionButton, errorText, valid, ...rest } =
    {
      ...defaultProps,
      ...props,
    }
  const theme = useTheme()
  const inputRef = useRef<TextInput>(null)
  const translateY = useRef(new Animated.Value(30)).current

  const [focused, setFocused] = useState(false)
  const styles = useStyles({ isFocused: focused })

  useEffect(() => {
    const userTyping = setTimeout(() => {
      if (!valid && value !== '') {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 150,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start()
      } else {
        Animated.timing(translateY, {
          toValue: 30,
          duration: 150,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start()
      }
    }, 1000)
    return () => {
      clearTimeout(userTyping)
    }
  }, [value, valid, translateY])

  const focusRef = (): void => {
    inputRef.current?.focus()
  }

  const renderLabel = label && <Text style={styles.label}>{label}</Text>

  const renderIcon =
    icon &&
    cloneElement(icon, {
      color: theme.colors.primary.default,
      width: 16,
      height: 16,
    })

  const renderErrorText = errorText && (
    <Animated.View style={[styles.helperContainer, { transform: [{ translateY }] }]}>
      <Text style={styles.errorText}>{errorText}</Text>
    </Animated.View>
  )

  return (
    <View style={styles.container}>
      {renderErrorText}
      {renderLabel}
      <View style={styles.row}>
        <Pressable
          style={styles.content}
          onPress={focusRef}
        >
          {iconPosition === 'leading' && renderIcon}
          <TextInput
            style={styles.input}
            ref={inputRef}
            cursorColor={theme.colors.primary.default}
            selectionColor={theme.colors.primary.default}
            placeholderTextColor={theme.colors.text.light}
            placeholder={placeholder}
            autoCapitalize="none"
            pointerEvents="none"
            value={value}
            onFocus={(): void => {
              return setFocused(true)
            }}
            onBlur={(): void => {
              return setFocused(false)
            }}
            {...rest}
          />
          {iconPosition === 'trailing' && renderIcon}
        </Pressable>
        {actionButton}
      </View>
    </View>
  )
}

export default TextField
