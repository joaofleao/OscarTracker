import React from 'react'

import { SignInScreen } from '../screens'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const screenProperties = {
  headerShown: false,
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenProperties}>
        {Logged}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Logged = (
  <>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
    {/* <Stack.Screen name="ForgotPassword" component={SignUpScreen} /> */}
    {/* <Stack.Screen name="SetEmail" component={SetEmailScreen} /> */}
    {/* <Stack.Screen name="SetPassword" component={SetPasswordScreen} /> */}
    {/* <Stack.Screen name="SetName" component={SetNameScreen} /> */}
    {/* <Stack.Screen name="SetProfilePic" component={SetProfilePicScreen} /> */}
  </>
)
