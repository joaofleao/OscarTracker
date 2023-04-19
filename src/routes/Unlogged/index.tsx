import React from 'react'

import { SignInScreen, SignUpAvatarScreen, SignUpEmailScreen, SignUpNameScreen, SignUpPasswordScreen } from '../../screens'
import { type ScreenTypes } from '../../types'
import { routes } from '../../utils'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<ScreenTypes>()

export const Unlogged = (
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
    <Stack.Screen
      name={routes.unlogged.signUpName}
      component={SignUpNameScreen}
    />
    <Stack.Screen
      name={routes.unlogged.signUpAvatar}
      component={SignUpAvatarScreen}
    />
    {/* <Stack.Screen   name={routes.unlogged.forgotPassword} component={ForgotPasswordScreen} /> */}
  </>
)
