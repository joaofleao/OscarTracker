import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { TextInputComponent, ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { routes } from '../../../utils'

function SignUpEmailScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>('')

  const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

  return (
    <ModelComponent>
      <HeaderComponent
        leadingAction={() => navigation.goBack()}
        leadingButton='chevron-left'>
        Register
      </HeaderComponent>

      <View className='flex-1 justify-between'>
        <View className='flex-1 justify-center mx-4'>
          <Text className='text-white font-primaryRegular text-2xl mb-4'>Give us your best e-mail</Text>
          <Text className='text-white font-primaryRegular text-base'>
            We will send you a verification code to this e-mail
          </Text>
        </View>

        <View className='flex-1'>
          <TextInputComponent
            className='mx-4'
            label='Email'
            value={email}
            validation={emailValid}
            errorText={'You must provide a valid email'}
            onChangeText={text => setEmail(text.trim())}
          />
        </View>

        <View className='flex-1' />

        <View className='items-center justify-center '>
          <ButtonComponent
            name='Next'
            disabled={!emailValid}
            className='w-60'
            onPress={() => {
              navigation.navigate(routes.unlogged.signUpPassword, {
                email,
              })
            }}
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpEmailScreen
