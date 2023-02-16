import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInputComponent, ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { routes } from '../../../utils'

function SignUpPasswordScreen({ navigation, route }: any) {
  const [password, setPassword] = useState<string>('')

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
          type={'password'}
          className='my-4'
          onChange={e => setPassword(e.nativeEvent.text)}
        />
        <View className='flex-1' />

        <View className='items-center justify-center my-4 '>
          <ButtonComponent
            name='Next'
            className='w-60'
            onPress={() =>
              navigation.navigate(routes.unlogged.signUpName, {
                ...route.params,
                password,
              })
            }
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpPasswordScreen
