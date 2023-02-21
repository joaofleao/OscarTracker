import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { TextInputComponent, ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { routes } from '../../../utils'

function SignUpPasswordScreen({ navigation, route }: any) {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const isValid = password === confirmPassword && password.length > 0

  const oneUpperCase = /(?=.*[A-Z])/.test(password)
  const specialCase = /(?=.*[!@#$&*.])/.test(password)
  const oneDigits = /(?=.*[0-9])/.test(password)
  const lowerCase = /(?=.*[a-z])/.test(password)

  const getError = () => {
    let message = ''
    if (!oneUpperCase) message = message + 'one uppercase, '
    if (!specialCase) message = message + 'one special char, '
    if (!oneDigits) message = message + 'one digit, '
    if (!lowerCase) message = message + 'one lowercase, '
    if (!isValid) message = message + 'must be equal, '
    return message
  }

  return (
    <ModelComponent>
      <HeaderComponent
        leadingAction={() => navigation.goBack()}
        leadingButton='chevron-left'>
        Register
      </HeaderComponent>
      <View className='flex-1 justify-between'>
        <View className='flex-1 justify-center mx-4'>
          <Text className='text-white font-primaryRegular text-2xl mb-4'>How about some security?</Text>
          <Text className='text-white font-primaryRegular text-base'>Make sure to use a strong password.</Text>
        </View>

        <View className='flex-1'>
          <TextInputComponent
            label='Password'
            value={password}
            type={'password'}
            className='mx-4 mb-5'
            onChange={e => setPassword(e.nativeEvent.text)}
          />
          <TextInputComponent
            label='Confirm Password'
            value={confirmPassword}
            type={'password'}
            className='mx-4'
            validation={isValid && oneUpperCase && specialCase && oneDigits && lowerCase}
            errorText={getError()}
            onChange={e => setConfirmPassword(e.nativeEvent.text)}
          />
        </View>

        <View className='flex-1' />

        <View className='items-center justify-center my-4 '>
          <ButtonComponent
            disabled={!(isValid && oneUpperCase && specialCase && oneDigits && lowerCase)}
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
