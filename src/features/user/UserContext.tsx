import { createContext } from 'react'

import type {
  CollectionReference,
  DocumentData,
  LanguageType,
  PreferencesType,
  UserType,
} from '@types'

export interface UserContextType {
  usersCollection: CollectionReference<DocumentData>

  setUid: (uid: string) => void

  user: UserType
  setUser: (user: UserType) => void
  isLogged: boolean

  language: LanguageType
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>

  preferences: PreferencesType
  setPreferences: React.Dispatch<React.SetStateAction<PreferencesType>>

  updateUser: (updatedUser: Partial<UserType>) => void
}

const UserContext = createContext<UserContextType | null>(null)
UserContext.displayName = 'UserContext'

export default UserContext
