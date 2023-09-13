import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Router } from './src/routes'
import { ThemeProvider } from '@features/theme'
import { LoadingProvider } from '@features/loading'
import { ToastProvider } from '@features/toast'
import { UserProvider } from '@features/user'
import { AuthProvider } from '@features/auth'
import { MoviesProvider } from '@features/movies'
import { EditionProvider } from '@features/edition'

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
