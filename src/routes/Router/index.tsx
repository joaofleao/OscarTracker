import React from 'react'
import { StatusBar } from 'react-native'
import colors from 'tailwindcss/colors'

import { LoadingModal } from '../../components'
import { useAuth, useUser } from '../../features'
import { Logged, Unlogged } from '../../routes'
import { SplashScreen } from '../../screens'
import { type ScreenTypes } from '../../types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<ScreenTypes>()

const screenOptions = {
  headerShown: false,
}

const Router = (): JSX.Element => {
  const auth = useAuth()
  const user = useUser()

  return (
    <SplashScreen isAppReady={!auth.initializing}>
      <StatusBar
        animated={true}
        backgroundColor={colors.zinc[900]}
        barStyle={'light-content'}
      />
      <LoadingModal />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>{user.isLogged ? Logged : Unlogged}</Stack.Navigator>
      </NavigationContainer>
    </SplashScreen>
  )
}

export default Router
