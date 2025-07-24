import { type ParamListBase } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export interface ScreenTypes extends ParamListBase {
  Index: undefined
  SignIn: undefined
  SignUp: undefined

  PasswordRecovery: {
    email: string | undefined
  }

  Preferences: undefined
  WatchList: undefined
  Home: undefined

  Profile: undefined
  Settings: undefined
  Movie: {
    movieId: string
  }
  Category: {
    categoryId: string
  }
}

export type HomeProps = NativeStackScreenProps<ScreenTypes, 'Home'>
export type MovieProps = NativeStackScreenProps<ScreenTypes, 'Movie'>
export type PreferencesProps = NativeStackScreenProps<ScreenTypes, 'Preferences'>
export type CategoryProps = NativeStackScreenProps<ScreenTypes, 'Category'>
export type SignUpProps = NativeStackScreenProps<ScreenTypes, 'SignUp'>
export type SignInProps = NativeStackScreenProps<ScreenTypes, 'SignIn'>
export type WatchListProps = NativeStackScreenProps<ScreenTypes, 'WatchList'>
export type EmailProps = NativeStackScreenProps<ScreenTypes, 'Email'>
export type PasswordRecoveryProps = NativeStackScreenProps<ScreenTypes, 'PasswordRecovery'>
export type ProfileProps = NativeStackScreenProps<ScreenTypes, 'Profile'>
export type SettingsProps = NativeStackScreenProps<ScreenTypes, 'Settings'>
