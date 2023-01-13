import { Text, View, Pressable } from 'react-native'
import { useAuth, useTheme } from '../../../hooks'

function HomeScreen() {
  const { signOut, user } = useAuth()

  return (
    <View className='flex-1 items-center justify-center bg-zinc-900'>
      <Pressable onPress={() => signOut()}>
        <Text className='text-white'>LogOut</Text>
      </Pressable>
      <View style={{ height: 50 }} />

      <Text className='text-white'>{user.email}</Text>
    </View>
  )
}

export default HomeScreen
