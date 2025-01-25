import React, { useEffect } from 'react'
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore'

import UserContext, { type UserContextType } from './UserContext'
import usePersistedState from '@hooks/usePersistentState'
import { db } from '@services/firebase'
import type { LanguageType, PreferencesType, UserType } from '@types'
import { print } from '@utils/functions'

const UserProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [user, setUser] = React.useState<UserType | null>(null)
  const [uid, setUid] = React.useState<string | null>(null)

  const [language, setLanguage] = usePersistedState<LanguageType>('language', 'pt-BR')

  const [preferences, setPreferences] = usePersistedState<PreferencesType>('preferences', {
    poster: false,
    cast: false,
    plot: false,
    ratings: false,
  })

  const usersCollection = collection(db, 'users')

  const isAuth = Boolean(uid)
  const isLogged = Boolean(user)

  //subscribes to firestore changes
  useEffect(() => {
    if (isAuth) {
      const userRef = doc(usersCollection, uid)

      const unsubscribeUser = onSnapshot(userRef, (snap) => {
        const response = snap.data()

        if (response !== undefined) {
          print('Firebase', 'User updated', 'green')
          setUser(response as UserType)
        }
      })
      return unsubscribeUser
    } else setUser(null)
  }, [isAuth])

  const updateUser: UserContextType['updateUser'] = (updatedUser) => {
    if (!isLogged) return
    const userRef = doc(usersCollection, user.uid)
    const values = {
      ...(updatedUser.email != null && { email: updatedUser.email }),
      ...(updatedUser.displayName != null && { displayName: updatedUser.displayName }),
      ...(updatedUser.nickname != null && { nickname: updatedUser.nickname }),
      ...(updatedUser.settings != null && { settings: updatedUser.settings }),
      ...(updatedUser.onboarding != null && { onboarding: updatedUser.onboarding }),
    }
    updateDoc(userRef, values)
  }

  const value: UserContextType = {
    usersCollection,
    user,
    setUser,
    isLogged,
    setUid,
    updateUser,

    language,
    setLanguage,
    preferences,
    setPreferences,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
