import { useState } from 'react'

import * as Styled from './styles'
import Button from '@components/Button'
import EmailField from '@components/FormFields/EmailField'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { type EmailProps } from '@types'
import routes from '@utils/routes'

const Email = ({ navigation }: EmailProps): JSX.Element => {
  const [email, setEmail] = useState<string>('')

  const formattedEmail = email.replace(/[^a-zA-Z0-9@.]/g, '')

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
        <EmailField
          value={email}
          onChangeText={setEmail}
        />
      </Styled.Content>
      <Styled.Footer>
        <Button
          width="fixed"
          label="Next"
          // disabled={!emailValid}
          onPress={handleNext}
        />
      </Styled.Footer>
    </Global.Screen>
  )
}

export default Email
