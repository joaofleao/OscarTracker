import React, { useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'

import WatchedMoviesContext, { type WatchedMoviesContextType } from './WatchedMoviesContext'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { db } from '@services/firebase'
import { WatchedMovieType } from '@types'
import { print } from '@utils/functions'

const WatchedMoviesProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const { user, isLogged } = useUser()
  const edition = useEdition()

  const [watchedMovies, setWatchedMovies] = useState<WatchedMoviesContextType['watchedMovies']>({})

  const editionWatchedMovies = Object.entries(watchedMovies)
    .filter(([_, watchedMovie]) => {
      return Object.keys(edition.movies).includes(watchedMovie.movie)
    })
    .reduce(
      (acc, [key, watchedMovie]) => {
        acc[key] = watchedMovie
        return acc
      },
      {} as Record<string, WatchedMovieType>,
    )

  const usersCollection = collection(db, 'users')

  useEffect(() => {
    if (!isLogged) return

    const userRef = doc(db, 'users', user.uid)
    const watchedMoviesCollection = collection(userRef, 'watchedMovies')

    const q = query(watchedMoviesCollection, orderBy('date', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const map: Record<string, WatchedMovieType> = {}
      snapshot.forEach((doc) => {
        map[doc.id] = doc.data() as WatchedMovieType
      })
      setWatchedMovies(map)
    })

    return () => {
      return unsubscribe()
    }
  }, [isLogged, user])

  const setMovieUnwatched: WatchedMoviesContextType['setMovieUnwatched'] = async (movie) => {
    if (!isLogged) return

    try {
      const userRef = doc(usersCollection, user.uid)
      const watchedMoviesCollection = collection(userRef, 'watchedMovies')

      const q = query(
        watchedMoviesCollection,
        where('movie', '==', movie),
        orderBy('date', 'desc'),
        limit(1),
      )

      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        const docToDelete = querySnapshot.docs[0]
        await deleteDoc(doc(watchedMoviesCollection, docToDelete.id))
      }
    } catch (error) {
      print('Error removing watched movie: ', error, 'red')
    }
  }

  const setMovieWatched: WatchedMoviesContextType['setMovieWatched'] = (movie, date) => {
    if (!isLogged) return

    try {
      const userRef = doc(usersCollection, user.uid)
      const watchedMoviesCollection = collection(userRef, 'watchedMovies')

      const object = {
        movie,
        date,
      }
      addDoc(watchedMoviesCollection, object)
    } catch (error) {
      print('Error removing watched movie: ', error, 'red')
    }
  }

  const isMovieWatched: WatchedMoviesContextType['isMovieWatched'] = (movie) => {
    return Object.values(watchedMovies).some((record) => {
      return record.movie === movie
    })
  }

  const value: WatchedMoviesContextType = {
    watchedMovies,
    editionWatchedMovies,
    setMovieUnwatched,
    setMovieWatched,
    isMovieWatched,
  }

  return <WatchedMoviesContext.Provider value={value}>{children}</WatchedMoviesContext.Provider>
}

export default WatchedMoviesProvider
