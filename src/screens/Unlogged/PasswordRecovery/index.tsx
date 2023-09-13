import { useState } from 'react'

import { Button, Global, Header, Icon, Input } from '../../../components'
import { type PasswordRecoveryProps } from '../../../types'
import { routes } from '../../../utils'
import * as Styled from './styles'
import { useAuth } from '@features'

const PasswordRecovery = ({ navigation, route }: PasswordRecoveryProps): JSX.Element => {
  const { email } = route.params
  const [recoveryEmail, setRecoveryEmail] = useState<string>(email ?? '')

  const auth = useAuth()

  const formattedEmail = recoveryEmail.replace(/[^a-zA-Z0-9@.]/g, '')

  const handleSendEmail = (): void => {
    auth.recoverPassword(formattedEmail)
    navigation.navigate(routes.unlogged.signIn)
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
          <Header.Title>Password Recovery</Header.Title>
        </Header.TextContainer>
      </Header.Root>

      <Styled.Header>
        <Global.Title>{"Don't worry, it happens!"}</Global.Title>
        <Global.Description>
          Confirm the email you signed in so we can send a recovery link{' '}
        </Global.Description>
      </Styled.Header>

      <Styled.Content>
        <Input
          autoComplete="email"
          label="Email"
          value={recoveryEmail}
          onChangeText={setRecoveryEmail}
        />
      </Styled.Content>

      <Styled.Footer>
        <Button
          width="fixed"
          label="Send email"
          onPress={handleSendEmail}
          disabled={formattedEmail === ''}
        />
      </Styled.Footer>
    </Global.Screen>
  )
}

export default PasswordRecovery
