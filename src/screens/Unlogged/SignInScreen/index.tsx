import { Text, View } from 'react-native'
import { TextInputComponent, ButtonComponent } from '../../../components'

import { Logo } from '../../../assets/images'

function SignInScreen() {
  return (
    <View className="flex-1 justify-center bg-zinc-900">
      <View className="flex-row mb-20 w-full justify-center">
        <Logo />
        <View className="w-2.5" />
        <View className="justify-center">
          <Text className="text-white font-[Spartan-Regular] text-4xl">
            oscar
          </Text>
          <View className="h-2.5" />

          <Text className="text-white font-[Spartan-Regular] text-4xl">
            tracker
          </Text>
        </View>
      </View>

      <TextInputComponent placeholder="Email" className="mx-4 mb-5 " />

      <TextInputComponent placeholder="Password" className="mx-4 mb-12" />

      <View className="items-center">
        <ButtonComponent name="Sign In" className="w-60 mb-5" />
        <ButtonComponent name="Register" className="w-60" />
      </View>
    </View>
  )
}

export default SignInScreen
