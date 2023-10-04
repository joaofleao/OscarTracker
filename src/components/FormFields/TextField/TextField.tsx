import { cloneElement, useRef } from 'react'
import { type TextInputProps } from 'react-native'

import * as Styled from './styles'
import { useTheme } from '@features/theme'

export interface TextFieldProps extends TextInputProps {
  label?: string
  placeholder?: string
  value?: string
  icon?: JSX.Element
  iconPosition?: 'leading' | 'trailing'
  actionButton?: JSX.Element
}
const defaultProps: TextFieldProps = {
  iconPosition: 'leading',
}

const TextField = (props: TextFieldProps): JSX.Element => {
  const { label, value, placeholder, icon, iconPosition, actionButton, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const theme = useTheme()
  const inputRef = useRef(null)

  const focusRef = (): void => {
    inputRef.current?.focus()
  }

  const renderIcon =
    icon &&
    cloneElement(icon, {
      color: theme.colors.primary.default,
      width: 16,
      height: 16,
    })

  return (
    <Styled.Container>
      {label && <Styled.Label isFocused={true}>{label}</Styled.Label>}
      <Styled.Row>
        <Styled.Content onPress={focusRef}>
          {iconPosition === 'leading' && renderIcon}
          <Styled.Input
            cursorColor={theme.colors.primary.default}
            selectionColor={theme.colors.primary.default}
            placeholderTextColor={theme.colors.text.light}
            placeholder={placeholder}
            autoCapitalize="none"
            value={value}
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
