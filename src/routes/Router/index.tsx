import React from 'react'
import { StatusBar } from 'react-native'
import colors from 'tailwindcss/colors'

import { LoadingModalComponent } from '../../components'
import { useAuth } from '../../hooks'
import { Logged, Unlogged } from '../../routes'
import { SplashScreen } from '../../screens'
import { type ScreenTypes } from '../../types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<ScreenTypes>()

const screenOptions = {
  headerShown: false,
}

export default function Router() {
  const { initializing } = useAuth()

  return (
    <SplashScreen isAppReady={true}>
      <StatusBar
        animated={true}
        backgroundColor={colors.zinc[900]}
        barStyle={'light-content'}
      />
      <LoadingModalComponent />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>{!initializing ? Logged : Unlogged}</Stack.Navigator>
      </NavigationContainer>
    </SplashScreen>
  )
}
