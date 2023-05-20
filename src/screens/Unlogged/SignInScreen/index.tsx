import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { ButtonComponent, LogoComponent, ModelComponent, TextInputComponent } from '../../../components'
import { useAuth } from '../../../hooks'
import { type SignInScreenProps } from '../../../types'
import { routes } from '../../../utils'

const SignInScreen = ({ navigation }: SignInScreenProps): JSX.Element => {
  const { signIn } = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const formattedEmail = email.replace(/[^a-zA-Z0-9@.]/g, '')

  return (
    <ModelComponent>
      <View className="justify-center flex-1">
        <LogoComponent />

        <TextInputComponent
          className="mb-5 mx-4"
          label="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
        />

        <View className="mb-12 mx-4 ">
          <TextInputComponent
            className="mb-2"
            label="Password"
            type="password"
            value={password}
            onChangeText={(text) => {
              setPassword(text)
            }}
          />
          <View className="items-end">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.unlogged.forgotPassword, { email })
              }}
            >
              <Text className="font-primaryBold p-2 text-xs text-amber-500 ">Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="items-center">
          <ButtonComponent
            label="Sign In"
            variant="primary"
            disabled={formattedEmail === '' || password === ''}
            onPress={() => {
              signIn(formattedEmail, password)
            }}
            style={{ marginBottom: 12 }}
          />

          <ButtonComponent
            label="New here?"
            variant="secondary"
            onPress={() => {
              navigation.navigate(routes.unlogged.signUpEmail)
            }}
          />
        </View>

        <View className="w-full items-center">
          {/* <Text className='text-gray-600 font-[Spartan-Regular] mb-4 text-base'>continue using</Text> */}

          {/* <View className='flex-row'>
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
          </View> */}
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignInScreen
