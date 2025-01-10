import { useState } from 'react'
import { View } from 'react-native'

import useStyles from './styles'
import Button from '@components/Button'
import PasswordField, { passwordValidation } from '@components/FormFields/PasswordField'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import type { PasswordProps } from '@types'
import routes from '@utils/routes'

const Password = ({ navigation, route }: PasswordProps): JSX.Element => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const styles = useStyles()

  const { passwordValid, confirmPasswordValid } = passwordValidation(password, confirmPassword)

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
          size="action"
          variant="secondary"
        />

        <Header.Title>Register</Header.Title>
      </Header.Root>

      <Global.Body>
        <View style={styles.header}>
          <Global.Title>How about some security?</Global.Title>
          <Global.Description>Make sure to use a strong password.</Global.Description>
        </View>

        <View style={styles.content}>
          <PasswordField
            value={password}
            onChangeText={setPassword}
            type="password"
          />
          <PasswordField
            passwordConfirmation={password}
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            type="confirmPassword"
          />
        </View>
      </Global.Body>

      <Global.Footer>
        <Button
          width="fixed"
          disabled={!passwordValid || !confirmPasswordValid}
          label="Next"
          onPress={handleNext}
        />
      </Global.Footer>
    </Global.Screen>
  )
}

export default Password
