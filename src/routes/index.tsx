import React, { useRef, useEffect, useState, useMemo } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Authentication" component={Authentication} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Authentication = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        component={() => {
          return (
            <View className="flex-1 items-center justify-center">
              <Text>teste</Text>
            </View>
          )
        }}
      />
      {/* <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="RegistrationEmail" component={RegistrationEmail} /> */}
      {/* <Stack.Screen
        name="RegistrationPassword"
        component={RegistrationPassword}
      /> */}
      {/* <Stack.Screen name="RegistrationName" component={RegistrationName} /> */}
      {/* <Stack.Screen name="RegistrationImage" component={RegistrationImage} /> */}
    </Stack.Navigator>
  )
}
