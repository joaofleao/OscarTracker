import React, { useState } from 'react'
import { Text, View } from 'react-native'
import {
  TextInputComponent,
  ButtonComponent,
  SocialButtonComponent,
  LogoComponent,
  ModelComponent,
} from '../../../components'

import { useAuth } from '../../../hooks'
import { routes } from '../../../utils'

function SignInScreen({ navigation }: any) {
  const { signInGoogle, signInFacebook, signIn, auth } = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <ModelComponent>
      <View className='justify-end flex-1'>
        <LogoComponent />

        <TextInputComponent
          placeholder='Email'
          value={email}
          className='mx-4 mb-5'
          onChange={e => setEmail(e.nativeEvent.text)}
        />

        <TextInputComponent
          value={password}
          placeholder='Password'
          className='mx-4 mb-12'
          onChange={e => setPassword(e.nativeEvent.text)}
        />

        <View className='items-center mb-28'>
          <ButtonComponent
            name='Sign In'
            className='w-60 mb-5'
            onPress={() => signIn(email, password)}
          />
          <ButtonComponent
            name='Register'
            className='w-60'
            onPress={() => console.log(auth.currentUser)}
          />
        </View>

        <View className='w-full items-center'>
          <Text className='text-gray-600 font-[Spartan-Regular] mb-4 text-md'>continue using</Text>

          <View className='flex-row'>
            <SocialButtonComponent
              name='Facebook'
              onPress={() => signInFacebook()}
              className='mr-2'
            />
            <SocialButtonComponent
              name='Google'
              onPress={() => signInGoogle()}
              className='ml-2'
            />
          </View>
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignInScreen
