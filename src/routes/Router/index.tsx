import React from 'react'
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { LoadingModal } from '../../components'
import { useUser } from '../../features'
import { Logged, Unlogged } from '../../routes'
import { auth as services } from '../../services'
import { type ScreenTypes, User } from '../../types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<ScreenTypes>()

SplashScreen.preventAutoHideAsync()

const screenOptions = {
  headerShown: false,
}

const localFonts = {
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
}

const Router = (): JSX.Element => {
  const user = useUser()
  const [fontsLoaded] = useFonts(localFonts)
  const [splashLoaded, setSplashLoaded] = React.useState(false)
  const [authLoaded, setAuthLoaded] = React.useState(false)

  React.useEffect(() => {
    const unsubscribeAuth = services.onAuthStateChanged((data: User | null) => {
      if (data !== null) {
        user.setUid(data.uid)
        user.setIsLogged(true)
      }
      setAuthLoaded(true)
    })

    setTimeout(() => {
      setSplashLoaded(true)
    }, 1000)

    return () => {
      unsubscribeAuth()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (fontsLoaded && splashLoaded && authLoaded) {
      SplashScreen.hideAsync()
    }
  }, [splashLoaded, fontsLoaded, authLoaded])

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
