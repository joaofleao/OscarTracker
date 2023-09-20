import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PasswordRecovery from '@screens/Unlogged/PasswordRecovery'
import SignIn from '@screens/Unlogged/SignIn'
import Email from '@screens/Unlogged/SignUp/Email'
import Name from '@screens/Unlogged/SignUp/Name'
import Password from '@screens/Unlogged/SignUp/Password'
import { type ScreenTypes } from '@types'
import routes from '@utils/routes'

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
