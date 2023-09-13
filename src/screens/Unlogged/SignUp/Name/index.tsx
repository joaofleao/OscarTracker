import { useState } from 'react'

import { Button, Global, Header, Icon, Input } from '../../../../components'
import { type NameProps } from '../../../../types'
import * as Styled from './styles'
import useAuth from '@features/auth/useAuth'

const Name = ({ navigation, route }: NameProps): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [nickName, setNickName] = useState<string>('')
  const auth = useAuth()

  const { email, password } = route.params

  const nameValid =
    name.split(' ').length >= 2 && name.split(' ')[0].length > 0 && name.split(' ')[1].length > 0

  const handleNext = (): void => {
    auth.signUp(email, password, name, nickName)
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
        <Global.Title> How would you like to be called?</Global.Title>
        <Global.Description> The nickname will be shown to all your friends</Global.Description>
      </Styled.Header>

      <Styled.Content>
        <Input
          autoComplete="name"
          label="Name"
          value={name}
          validation={nameValid}
          errorText={'Please provide name and last name'}
          onChangeText={setName}
        />
        <Input
          autoComplete="username"
          label="Nickname"
          value={nickName}
          onChangeText={setNickName}
        />
      </Styled.Content>

      <Styled.Footer>
        <Button
          width="fixed"
          label="Next"
          onPress={handleNext}
        />
      </Styled.Footer>
    </Global.Screen>
  )
}

export default Name
