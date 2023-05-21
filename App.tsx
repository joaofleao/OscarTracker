import React from 'react'

import ContextProviders from './src/providers'
import { Router } from './src/routes'

const App = (): JSX.Element => {
  return (
    <ContextProviders>
      <Router />
    </ContextProviders>
  )
}

export default App
