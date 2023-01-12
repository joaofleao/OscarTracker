import React from 'react'
import { SignInScreen, HomeScreen, SignUpPasswordScreen, SignUpEmailScreen, LoadingScreen } from '../screens'
import { routes } from '../utils'
import { ScreenTypes } from '../types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator<ScreenTypes>()
const Tab = createBottomTabNavigator()

const screenProperties = {
  headerShown: false,
}
const tag = null

export default function Routes() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenProperties}>
          {tag === null ? Logged : Unlogged}
          {Unprotected}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
const Unprotected = (
  <>
    <Stack.Screen
      name={routes.unprotected.loadingScreen}
      component={LoadingScreen}
    />
    {/* <Stack.Screen name="WatchList" component={WatchListScreen} /> */}
    {/* <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
  </>
)
