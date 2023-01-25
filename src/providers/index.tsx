import React from 'react'
import AuthProvider from './AuthProvider'
import DataProvider from './DataProvider'
import ThemeProvider from './ThemeProvider'

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
        <ThemeProvider key={'theme_provider'} />,
        <AuthProvider key={'auth_provider'} />,
        <DataProvider key={'data_provider'} />,
      ]}>
      {children}
    </ContextProviderComposer>
  )
}

export default ContextProviders
export { DataProvider }
