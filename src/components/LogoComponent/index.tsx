import React from "react"
import { Text, View } from "react-native"
import { Logo } from "../../assets/images"

function LogoComponent() {
  return (
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
  )
}

export default LogoComponent
