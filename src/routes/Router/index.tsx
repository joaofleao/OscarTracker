import React from 'react'
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { collection, doc, onSnapshot } from 'firebase/firestore'

import * as Styled from './styles'
import ToastNotification from '@components/ToastNotification'
import LoadingModal from '@containers/LoadingModal'
import NetworkModal from '@containers/NetworkModal'
import NewVersionModal from '@containers/NewVersionModal'
import { useAnnouncements } from '@features/announcements'
import { useEdition } from '@features/edition'
import { useTheme } from '@features/theme'
import { useUser } from '@features/user'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Logged from '@routes/Logged'
import Unlogged from '@routes/Unlogged'
import { auth, db } from '@services/firebase'
import type { ScreenTypes, Unsubscribe, User, UserType } from '@types'

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
  const edition = useEdition()
  const announcement = useAnnouncements()

  const { colors } = useTheme()
  const [fontsLoaded] = useFonts(localFonts)

  const usersCollection = collection(db, 'users')

  const [splashLoaded, setSplashLoaded] = React.useState(false)
  const [authLoaded, setAuthLoaded] = React.useState(false)

  React.useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((data: User | null) => {
      if (data !== null) {
        user.setUid(data.uid)
        user.setIsLogged(true)

        edition.getCategories()
        edition.getMovies()
        edition.getPeople()
        edition.getNominations()
        announcement.getAnnouncements()
      }

      setAuthLoaded(true)

      setTimeout(() => {
        setSplashLoaded(true)
      }, 1000)
    })

    return () => {
      unsubscribeAuth()
    }
  }, [])

  React.useEffect(() => {
    if (user.isLogged) {
      const userRef = doc(usersCollection, user.uid)
      const unsubscribe = onSnapshot(userRef, (snap) => {
        const response = snap.data()
        if (response !== undefined) {
          user.setUser(response as UserType)
        }
      })
      return () => {
        unsubscribe()
      }
    }
  }, [user.isLogged])

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
      <NetworkModal />
      <ToastNotification />

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
