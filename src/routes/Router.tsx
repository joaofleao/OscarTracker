import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar, View } from 'react-native'
import * as Fonts from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Navigation from './Navigation'
import useStyles from './styles'
import ToastNotification from '@components/ToastNotification'
import LoadingModal from '@containers/LoadingModal'
import NetworkModal from '@containers/NetworkModal'
import { useTheme } from '@features/theme'
import enUS from '@i18n/en-US.json'
import ptBR from '@i18n/pt-BR.json'
import { print } from '@utils/functions'

SplashScreen.preventAutoHideAsync()

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
})

const resources = {
  'pt-BR': ptBR,
  'en-US': enUS,
}

const initI18n = async (): Promise<void> => {
  const json = await AsyncStorage.getItem('userData')
  const savedLanguage = JSON.parse(json)?.language

  // if (!user.language) {
  //   savedLanguage = Localization.locale
  // }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng: savedLanguage,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  })
}

initI18n()

const localFonts = {
  'Tienne-Black': require('@assets/fonts/tienne/Tienne-Black.ttf'),
  'Tienne-Bold': require('@assets/fonts/tienne/Tienne-Bold.ttf'),
  'Tienne-Regular': require('@assets/fonts/tienne/Tienne-Regular.ttf'),

  'Inconsolata-Black': require('@assets/fonts/inconsolata/Inconsolata-Black.ttf'),
  'Inconsolata-Bold': require('@assets/fonts/inconsolata/Inconsolata-Bold.ttf'),
  'Inconsolata-Regular': require('@assets/fonts/inconsolata/Inconsolata-Regular.ttf'),

  'Inconsolata_SemiExpanded-Black': require('@assets/fonts/inconsolata/Inconsolata_SemiExpanded-Black.ttf'),
  'Inconsolata_SemiExpanded-Bold': require('@assets/fonts/inconsolata/Inconsolata_SemiExpanded-Bold.ttf'),
  'Inconsolata_SemiExpanded-Regular': require('@assets/fonts/inconsolata/Inconsolata_SemiExpanded-Regular.ttf'),

  'Spartan-Bold': require('@assets/fonts/spartan/Spartan-Bold.ttf'),
  'Spartan-Regular': require('@assets/fonts/spartan/Spartan-Regular.ttf'),
  'Spartan-Light': require('@assets/fonts/spartan/Spartan-Light.ttf'),
}

const Router = (): JSX.Element => {
  const [appIsReady, setAppIsReady] = React.useState(false)

  // const announcements = useAnnouncements()

  const styles = useStyles()

  const { colors } = useTheme()

  React.useEffect(() => {
    async function prepare(): Promise<void> {
      try {
        await Fonts.loadAsync(localFonts)
        await new Promise((resolve) => {
          return setTimeout(resolve, 2000)
        })
      } catch (e) {
        print('error on start', e, 'blue')
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = React.useCallback(() => {
    if (appIsReady) SplashScreen.hide()
  }, [appIsReady])

  if (!appIsReady) {
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
      {/* <NewVersionModal /> */}
      <NetworkModal />

      <ToastNotification />
      <View
        onLayout={onLayoutRootView}
        style={styles.container}
      >
        {Navigation}
      </View>
    </>
  )
}

export default Router
