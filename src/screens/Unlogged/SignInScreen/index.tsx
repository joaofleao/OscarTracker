import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Button, Global, Input, Logo } from '../../../components'
import { useAuth, useTheme } from '../../../features'
import { type SignInScreenProps } from '../../../types'
import { routes } from '../../../utils'

const SignInScreen = ({ navigation }: SignInScreenProps): JSX.Element => {
  const auth = useAuth()
  const theme = useTheme()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const formattedEmail = email.replace(/[^a-zA-Z0-9@.]/g, '')

  return (
    <Global.Screen>
      <View
      // className="justify-center  flex-1"
      >
        <View
        // className="items-center"
        >
          <Logo mb="40px" />
        </View>

        <Input
          mb={theme.sizes.size10}
          mh={theme.sizes.size10}
          label="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
        />

        <Input
          mh={theme.sizes.size10}
          label="Password"
          type="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
        />
        <View
        // className="items-end mr-5 ml-5"
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.unlogged.forgotPassword, { email })
            }}
          >
            <Text
            // className=" mb-6 font-primaryBold p-2 text-xs text-amber-500 "
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <View
        // className="items-center"
        >
          <Button
            label="Sign In"
            variant="primary"
            disabled={formattedEmail === '' || password === ''}
            onPress={() => {
              auth.signIn(formattedEmail, password)
            }}
            mb={theme.spacings.space7}
          />

          <Button
            label="New here?"
            variant="secondary"
            onPress={() => {
              navigation.navigate(routes.unlogged.signUpEmail)
            }}
          />
        </View>

        <View
        // className="w-full items-center"
        >
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
    </Global.Screen>
  )
}

export default SignInScreen
