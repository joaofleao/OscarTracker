import { useState } from 'react'
import { Text, View } from 'react-native'

import { Button, Global, Header, Icon, Input } from '../../../components'
import { type SignUpEmailScreenProps } from '../../../types'
import { routes } from '../../../utils'

const SignUpEmailScreen = ({ navigation }: SignUpEmailScreenProps): JSX.Element => {
  const [email, setEmail] = useState<string>('')

  const emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)

  const handleNext = (): void => {
    navigation.navigate(routes.unlogged.signUpPassword, {
      email,
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

      <View
      // className="flex-1 mx-4"
      >
        <View
        // className="flex-1 justify-center"
        >
          <Text
          // className="text-white font-primaryRegular text-2xl mb-4"
          >
            Give us your best e-mail
          </Text>
          <Text
          // className="text-white font-primaryRegular text-base"
          >
            We will send you a verification code to confirm
          </Text>
        </View>

        <View
        // className="flex-1 justify-top"
        >
          <Input
            label="Email"
            value={email}
            validation={emailValid}
            errorText={'You must provide a valid email'}
            onChangeText={(text) => {
              setEmail(text.trim())
            }}
          />
        </View>

        <View
        // className="flex-1 items-center justify-end"
        >
          <Button
            label="Next"
            disabled={!emailValid}
            // className="w-60"
            onPress={handleNext}
          />
        </View>
      </View>
    </Global.Screen>
  )
}

export default SignUpEmailScreen
