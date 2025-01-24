import { ExpoConfig } from 'expo/config'

export default (): ExpoConfig => ({
  owner: 'joaofleao',
  name: 'Oscar Tracker',
  slug: 'oscartracker',
  icon: './src/assets/app/icon.png',
  newArchEnabled: true,

  plugins: [
    'expo-font',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#171C23',
        image: './src/assets/app/splash-icon-dark.png',
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
    softwareKeyboardLayoutMode: 'resize',
    adaptiveIcon: {
      foregroundImage: './src/assets/app/adaptive-icon.png',
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
    favicon: './src/assets/app/favicon.png',
  },
})
