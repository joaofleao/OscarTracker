import React from 'react'
import Routes from './src/routes'
import ContextProviders from './src/providers'

export default function App() {
  return (
    <ContextProviders>
      <Routes />
    </ContextProviders>
  )
}
