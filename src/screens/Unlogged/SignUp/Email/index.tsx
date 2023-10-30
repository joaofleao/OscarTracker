import { useState } from 'react'

import * as Styled from './styles'
import Button from '@components/Button'
import EmailField, { emailValidation } from '@components/FormFields/EmailField'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import type { EmailProps } from '@types'
import routes from '@utils/routes'

const Email = ({ navigation }: EmailProps): JSX.Element => {
  const [email, setEmail] = useState<string>('')

  const handleNext = (): void => {
    navigation.navigate(routes.unlogged.signUpPassword, { email })
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
        <Styled.Header>
          <Global.Title>Give us your best e-mail</Global.Title>
          <Global.Description>We will send you a verification code to confirm</Global.Description>
        </Styled.Header>
        <Styled.Content>
          <EmailField
            placeholder="steven_spielberg@oscar.com"
            value={email}
            onChangeText={setEmail}
          />
        </Styled.Content>
      </Global.Body>

      <Global.Footer>
        <Button
          width="fixed"
          label="Next"
          disabled={!emailValidation(email)}
          onPress={handleNext}
        />
      </Global.Footer>
    </Global.Screen>
  )
}

export default Email
