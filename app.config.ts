import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: process.env.APP_NAME,
  slug: process.env.APP_SLUG,
  icon: process.env.ICON,

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
