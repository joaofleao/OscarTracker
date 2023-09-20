import React from 'react'
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'

import UserContext, { type UserContextType } from './UserContext'
import { db } from '@services/firebase'
import type { Announcement, PreferencesType } from '@types'

const UserProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const usersCollection = collection(db, 'users')
  const announcementsCollection = collection(db, 'announcements')
  const [isLogged, setIsLogged] = React.useState<boolean>(false)

  const [email, setEmail] = React.useState<string>('')
  const [displayName, setDisplayName] = React.useState<string>('')
  const [emailVerified, setEmailVerified] = React.useState<boolean>(false)
  const [onboarding, setOnboarding] = React.useState<boolean>(true)
  const [announcements, setAnnouncements] = React.useState<Announcement[]>([])
  const [nickName, setNickName] = React.useState<string>('')
  const [watchedMovies, setWatchedMovies] = React.useState<string[]>([])
  const [uid, setUid] = React.useState<string>('')
  const [preferences, setPreferences] = React.useState<PreferencesType>({
    poster: false,
    cast: false,
    plot: false,
    ratings: false,
  })

  React.useEffect(() => {
    if (isLogged) {
      const userRef = doc(usersCollection, uid)
      const unsubscribe = onSnapshot(userRef, (snap) => {
        const response = snap.data()
        if (response !== undefined) {
          setDisplayName(response.displayName)
          setEmail(response.email)
          setEmailVerified(response.emailVerified)
          setNickName(response.nickName)
          setPreferences(response.preferences)
          setUid(response.uid)
          setWatchedMovies(response.movies)
          setOnboarding(response.onboarding)
        }
      })
      return () => {
        unsubscribe()
        getAnnouncements()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged])

  React.useEffect(() => {
    getAnnouncements()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getAnnouncements(): Promise<void> {
    console.log(`\x1b[33mFirebase \x1b[0m- \x1b[32mAnnouncements fetched`)

    const orderedAnnouncements = query(announcementsCollection, orderBy('date'))
    const response = await getDocs(orderedAnnouncements)
    const array = []
    response.forEach((item) => {
      return array.push(item.data())
    })
    setAnnouncements(array)
  }

  async function updateUser(
    _email?: string,
    _displayName?: string,
    _nickName?: string,
    _preferences?: PreferencesType,
    _onboarding?: boolean,
  ): Promise<void> {
    const userRef = doc(usersCollection, uid)

    const values = {
      ...(_email != null && { email: _email }),
      ...(_displayName != null && { displayName: _displayName }),
      ...(_nickName != null && { nickName: _nickName }),
      ...(_preferences != null && { preferences: _preferences }),
      ...(_onboarding != null && { onboarding: _onboarding }),
    }

    updateDoc(userRef, values)
  }

  async function setMovieUnwatched(movie: string): Promise<void> {
    const userRef = doc(usersCollection, uid)

    updateDoc(userRef, {
      movies: arrayRemove(movie),
    })
  }

  async function setMovieWatched(movie: string): Promise<void> {
    const userRef = doc(usersCollection, uid)

    updateDoc(userRef, {
      movies: arrayUnion(movie),
    })
  }

  const value = {
    preferences,
    email,
    displayName,
    emailVerified,
    nickName,
    watchedMovies,
    onboarding,
    uid,
    setUid,
    isLogged,
    setIsLogged,

    announcements,

    updateUser,
    setMovieUnwatched,
    setMovieWatched,
  } satisfies UserContextType

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
