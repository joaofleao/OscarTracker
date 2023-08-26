import ContextProviders from './src/features'
import { Router } from './src/routes'

const App = (): JSX.Element => {
  return (
    <ContextProviders>
      <Router />
    </ContextProviders>
  )
}

export default App
