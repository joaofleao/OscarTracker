import { SafeAreaProvider } from 'react-native-safe-area-context'
import Router from '@routes/Router'

import { EditionProvider } from '@features/edition'
import { MoviesProvider } from '@features/movies'
import { ThemeProvider } from '@features/theme'
import { LoadingProvider } from '@features/loading'
import { ToastProvider } from '@features/toast'
import { UserProvider } from '@features/user'
import { AuthProvider } from '@features/auth'
import { AppProvider } from '@features/app'
import { AnnouncementsProvider } from '@features/announcements'

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <LoadingProvider>
            <ToastProvider>
              <AnnouncementsProvider>
                <UserProvider>
                  <AuthProvider>
                    <MoviesProvider>
                      <EditionProvider>
                        <Router />
                      </EditionProvider>
                    </MoviesProvider>
                  </AuthProvider>
                </UserProvider>
              </AnnouncementsProvider>
            </ToastProvider>
          </LoadingProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </AppProvider>
  )
}

export default App
