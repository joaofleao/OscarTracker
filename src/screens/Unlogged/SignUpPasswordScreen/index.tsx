import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { TextInputComponent, ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { useAuth } from '../../../hooks'
import { routes } from '../../../utils'

function SignUpScreen({ navigation, route }: any) {
  const { email } = route.params
  const [pressed, setPressed] = useState<boolean>(false)

  const { signUp, user } = useAuth()

  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    if (!user && pressed) navigation.navigate(routes.unlogged.signIn)
  }, [user])

  return (
    <ModelComponent>
      <View className='flex-1 mx-4 justify-between'>
        <HeaderComponent
          leadingAction={() => navigation.goBack()}
          leadingButton='chevron-left'>
          Register
        </HeaderComponent>

        <View className='flex-1 justify-center'>
          <Text className='text-white font-primaryRegular text-2xl'>How about some security?</Text>
        </View>

        <TextInputComponent
          placeholder='Password'
          value={password}
          className='my-4'
          onChange={e => setPassword(e.nativeEvent.text)}
        />
        <View className='flex-1' />

        <View className='items-center justify-center my-4 '>
          <ButtonComponent
            name='Next'
            className='w-60'
            onPress={() => {
              signUp(email, password)
              setPressed(true)
            }}
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpScreen
