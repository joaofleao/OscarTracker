import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Button, Header, Model, TextInputComponent } from '../../../components'
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
    <Model>
      <Header
        leadingAction={navigation.goBack}
        leadingButton="arrow-left"
        title="Register"
        align="left"
      />

      <View className="flex-1 mx-4">
        <View className="flex-1 justify-center">
          <Text className="text-white font-primaryRegular text-2xl mb-4">Give us your best e-mail</Text>
          <Text className="text-white font-primaryRegular text-base">We will send you a verification code to confirm</Text>
        </View>

        <View className="flex-1 justify-top">
          <TextInputComponent
            label="Email"
            value={email}
            validation={emailValid}
            errorText={'You must provide a valid email'}
            onChangeText={(text) => {
              setEmail(text.trim())
            }}
          />
        </View>

        <View className="flex-1 items-center justify-end">
          <Button
            label="Next"
            disabled={!emailValid}
            className="w-60"
            onPress={handleNext}
          />
        </View>
      </View>
    </Model>
  )
}

export default SignUpEmailScreen
