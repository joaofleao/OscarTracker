import { useState } from 'react'
import { PreferencesType, Provider, UserType } from '../types'
import { UserContext } from '../contexts'
import { UserContextType } from '../types/ContextTypes'

const UserProvider: React.FC<Provider> = ({ children }) => {
  const [email, setEmail] = useState<string>('')
  const [displayName, setDisplayName] = useState<string>('')
  const [emailVerified, setEmailVerified] = useState<boolean>(false)
  const [photoURL, setPhoneURL] = useState<string>('')
  const [watchedMovies, setWatchedMovies] = useState<string[]>([])
  const [uid, setUid] = useState<string>('')
  const [preferences, setPreferences] = useState<PreferencesType>({
    poster: false,
    cast: false,
    plot: false,
    ratings: false,
  })

  const value = {
    preferences,
    setPreferences,
    email,
    setEmail,
    displayName,
    setDisplayName,
    emailVerified,
    setEmailVerified,
    photoURL,
    setPhoneURL,
    watchedMovies,
    setWatchedMovies,
    uid,
    setUid,
  } satisfies UserContextType

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
