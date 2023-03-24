import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  SignInScreen,
  SignUpPasswordScreen,
  SignUpEmailScreen,
  SignUpNameScreen,
  SignUpAvatarScreen,
} from "../../screens"
import { routes } from "../../utils"
import { ScreenTypes } from "../../types"

const Stack = createNativeStackNavigator<ScreenTypes>()

export const Unlogged = (
  <>
    <Stack.Screen name={routes.unlogged.signIn} component={SignInScreen} />
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
