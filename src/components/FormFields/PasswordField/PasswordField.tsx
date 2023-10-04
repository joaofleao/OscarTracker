import { useState } from 'react'
import { type TextInputProps } from 'react-native'

import Button from '@components/Button'
import TextField from '@components/FormFields/TextField'
import Icon from '@components/Icon'

export interface PasswordFieldProps extends TextInputProps {
  label?: string
}

const defaultProps: PasswordFieldProps = {
  label: 'Password',
}

const PasswordField = (props: PasswordFieldProps): JSX.Element => {
  const { label, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const [passwordVisible, setPasswordVisible] = useState(true)

  const handlePress = (): void => {
    setPasswordVisible((prev) => {
      return !prev
    })
  }

  return (
    <TextField
      autoComplete="password"
      label={label}
      secureTextEntry={passwordVisible}
      actionButton={
        <Button
          variant="secondary"
          icon={passwordVisible ? <Icon.Eye /> : <Icon.EyeOff />}
          onPress={handlePress}
        />
      }
      {...rest}
    />
  )
}

export default PasswordField
