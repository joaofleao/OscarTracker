import { type ParamListBase } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export interface ScreenTypes extends ParamListBase {
  IndexScreen: undefined
  SignInScreen: undefined
  SignUpEmailScreen: undefined
  SignUpPasswordScreen: {
    email: string
  }
  SignUpNameScreen: {
    email: string
    password: string
  }
  PreferencesScreen: undefined
  SignUpAvatarScreen: undefined
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
export type SignInScreenProps = NativeStackScreenProps<ScreenTypes, 'SignInScreen'>
export type WatchListScreenProps = NativeStackScreenProps<ScreenTypes, 'WatchListScreen'>
export type SignUpAvatarScreenProps = NativeStackScreenProps<ScreenTypes, 'SignUpAvatarScreen'>
export type SignUpEmailScreenProps = NativeStackScreenProps<ScreenTypes, 'SignUpEmailScreen'>
export type SignUpPasswordScreenProps = NativeStackScreenProps<ScreenTypes, 'SignUpPasswordScreen'>
export type SignUpNameScreenProps = NativeStackScreenProps<ScreenTypes, 'SignUpNameScreen'>
