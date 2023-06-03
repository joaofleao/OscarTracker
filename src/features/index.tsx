import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthProvider from './auth/AuthProvider'
import DataProvider from './data/DataProvider'
import MoviesProvider from './movies/MoviesProvider'
import ThemeProvider from './theme/ThemeProvider'
import ToastProvider from './toast/ToastProvider'
import UserProvider from './user/UserProvider'

export { default as useAuth } from './auth/useAuth'
export { default as useData } from './data/useData'
// export { default as useLoading } from './loading/useLoading'
export { default as useMovies } from './movies/useMovies'
export { default as usePersonalData } from './personalData/usePersonalData'
export { default as useTheme } from './theme/useTheme'
export { default as useToast } from './toast/useToast'
export { default as useUser } from './user/useUser'

interface Provider {
  children?: React.ReactNode
  contextProviders?: Element[]
}

const ContextProviderComposer = ({ contextProviders, children }: Provider): JSX.Element => {
  return contextProviders?.reduceRight((children: any, parent: any) => React.cloneElement(parent, { children }), children) as JSX.Element
}

const ContextProviders = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  return (
    <ContextProviderComposer
      contextProviders={[
        <SafeAreaProvider key={'safe_provider'} />,
        <ThemeProvider key={'theme_provider'} />,
        <ToastProvider key={'toast_provider'} />,
        <UserProvider key={'user_provider'} />,
        <AuthProvider key={'auth_provider'} />,
        <MoviesProvider key={'movies_provider'} />,
        <DataProvider key={'data_provider'} />,
      ]}
    >
      {children}
    </ContextProviderComposer>
  )
}

export default ContextProviders
export { DataProvider }
