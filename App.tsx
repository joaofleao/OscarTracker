import React from 'react'
import { Router } from './src/routes'
import ContextProviders from './src/providers'

export default function App() {
  return (
    <ContextProviders>
      <Router />
    </ContextProviders>
  )
}
