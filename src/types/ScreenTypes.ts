import { type ParamListBase } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export interface ScreenTypes extends ParamListBase {
  IndexScreen: undefined
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
  PreferencesScreen: undefined
  HomeScreen: undefined
  WatchListScreen: undefined
  ProfileScreen: undefined
  MovieScreen: {
    id: string
    poster: string
    name: string
  }
  NominationScreen: {
    id: string
  }
}

export type HomeScreenProps = NativeStackScreenProps<ScreenTypes, 'HomeScreen'>
export type MovieScreenProps = NativeStackScreenProps<ScreenTypes, 'MovieScreen'>
export type PreferencesScreenProps = NativeStackScreenProps<ScreenTypes, 'PreferencesScreen'>
export type NominationScreenProps = NativeStackScreenProps<ScreenTypes, 'NominationScreen'>
export type SignInProps = NativeStackScreenProps<ScreenTypes, 'SignIn'>
export type WatchListScreenProps = NativeStackScreenProps<ScreenTypes, 'WatchListScreen'>
export type EmailProps = NativeStackScreenProps<ScreenTypes, 'Email'>
export type PasswordProps = NativeStackScreenProps<ScreenTypes, 'Password'>
export type NameProps = NativeStackScreenProps<ScreenTypes, 'Name'>
export type PasswordRecoveryProps = NativeStackScreenProps<ScreenTypes, 'PasswordRecovery'>
export type ProfileScreenProps = NativeStackScreenProps<ScreenTypes, 'ProfileScreen'>
