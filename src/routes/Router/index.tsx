import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StatusBar } from 'react-native'

import { SplashScreen } from '../../screens'
import { LoadingModalComponent } from '../../components'
import { useAuth } from '../../hooks'
import { ScreenTypes } from '../../types'
import { Unlogged, Logged } from '../../routes'

import colors from 'tailwindcss/colors'

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
