import { useState } from 'react'
import { View } from 'react-native'

import useStyles from './styles'
import Button from '@components/Button'
import TextField from '@components/FormFields/TextField'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { useAuth } from '@features/auth'
import type { NameProps } from '@types'

const Name = ({ navigation, route }: NameProps): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const auth = useAuth()
  const styles = useStyles()

  const { email, password } = route.params

  const nameValid =
    name.split(' ').length >= 2 && name.split(' ')[0].length > 0 && name.split(' ')[1].length > 0

  const nicknameValid = nickname.split(' ').length === 1 && nickname.split(' ')[0].length > 0

  const handleNext = (): void => {
    auth.signUp(email, password, name, nickname)
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
          <Global.Title>How would you like to be called?</Global.Title>
          <Global.Description> The nickname will be shown to all your friends</Global.Description>
        </View>

        <View style={styles.content}>
          <TextField
            label="Name"
            placeholder="Greta Gerwig"
            value={name}
            onChangeText={setName}
            valid={nameValid}
            errorText={'Please provide name and last name'}
          />
          <TextField
            placeholder="LadyBird"
            label="Nickname"
            value={nickname}
            onChangeText={setNickname}
            valid={nicknameValid}
            errorText={'Please provide a single nickname'}
          />
        </View>
      </Global.Body>

      <Global.Footer>
        <Button
          width="fixed"
          label="Next"
          onPress={handleNext}
          disabled={!nameValid || !nicknameValid}
        />
      </Global.Footer>
    </Global.Screen>
  )
}

export default Name
