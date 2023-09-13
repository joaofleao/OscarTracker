import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Router } from './src/routes'
import {
  EditionProvider,
  MoviesProvider,
  ThemeProvider,
  LoadingProvider,
  ToastProvider,
  UserProvider,
  AuthProvider,
} from '@features'

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LoadingProvider>
          <ToastProvider>
            <UserProvider>
              <AuthProvider>
                <MoviesProvider>
                  <EditionProvider>
                    <Router />
                  </EditionProvider>
                </MoviesProvider>
              </AuthProvider>
            </UserProvider>
          </ToastProvider>
        </LoadingProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
