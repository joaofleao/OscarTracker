import React, { useState } from "react"
import { Text, View } from "react-native"
import {
  TextInputComponent,
  ButtonComponent,
  ModelComponent,
  HeaderComponent,
} from "../../../components"
import { useAuth } from "../../../hooks"

function SignUpNameScreen({ navigation, route }: any) {
  const [name, setName] = useState<string>("")
  const [nickName, setNickName] = useState<string>("")
  const { signUp } = useAuth()
  const { email, password } = route.params

  const nameValid =
    name.split(" ").length >= 2 &&
    name.split(" ")[0].length > 0 &&
    name.split(" ")[1].length > 0

  const handleNext = () => signUp(email, password, name, nickName)

  return (
    <ModelComponent>
      <HeaderComponent
        leadingAction={() => navigation.goBack()}
        leadingButton="arrow-left"
      >
        Register
      </HeaderComponent>
      <View className="flex-1 mx-4">
        <View className="flex-1 justify-center">
          <Text className="text-white font-primaryRegular text-2xl mb-4">
            How would you like to be called?
          </Text>
          <Text className="text-white font-primaryRegular text-base">
            The nickname will be shown to all your friends
          </Text>
        </View>

        <View className="flex-1 justify-center">
          <TextInputComponent
            label="Name"
            value={name}
            validation={nameValid}
            errorText={"Please provide name and last name"}
            className="my-4"
            onChange={(e) => setName(e.nativeEvent.text)}
          />
          <TextInputComponent
            label="Nickname"
            value={nickName}
            className="my-4"
            onChange={(e) => setNickName(e.nativeEvent.text)}
          />
        </View>

        <View className="flex-1 items-center justify-end my-4">
          <ButtonComponent name="Next" className="w-60" onPress={handleNext} />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpNameScreen
