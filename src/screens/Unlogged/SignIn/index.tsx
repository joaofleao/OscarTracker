import { useState } from 'react'

import * as Styled from './styles'
import Button from '@components/Button'
import PasswordField from '@components/FormFields/PasswordField'
import TextField from '@components/FormFields/TextField'
import Global from '@components/Global'
import Logo from '@components/Logo'
import { useAuth } from '@features/auth'
import type { SignInProps } from '@types'
import routes from '@utils/routes'

const SignIn = ({ navigation }: SignInProps): JSX.Element => {
  const auth = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const formattedEmail = email.replace(/[^a-zA-Z0-9@.]/g, '')

  const signIn = (): void => {
    auth.signIn(formattedEmail, password)
  }

  const signUp = (): void => {
    navigation.navigate(routes.unlogged.signUpEmail)
  }

  const forgotPassword = (): void => {
    navigation.navigate(routes.unlogged.forgotPassword, { email })
  }

  return (
    <Global.Screen>
      <Global.Body>
        <Styled.Header>
          <Logo />
        </Styled.Header>
        <Styled.Content>
          <TextField
            placeholder="oscar@email.com"
            autoComplete="email"
            label="Email"
            value={email}
            onChangeText={setEmail}
          />

          <PasswordField
            placeholder="● ● ● ● ● ● ● ●"
            value={password}
            onChangeText={setPassword}
          />

          <Styled.ButtonContainer>
            <Button
              label="Sign In"
              width="fixed"
              disabled={formattedEmail === '' || password === ''}
              onPress={signIn}
            />
          </Styled.ButtonContainer>
        </Styled.Content>
      </Global.Body>

      <Global.Footer>
        <Styled.ForgotButton onPress={forgotPassword}>
          <Styled.ForgotLabel>Forgot password?</Styled.ForgotLabel>
        </Styled.ForgotButton>

        <Button
          label="New here?"
          width="fixed"
          variant="secondary"
          onPress={signUp}
        />
      </Global.Footer>
    </Global.Screen>
  )
}

export default SignIn
