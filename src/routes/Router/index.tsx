import React from 'react'
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

// import colors from 'tailwindcss/colors'
import { LoadingModal } from '../../components'
import { useAuth, useUser } from '../../features'
import { Logged, Unlogged } from '../../routes'
import { type ScreenTypes } from '../../types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<ScreenTypes>()

SplashScreen.preventAutoHideAsync()

const screenOptions = {
  headerShown: false,
}

const Router = (): JSX.Element => {
  const auth = useAuth()
  const user = useUser()

  const [fontsLoaded] = useFonts({
    'Quicksand-Bold': require('../../assets/fonts/quicksand/Quicksand-Bold.ttf'),
    'Quicksand-SemiBold': require('../../assets/fonts/quicksand/Quicksand-SemiBold.ttf'),
    'Quicksand-Medium': require('../../assets/fonts/quicksand/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('../../assets/fonts/quicksand/Quicksand-Regular.ttf'),
    'Quicksand-Light': require('../../assets/fonts/quicksand/Quicksand-Light.ttf'),

    'Spartan-Bold': require('../../assets/fonts/spartan/Spartan-Bold.ttf'),
    'Spartan-SemiBold': require('../../assets/fonts/spartan/Spartan-SemiBold.ttf'),
    'Spartan-Medium': require('../../assets/fonts/spartan/Spartan-Medium.ttf'),
    'Spartan-Regular': require('../../assets/fonts/spartan/Spartan-Regular.ttf'),
    'Spartan-Light': require('../../assets/fonts/spartan/Spartan-Light.ttf'),
  })

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded && !auth.initializing) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, auth.initializing])

  React.useEffect(() => {
    onLayoutRootView()
  }, [onLayoutRootView])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'#1c1917'}
        barStyle={'light-content'}
      />
      <LoadingModal />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          {user.isLogged ? Logged : Unlogged}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Router
