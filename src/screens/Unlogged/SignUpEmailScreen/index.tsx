import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInputComponent, ButtonComponent, ModelComponent } from '../../../components'
import { routes } from '../../../utils'

function SignUpScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>('')

  return (
    <ModelComponent>
      <View className='flex-1 mx-4 justify-between'>
        <View className='justify-center items-center h-11 my-4'>
          <Text className='text-white font-[Montserrat-Bold] text-lg '>Register</Text>
        </View>

        <View className='flex-1 justify-center'>
          <Text className='text-white font-[Montserrat-Regular] text-2xl'>Give us your best e-mail</Text>
        </View>

        <TextInputComponent
          placeholder='E-mail'
          value={email}
          className='my-4'
          onChange={e => setEmail(e.nativeEvent.text)}
        />
        <View className='flex-1' />

        <View className='items-center h-11 justify-center my-4 '>
          <ButtonComponent
            name='Next'
            className='w-60'
            onPress={() => navigation.navigate(routes.unlogged.signUpPassword)}
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpScreen
