import { useState } from 'react'

import { Button, Global, Header, Icon, Input } from '../../../../components'
import { type EmailProps } from '../../../../types'
import { routes } from '../../../../utils'
import * as Styled from './styles'

const Email = ({ navigation }: EmailProps): JSX.Element => {
  const [email, setEmail] = useState<string>('')

  const formattedEmail = email.replace(/[^a-zA-Z0-9@.]/g, '')

  const emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)

  const handleNext = (): void => {
    navigation.navigate(routes.unlogged.signUpPassword, {
      email: formattedEmail,
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
        <Global.Title>Give us your best e-mail</Global.Title>
        <Global.Description>We will send you a verification code to confirm</Global.Description>
      </Styled.Header>

      <Styled.Content>
        <Input
          autoComplete="email"
          label="Email"
          value={email}
          validation={emailValid}
          errorText={'You must provide a valid email'}
          onChangeText={setEmail}
        />
      </Styled.Content>

      <Styled.Footer>
        <Button
          width="fixed"
          label="Next"
          disabled={!emailValid}
          onPress={handleNext}
        />
      </Styled.Footer>
    </Global.Screen>
  )
}

export default Email
