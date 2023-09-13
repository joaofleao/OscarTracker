import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Email, Name, Password, PasswordRecovery, SignIn } from '@screens'
import { type ScreenTypes } from '@types'
import { routes } from '@utils'

const Stack = createNativeStackNavigator<ScreenTypes>()

const Unlogged = (
  <>
    <Stack.Screen
      name={routes.unlogged.signIn}
      component={SignIn}
    />
    <Stack.Screen
      name={routes.unlogged.signUpEmail}
      component={Email}
    />
    <Stack.Screen
      name={routes.unlogged.signUpPassword}
      component={Password}
    />
    <Stack.Screen
      name={routes.unlogged.signUpName}
      component={Name}
    />
    <Stack.Screen
      name={routes.unlogged.forgotPassword}
      component={PasswordRecovery}
    />
  </>
)

export default Unlogged
