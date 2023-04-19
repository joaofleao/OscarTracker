import { type ParamListBase } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

interface ScreenTypes extends ParamListBase {
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

type HomeScreenProps = NativeStackScreenProps<ScreenTypes, 'HomeScreen'>
type MovieScreenProps = NativeStackScreenProps<ScreenTypes, 'MovieScreen'>
type PreferencesScreenProps = NativeStackScreenProps<ScreenTypes, 'PreferencesScreen'>
type NominationScreenProps = NativeStackScreenProps<ScreenTypes, 'NominationScreen'>
type SignInScreenProps = NativeStackScreenProps<ScreenTypes, 'SignInScreen'>
type WatchListScreenProps = NativeStackScreenProps<ScreenTypes, 'WatchListScreen'>
type SignUpAvatarScreenProps = NativeStackScreenProps<ScreenTypes, 'SignUpAvatarScreen'>
type SignUpEmailScreenProps = NativeStackScreenProps<ScreenTypes, 'SignUpEmailScreen'>
type SignUpPasswordScreenProps = NativeStackScreenProps<ScreenTypes, 'SignUpPasswordScreen'>
type SignUpNameScreenProps = NativeStackScreenProps<ScreenTypes, 'SignUpNameScreen'>

export type { HomeScreenProps, MovieScreenProps, NominationScreenProps, PreferencesScreenProps, ScreenTypes, SignInScreenProps, SignUpAvatarScreenProps, SignUpEmailScreenProps, SignUpNameScreenProps, SignUpPasswordScreenProps, WatchListScreenProps }
