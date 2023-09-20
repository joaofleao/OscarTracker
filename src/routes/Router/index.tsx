import React from 'react'
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import * as Styled from './styles'
import ToastNotification from '@components/ToastNotification'
import LoadingModal from '@containers/LoadingModal'
import NewVersionModal from '@containers/NewVersionModal'
import { useTheme } from '@features/theme'
import { useToast } from '@features/toast'
import { useUser } from '@features/user'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Logged from '@routes/Logged'
import Unlogged from '@routes/Unlogged'
import { auth } from '@services/firebase'
import type { ScreenTypes, User } from '@types'

const Stack = createNativeStackNavigator<ScreenTypes>()

SplashScreen.preventAutoHideAsync()

const screenOptions = {
  headerShown: false,
}

const localFonts = {
  'Quicksand-Bold': require('@assets/fonts/quicksand/Quicksand-Bold.ttf'),
  'Quicksand-SemiBold': require('@assets/fonts/quicksand/Quicksand-SemiBold.ttf'),
  'Quicksand-Medium': require('@assets/fonts/quicksand/Quicksand-Medium.ttf'),
  'Quicksand-Regular': require('@assets/fonts/quicksand/Quicksand-Regular.ttf'),
  'Quicksand-Light': require('@assets/fonts/quicksand/Quicksand-Light.ttf'),

  'Spartan-Bold': require('@assets/fonts/spartan/Spartan-Bold.ttf'),
  'Spartan-SemiBold': require('@assets/fonts/spartan/Spartan-SemiBold.ttf'),
  'Spartan-Medium': require('@assets/fonts/spartan/Spartan-Medium.ttf'),
  'Spartan-Regular': require('@assets/fonts/spartan/Spartan-Regular.ttf'),
  'Spartan-Light': require('@assets/fonts/spartan/Spartan-Light.ttf'),
}

const Router = (): JSX.Element => {
  const user = useUser()
  const { colors } = useTheme()
  const { title, description, type, position } = useToast()
  const [fontsLoaded] = useFonts(localFonts)
  const [splashLoaded, setSplashLoaded] = React.useState(false)
  const [authLoaded, setAuthLoaded] = React.useState(false)

  React.useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((data: User | null) => {
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
  }, [user])

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
        backgroundColor={colors.background.default}
        barStyle={'light-content'}
      />

      <LoadingModal />
      <NewVersionModal />

      <ToastNotification
        title={title}
        description={description}
        type={type}
        position={position}
      />

      <Styled.Container>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            {user.isLogged ? Logged : Unlogged}
          </Stack.Navigator>
        </NavigationContainer>
      </Styled.Container>
    </>
  )
}

export default Router
