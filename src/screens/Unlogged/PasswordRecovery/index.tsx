import { useState } from 'react'

import * as Styled from './styles'
import Button from '@components/Button'
import EmailField, { emailValidation } from '@components/FormFields/EmailField'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { useAuth } from '@features/auth'
import { type PasswordRecoveryProps } from '@types'
import routes from '@utils/routes'

const PasswordRecovery = ({ navigation, route }: PasswordRecoveryProps): JSX.Element => {
  const { email } = route.params
  const [recoveryEmail, setRecoveryEmail] = useState<string>(email ?? '')

  const auth = useAuth()

  const handleSendEmail = (): void => {
    auth.recoverPassword(recoveryEmail)
    navigation.navigate(routes.unlogged.signIn)
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Button
          onPress={navigation.goBack}
          icon={<Icon.ArrowLeft />}
          variant="action"
        />
        <Header.TextContainer>
          <Header.Title>Password Recovery</Header.Title>
        </Header.TextContainer>
      </Header.Root>

      <Global.Body>
        <Styled.Header>
          <Global.Title>{"Don't worry, it happens!"}</Global.Title>
          <Global.Description>
            Confirm the email you signed in so we can send a recovery link{' '}
          </Global.Description>
        </Styled.Header>

        <Styled.Content>
          <EmailField
            placeholder="spikelee@oscar.com"
            value={recoveryEmail}
            onChangeText={setRecoveryEmail}
          />
        </Styled.Content>
      </Global.Body>

      <Global.Footer>
        <Button
          width="fixed"
          label="Send email"
          onPress={handleSendEmail}
          disabled={!emailValidation(recoveryEmail)}
        />
      </Global.Footer>
    </Global.Screen>
  )
}

export default PasswordRecovery
