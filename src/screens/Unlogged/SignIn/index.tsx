import { useState } from 'react'
import { Keyboard } from 'react-native'

import * as Styled from './styles'
import Button from '@components/Button'
import Global from '@components/Global'
import Input from '@components/Input'
import Logo from '@components/Logo'
import { useAuth } from '@features/auth'
import type { SignInProps } from '@types'
import routes from '@utils/routes'

const SignIn = ({ navigation }: SignInProps): JSX.Element => {
  const auth = useAuth()

  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false)

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

  Keyboard.addListener('keyboardDidShow', () => {
    setIsKeyboardOpen(true)
  })

  Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardOpen(false)
  })

  return (
    <Global.Screen>
      <Styled.Header>
        <Logo />
      </Styled.Header>
      <Styled.Content>
        <Input
          autoComplete="email"
          label="Email"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          autoComplete="password"
          label="Password"
          type="password"
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

      {!isKeyboardOpen && (
        <Styled.Footer>
          <Styled.ForgotButton onPress={forgotPassword}>
            <Styled.ForgotLabel>Forgot password?</Styled.ForgotLabel>
          </Styled.ForgotButton>

          <Button
            label="New here?"
            variant="secondary"
            onPress={signUp}
          />
        </Styled.Footer>
      )}
    </Global.Screen>
  )
}

export default SignIn
