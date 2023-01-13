import React, { useEffect } from 'react'
import { SignInScreen, HomeScreen, SignUpPasswordScreen, SignUpEmailScreen, SplashScreen } from '../screens'
import { LoadingModalComponent } from '../components'
import { routes } from '../utils'
import { ScreenTypes } from '../types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { useAuth } from '../hooks'

const Stack = createNativeStackNavigator<ScreenTypes>()
const Tab = createBottomTabNavigator()

const screenProperties = {
  headerShown: false,
}

export default function Routes() {
  const { user, initializing } = useAuth()

  return (
    <SplashScreen isAppReady={true}>
      <StatusBar barStyle={'light-content'} />
      <LoadingModalComponent />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenProperties}>{user ? Unlogged : Logged}</Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </SplashScreen>
  )
}

const Logged = (
  <>
    <Stack.Screen
      name={routes.unlogged.signIn}
      component={SignInScreen}
    />
    <Stack.Screen
      name={routes.unlogged.signUpEmail}
      component={SignUpEmailScreen}
    />
    <Stack.Screen
      name={routes.unlogged.signUpPassword}
      component={SignUpPasswordScreen}
    />
    {/* <Stack.Screen   name={routes.unlogged.forgotPassword} component={ForgotPasswordScreen} /> */}
    {/* <Stack.Screen   name={routes.unlogged.signUpName} component={SignUpNameScreen} /> */}
    {/* <Stack.Screen   name={routes.unlogged.signUpAvatar} component={SignUpAvatarScreen} /> */}
  </>
)

const Unlogged = (
  <>
    <Stack.Screen
      name={routes.logged.home}
      component={HomeScreen}
    />
    {/* <Stack.Screen name="WatchList" component={WatchListScreen} /> */}
    {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
  </>
)
