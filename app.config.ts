import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: process.env.APP_NAME,
  slug: process.env.APP_SLUG,
  icon: process.env.ICON,

  extra: {
    eas: {
      projectId: '8b994b96-2537-4c86-b4c9-6219f98bb639',
    },
  },

  splash: {
    image: process.env.SPLASH_SCREEN,
    resizeMode: 'contain',
    backgroundColor: '#18181B',
  },

  android: {
    versionCode: 2,
    backgroundColor: '#18181B',
    adaptiveIcon: {
      foregroundImage: process.env.ADAPTIVE_ICON,
      backgroundColor: '#18181B',
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
