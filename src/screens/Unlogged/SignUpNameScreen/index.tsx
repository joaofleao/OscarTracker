import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Button, Header, Model, TextInputComponent } from '../../../components'
import { useAuth } from '../../../features'
import { type SignUpNameScreenProps } from '../../../types'

const SignUpNameScreen = ({ navigation, route }: SignUpNameScreenProps): JSX.Element => {
  const [name, setName] = useState<string>('')
  const [nickName, setNickName] = useState<string>('')
  const auth = useAuth()
  const { email, password } = route.params

  const nameValid = name.split(' ').length >= 2 && name.split(' ')[0].length > 0 && name.split(' ')[1].length > 0

  const handleNext = (): void => {
    auth.signUp(email, password, name, nickName)
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
          <Text className="text-white font-primaryRegular text-2xl mb-4">How would you like to be called?</Text>
          <Text className="text-white font-primaryRegular text-base">The nickname will be shown to all your friends</Text>
        </View>

        <View className="flex-1 justify-center">
          <TextInputComponent
            label="Name"
            value={name}
            validation={nameValid}
            errorText={'Please provide name and last name'}
            className="my-4"
            onChange={(e) => {
              setName(e.nativeEvent.text)
            }}
          />
          <TextInputComponent
            label="Nickname"
            value={nickName}
            className="my-4"
            onChange={(e) => {
              setNickName(e.nativeEvent.text)
            }}
          />
        </View>

        <View className="flex-1 items-center justify-end my-4">
          <Button
            label="Next"
            className="w-60"
            onPress={handleNext}
          />
        </View>
      </View>
    </Model>
  )
}

export default SignUpNameScreen
