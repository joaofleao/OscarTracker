import { ExpoConfig } from 'expo/config'

export default (): ExpoConfig => ({
  owner: 'joaofleao',
  name: process.env.APP_NAME,
  slug: 'oscartracker',
  icon: process.env.ICON,
  newArchEnabled: true,

  plugins: [
    'expo-font',
    [
      'expo-splash-screen',
      {
        image: './src/assets/app/splash-icon.png',
        backgroundColor: '#FAFAFA',
        dark: {
          backgroundColor: '#171C23',
          image: './src/assets/app/splash-icon-dark.png',
        },
        imageWidth: 200,
      },
    ],
  ],

  extra: {
    eas: {
      projectId: '8b994b96-2537-4c86-b4c9-6219f98bb639',
    },
  },

  androidStatusBar: {
    translucent: true,
    barStyle: 'light-content',
  },

  android: {
    adaptiveIcon: {
      foregroundImage: process.env.ADAPTIVE_ICON,
      backgroundColor: '#171C23',
    },
    package: 'com.joaofleao.oscartracker',
  },

  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.joaofleao.oscartracker',
    bitcode: false,
    usesAppleSignIn: true,
  },

  web: {
    favicon: process.env.FAV_ICON,
  },
})
