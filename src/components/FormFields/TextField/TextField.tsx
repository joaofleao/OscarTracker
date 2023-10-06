import { cloneElement, useEffect, useRef, useState } from 'react'
import { Animated, Easing, TextInput, type TextInputProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/Icon'
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

  const renderLabel = label && <Styled.Label isFocused={focused}>{label}</Styled.Label>

  const renderIcon =
    icon &&
    cloneElement(icon, {
      color: theme.colors.primary.default,
      width: 16,
      height: 16,
    })

  const renderErrorText = errorText && (
    <Styled.HelperContainer style={{ transform: [{ translateY }] }}>
      <Styled.ErrorText>{errorText}</Styled.ErrorText>
    </Styled.HelperContainer>
  )

  return (
    <Styled.Container>
      {renderErrorText}
      {renderLabel}
      <Styled.Row>
        <Styled.Content onPress={focusRef}>
          {iconPosition === 'leading' && renderIcon}
          <Styled.Input
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
        </Styled.Content>
        {actionButton}
      </Styled.Row>
    </Styled.Container>
  )
}

export default TextField
