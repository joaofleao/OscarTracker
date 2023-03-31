import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthProvider from './AuthProvider'
import DataProvider from './DataProvider'
import MoviesProvider from './MoviesProvider'
import ThemeProvider from './ThemeProvider'
import ToastProvider from './ToastProvider'
import UserProvider from './UserProvider'

interface Provider {
  children?: React.ReactNode
  contextProviders?: any
}

const ContextProviderComposer = ({ contextProviders, children }: Provider) => {
  return contextProviders.reduceRight((children: any, parent: any) => React.cloneElement(parent, { children }), children)
}

const ContextProviders = ({ children }: Provider) => {
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
