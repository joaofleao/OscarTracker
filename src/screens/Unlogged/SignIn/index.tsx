import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import useStyles from './styles'
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
  const styles = useStyles()

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
        <View style={styles.header}>
          <Logo />
        </View>
        <View style={styles.content}>
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

          <View style={styles.buttonContainer}>
            <Button
              label="Sign In"
              width="fixed"
              disabled={formattedEmail === '' || password === ''}
              onPress={signIn}
            />
          </View>
        </View>
      </Global.Body>

      <Global.Footer>
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={forgotPassword}
        >
          <Text style={styles.forgotLabel}>Forgot password?</Text>
        </TouchableOpacity>

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
