import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInputComponent, ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { routes } from '../../../utils'

function SignUpNameScreen({ navigation, route }: any) {
  const [name, setName] = useState<string>('')
  const [nickName, setNickName] = useState<string>('')

  return (
    <ModelComponent>
      <View className='flex-1 mx-4 justify-between'>
        <HeaderComponent
          leadingAction={() => navigation.goBack()}
          leadingButton='chevron-left'>
          Register
        </HeaderComponent>

        <View className='flex-1 justify-center'>
          <Text className='text-white font-primaryRegular text-2xl mb-4'>How would you like to be called?</Text>
          <Text className='text-white font-primaryRegular text-base'>
            The nickname will be shown to all your friends
          </Text>
        </View>

        <TextInputComponent
          placeholder='Name'
          value={name}
          className='my-4'
          onChange={e => setName(e.nativeEvent.text)}
        />
        <TextInputComponent
          placeholder='NickName'
          value={nickName}
          className='my-4'
          onChange={e => setNickName(e.nativeEvent.text)}
        />
        <View className='flex-1' />

        <View className='items-center justify-center my-4'>
          <ButtonComponent
            name='Next'
            className='w-60'
            onPress={() =>
              navigation.navigate(routes.unlogged.signUpAvatar, {
                ...route.params,
                name,
                nickName,
              })
            }
          />
        </View>
      </View>
    </ModelComponent>
  )
}

export default SignUpNameScreen
