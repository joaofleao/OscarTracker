import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInputComponent, ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { routes } from '../../../utils'

function SignUpScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>('')

  return (
    <ModelComponent>
      <View className='flex-1 mx-4 justify-between'>
        <HeaderComponent
          leadingAction={() => navigation.goBack()}
          leadingButton='chevron-left'>
          Register
        </HeaderComponent>

        <View className='flex-1 justify-center'>
          <Text className='text-white font-primaryRegular text-2xl'>Give us your best e-mail</Text>
        </View>

        <TextInputComponent
          placeholder='E-mail'
          value={email}
          className='my-4'
          onChange={e => setEmail(e.nativeEvent.text)}
        />
        <View className='flex-1' />

        <View className='items-center justify-center '>
          <ButtonComponent
            name='Next'
            className='w-60'
            onPress={() =>
              navigation.navigate(routes.unlogged.signUpPassword, {
                email,
              })
            }
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpScreen
