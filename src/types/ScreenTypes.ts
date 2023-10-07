import { type ParamListBase } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export interface ScreenTypes extends ParamListBase {
  Index: undefined
  SignIn: undefined
  Email: undefined
  PasswordRecovery: {
    email: string | undefined
  }
  Password: {
    email: string
  }
  Name: {
    email: string
    password: string
  }
  Preferences: undefined
  Home: undefined
  WatchList: undefined
  Profile: undefined
  Movie: {
    id: string
    poster: string
    name: string
  }
  Category: {
    id: string
  }
}

export type HomeProps = NativeStackScreenProps<ScreenTypes, 'Home'>
export type MovieProps = NativeStackScreenProps<ScreenTypes, 'Movie'>
export type PreferencesProps = NativeStackScreenProps<ScreenTypes, 'Preferences'>
export type CategoryProps = NativeStackScreenProps<ScreenTypes, 'Category'>
export type SignInProps = NativeStackScreenProps<ScreenTypes, 'SignIn'>
export type WatchListProps = NativeStackScreenProps<ScreenTypes, 'WatchList'>
export type EmailProps = NativeStackScreenProps<ScreenTypes, 'Email'>
export type PasswordProps = NativeStackScreenProps<ScreenTypes, 'Password'>
export type NameProps = NativeStackScreenProps<ScreenTypes, 'Name'>
export type PasswordRecoveryProps = NativeStackScreenProps<ScreenTypes, 'PasswordRecovery'>
export type ProfileProps = NativeStackScreenProps<ScreenTypes, 'Profile'>
