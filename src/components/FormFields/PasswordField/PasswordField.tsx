import { useState } from 'react'

import * as Styled from './styles'
import Button from '@components/Button'
import TextField, { TextFieldProps } from '@components/FormFields/TextField'
import Icon from '@components/Icon'
import usePasswordRequirements from '@hooks/usePasswordRequirements'

export interface PasswordFieldProps extends TextFieldProps {
  type?: 'password' | 'confirmPassword' | 'plain'
  passwordConfirmation?: string
}

const defaultProps: PasswordFieldProps = {
  label: 'Password',
  type: 'plain',
}

const PasswordField = (props: PasswordFieldProps): JSX.Element => {
  const { passwordConfirmation, label, value, type, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const [passwordVisible, setPasswordVisible] = useState(true)

  const {
    confirmPasswordValid,
    oneDigit,
    oneLowerCase,
    oneSpecialCase,
    oneUpperCase,
    passwordValid,
  } = usePasswordRequirements(value, passwordConfirmation)

  const handlePress = (): void => {
    setPasswordVisible((prev) => {
      return !prev
    })
  }

  const renderIcon = passwordValid ? (
    <Icon.CheckCircle
      width={16}
      height={16}
    />
  ) : (
    <Icon.AlertCircle
      width={16}
      height={16}
    />
  )

  const renderPasswordRule = type === 'password' && (
    <Styled.PasswordRuleContainer>
      {renderIcon}
      <Styled.PasswordRule valid={passwordValid}>
        <Styled.PasswordRule valid={passwordValid}>Your passwords must include</Styled.PasswordRule>
        ,<Styled.PasswordRule valid={oneDigit}> one digit</Styled.PasswordRule>,
        <Styled.PasswordRule valid={oneUpperCase}> one uppercase letter</Styled.PasswordRule>,
        <Styled.PasswordRule valid={oneLowerCase}> one lowercase letter</Styled.PasswordRule>,
        <Styled.PasswordRule valid={oneSpecialCase}> one special character</Styled.PasswordRule>.
      </Styled.PasswordRule>
    </Styled.PasswordRuleContainer>
  )

  const renderPasswordConfirmationRule = type === 'confirmPassword' && (
    <Styled.PasswordRuleContainer>
      {renderIcon}
      <Styled.PasswordRule valid={confirmPasswordValid}>
        Your passwords must match
      </Styled.PasswordRule>
    </Styled.PasswordRuleContainer>
  )

  return (
    <>
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
      {renderPasswordConfirmationRule}
      {renderPasswordRule}
    </>
  )
}

export default PasswordField
