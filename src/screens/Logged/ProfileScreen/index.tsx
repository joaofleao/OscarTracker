import React from 'react'
import { Text, View } from 'react-native'
import { ButtonComponent, ModelComponent, HeaderComponent } from '../../../components'
import { useAuth } from '../../../hooks'

function ProfileScreen() {
  const { signOut, user } = useAuth()
  return (
    <ModelComponent top={false}>
      <HeaderComponent>Profile</HeaderComponent>
      <Text>{user?.email}</Text>
      <ButtonComponent
        name='Log Out'
        variant='outlined'
        className='mx-5 mb-5'
        onPress={signOut}
      />
    </ModelComponent>
  )
}

export default ProfileScreen
