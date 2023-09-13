import { useState } from 'react'

import { type PasswordProps } from '../../../../types'
import { routes } from '../../../../utils'
import * as Styled from './styles'
import { Button, Global, Header, Icon, Input } from '@components'

const Password = ({ navigation, route }: PasswordProps): JSX.Element => {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const isValid = password === confirmPassword && password.length > 0

  const oneUpperCase = /(?=.*[A-Z])/.test(password)
  const specialCase = /(?=.*[!@#$&*.])/.test(password)
  const oneDigits = /(?=.*[0-9])/.test(password)
  const lowerCase = /(?=.*[a-z])/.test(password)

  const getError = (): string => {
    let message = 'You need'
    if (!isValid) message = message + ', to match the passwords'
    if (!oneDigits) message = message + ', one digit'
    if (!oneUpperCase) message = message + ', one uppercase'
    if (!lowerCase) message = message + ', one lowercase'
    if (!specialCase) message = message + ', one special character'
    return message
  }

  const handleNext = (): void => {
    navigation.navigate(routes.unlogged.signUpName, {
      ...route.params,
      password,
    })
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Button
          onPress={navigation.goBack}
          icon={<Icon.ArrowLeft />}
          variant="secondary"
        />
        <Header.TextContainer>
          <Header.Title>Register</Header.Title>
        </Header.TextContainer>
      </Header.Root>

      <Styled.Header>
        <Global.Title> How about some security?</Global.Title>
        <Global.Description> Make sure to use a strong password.</Global.Description>
      </Styled.Header>

      <Styled.Content>
        <Input
          autoComplete="password"
          label="Password"
          value={password}
          type={'password'}
          onChangeText={setPassword}
        />
        <Input
          autoComplete="password"
          label="Confirm Password"
          value={confirmPassword}
          type={'password'}
          validation={isValid && oneUpperCase && specialCase && oneDigits && lowerCase}
          errorText={getError()}
          onChangeText={setConfirmPassword}
        />
      </Styled.Content>

      <Styled.Footer>
        <Button
          width="fixed"
          disabled={!(isValid && oneUpperCase && specialCase && oneDigits && lowerCase)}
          label="Next"
          onPress={handleNext}
        />
      </Styled.Footer>
    </Global.Screen>
  )
}

export default Password
