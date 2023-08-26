import React from 'react'
import { Linking, ScrollView, Text, View } from 'react-native'
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

import packageJson from '../../../package.json'
import { Modal } from '../../components'
import { db } from '../../services'
import type { Announcement, PreferencesType } from '../../types'
import UserContext, { type UserContextType } from './UserContext'

const UserProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const usersCollection = collection(db, 'users')
  const annoucementsCollection = collection(db, 'annoucements')
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

  const [modal, setModal] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (announcements.length > 0 && announcements[0].version !== packageJson.version) setModal(true)
  }, [announcements])

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
        void getAnnoucements()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged])

  async function getAnnoucements(): Promise<void> {
    console.log(`\x1b[33mFirebase \x1b[0m- \x1b[32mAnnoucements fetched`)

    const orderedAnnoucements = query(annoucementsCollection, orderBy('date'))
    const response = await getDocs(orderedAnnoucements)
    const array: any = []
    response.forEach((doc) => {
      return array.push(doc.data())
    })
    setAnnouncements(array)
  }

  async function updateUser(
    email?: string,
    displayName?: string,
    nickName?: string,
    preferences?: PreferencesType,
    onboarding?: boolean,
  ): Promise<void> {
    const userRef = doc(usersCollection, uid)

    void updateDoc(userRef, {
      ...(email != null && { email }),
      ...(displayName != null && { displayName }),
      ...(nickName != null && { nickName }),
      ...(preferences != null && { preferences }),
      ...(onboarding != null && { onboarding }),
    })
  }

  async function setMovieUnwatched(movie: string): Promise<void> {
    const userRef = doc(usersCollection, uid)

    void updateDoc(userRef, {
      movies: arrayRemove(movie),
    })
  }

  async function setMovieWatched(movie: string): Promise<void> {
    const userRef = doc(usersCollection, uid)

    void updateDoc(userRef, {
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

  const newVersionModal = (): JSX.Element => {
    const update = announcements[0]
    return (
      <Modal
        title={update.title}
        description={update.description}
        visible={modal}
        confirmLabel={'Update to '.concat(update.version)}
        onConfirm={() => {
          void Linking.openURL(update.url)
        }}
      >
        <View style={{ flex: 1, maxHeight: 200 }}>
          <ScrollView
            indicatorStyle="white"
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {update.updates.map((update: string) => {
              return (
                <Text
                  key={update}
                  // className="font-primaryBold text-white text-base mb-2"
                >
                  {update}
                </Text>
              )
            })}
          </ScrollView>
        </View>
      </Modal>
    )
  }

  return (
    <UserContext.Provider value={value}>
      {modal && newVersionModal()}
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
