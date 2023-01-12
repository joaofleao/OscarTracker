import React from 'react'
import { SplashScreen } from './src/screens'
import Routes from './src/routes'
import { AuthProvider } from './src/providers'

export default function App() {
  return (
    <AuthProvider>
      <SplashScreen isAppReady={true}>
        <Routes />
      </SplashScreen>
    </AuthProvider>
  )
}
