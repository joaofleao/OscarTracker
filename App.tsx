import React from 'react'
import { SplashScreen } from './src/screens'
import Routes from './src/routes'

export default function App() {
  return (
    <SplashScreen isAppReady={true}>
      <Routes />
    </SplashScreen>
  )
}
