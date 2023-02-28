import React from 'react'
import AuthProvider from './AuthProvider'
import DataProvider from './DataProvider'
import ThemeProvider from './ThemeProvider'
import UserProvider from './UserProvider'
import ToastProvider from './ToastProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type Provider = {
  children?: React.ReactNode
  contextProviders?: any
}

const ContextProviderComposer = ({ contextProviders, children }: Provider) => {
  return contextProviders.reduceRight(
    (children: any, parent: any) => React.cloneElement(parent, { children }),
    children,
  )
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
        <DataProvider key={'data_provider'} />,
      ]}>
      {children}
    </ContextProviderComposer>
  )
}

export default ContextProviders
export { DataProvider }
