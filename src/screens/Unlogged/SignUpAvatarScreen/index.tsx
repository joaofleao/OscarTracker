import React from 'react'
import { Text, View } from 'react-native'

import { ButtonComponent, HeaderComponent, ModelComponent, TextInputComponent } from '../../../components'
import { type SignUpAvatarScreenProps } from '../../../types'
import { routes } from '../../../utils'

const SignUpAvatarScreen = ({ navigation, route }: SignUpAvatarScreenProps): JSX.Element => {
  const handleNext = (): void => {
    navigation.navigate(routes.unlogged.signUpName)
  }

  return (
    <ModelComponent>
      <View className="flex-1 mx-4 justify-between">
        <HeaderComponent
          leadingAction={() => {
            navigation.goBack()
          }}
          leadingButton="arrow-left"
        >
          Register
        </HeaderComponent>

        <View className="flex-1 justify-center">
          <Text className="text-white font-primaryRegular text-2xl mb-4">Now let’s wrap it up with a cool profile picture</Text>
          <Text className="text-white font-primaryRegular text-base">Feel free to use any image</Text>
        </View>

        <TextInputComponent
          placeholder="Name"
          className="my-4"
        />

        <View className="flex-1" />

        <View className="items-center justify-center my-4 ">
          <ButtonComponent
            name="Next"
            className="w-60"
            onPress={handleNext}
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpAvatarScreen
