import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Button, Header, ModelComponent, TextInputComponent } from '../../../components'
import { useAuth } from '../../../features'
import { type ForgotPasswordScreenProps } from '../../../types'
import { routes } from '../../../utils'

const ForgotPasswordScreen = ({ navigation, route }: ForgotPasswordScreenProps): JSX.Element => {
  const { email } = route.params
  const [recoveryEmail, setRecoveryEmail] = useState<string>(email ?? '')

  const auth = useAuth()

  const handleSendEmail = (): void => {
    auth.recoverPassword(recoveryEmail)
    navigation.navigate(routes.unlogged.signIn)
  }

  return (
    <ModelComponent>
      <Header
        leadingAction={navigation.goBack}
        leadingButton="arrow-left"
        title="Forgot Password"
        align="left"
      />
      <View className="flex-1 mx-4">
        <View className="flex-1 justify-center">
          <Text className="text-white font-primaryRegular text-2xl mb-4">Don't worry, it happens!</Text>
          <Text className="text-white font-primaryRegular text-base">Confirm the email you signed in so we can send a recovery link </Text>
        </View>

        <View className="flex-1 justify-center">
          <TextInputComponent
            label="Email"
            value={recoveryEmail}
            errorText={''}
            className="my-4"
            onChange={(e) => {
              setRecoveryEmail(e.nativeEvent.text)
            }}
          />
        </View>

        <View className="flex-1 items-center justify-end my-4">
          <Button
            label="Send email"
            className="w-60"
            onPress={handleSendEmail}
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default ForgotPasswordScreen
