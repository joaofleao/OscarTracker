import React from 'react'
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
  const { isLogged } = useAuth()

  return (
    <SplashScreen isAppReady={true}>
      <StatusBar barStyle={'light-content'} />
      <LoadingModalComponent />

      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenProperties}>{isLogged ? Unlogged : Logged}</Stack.Navigator>
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
    {/* <Stack.Screen name="ForgotPassword" component={SignUpScreen} /> */}
    {/* <Stack.Screen name="SetEmail" component={SetEmailScreen} /> */}
    {/* <Stack.Screen name="SetPassword" component={SetPasswordScreen} /> */}
    {/* <Stack.Screen name="SetName" component={SetNameScreen} /> */}
    {/* <Stack.Screen name="SetProfilePic" component={SetProfilePicScreen} /> */}
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
