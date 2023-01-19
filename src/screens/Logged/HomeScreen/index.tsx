import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { ModelComponent } from '../../../components'
import { useAuth } from '../../../hooks'

function HomeScreen() {
  const { signOut, user } = useAuth()

  return (
    <ModelComponent>
      <View className='flex-1  bg-zinc-900'>
        <Pressable onPress={() => signOut()}>
          <Text className='text-white'>LogOut</Text>
        </Pressable>

        <Text className='text-white'>{user.email}</Text>
      </View>
    </ModelComponent>
  )
}

export default HomeScreen
