import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Button, HeaderComponent, ModelComponent, TextInputComponent } from '../../../components'
import { type SignUpPasswordScreenProps } from '../../../types'
import { routes } from '../../../utils'

const SignUpPasswordScreen = ({ navigation, route }: SignUpPasswordScreenProps): JSX.Element => {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const isValid = password === confirmPassword && password.length > 0

  const oneUpperCase = /(?=.*[A-Z])/.test(password)
  const specialCase = /(?=.*[!@#$&*.])/.test(password)
  const oneDigits = /(?=.*[0-9])/.test(password)
  const lowerCase = /(?=.*[a-z])/.test(password)

  const getError = (): string => {
    let message = ''
    if (!oneUpperCase) message = message + 'one uppercase, '
    if (!specialCase) message = message + 'one special char, '
    if (!oneDigits) message = message + 'one digit, '
    if (!lowerCase) message = message + 'one lowercase, '
    if (!isValid) message = message + 'must be equal, '
    return message
  }

  const handleNext = (): void => {
    navigation.navigate(routes.unlogged.signUpName, {
      ...route.params,
      password,
    })
  }

  return (
    <ModelComponent>
      <HeaderComponent
        leadingAction={navigation.goBack}
        leadingButton="arrow-left"
        title="Register"
        align="left"
      />
      <View className="flex-1 mx-4">
        <View className="flex-1 justify-center">
          <Text className="text-white font-primaryRegular text-2xl mb-4">How about some security?</Text>
          <Text className="text-white font-primaryRegular text-base">Make sure to use a strong password.</Text>
        </View>

        <View className="flex-1 justify-top">
          <TextInputComponent
            label="Password"
            value={password}
            type={'password'}
            className="mb-5"
            onChange={(e) => {
              setPassword(e.nativeEvent.text)
            }}
          />
          <TextInputComponent
            label="Confirm Password"
            value={confirmPassword}
            type={'password'}
            validation={isValid && oneUpperCase && specialCase && oneDigits && lowerCase}
            errorText={getError()}
            onChange={(e) => {
              setConfirmPassword(e.nativeEvent.text)
            }}
          />
        </View>

        <View className="flex-1 items-center justify-end">
          <Button
            disabled={!(isValid && oneUpperCase && specialCase && oneDigits && lowerCase)}
            label="Next"
            className="w-60"
            onPress={handleNext}
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpPasswordScreen
