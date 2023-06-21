import React, { useMemo, useState } from 'react'
import { arrayRemove, arrayUnion, collection, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore'

import { useUser } from '../../features'
import { db } from '../../services'
import { categoriesJson } from '../../utils'
import DataContext, { type DataContextType } from './DataContext'

const editions = collection(db, 'editions')
const users = collection(db, 'users')
const annoucements = collection(db, 'annoucements')

const DataProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [currentEdition] = useState<string>('95')

  const [news, setNews] = useState<any>(null)

  const [currentMovies, setCurrentMovies] = useState<any>(null)
  const [currentMoviesMap, setCurrentMoviesMap] = useState<any>(null)

  const [currentPeople, setCurrentPeople] = useState<any>(null)
  const [currentPeopleMap, setCurrentPeopleMap] = useState<any>(null)
  const [currentCategoriesMap, setCurrentCategoriesMap] = useState<any>(null)

  const [currentNominations] = useState<any>()
  const [currentNominationsByCategory, setCurrentNominationsByCategory] = useState<any>()

  const editionRef = doc(editions, currentEdition)

  const categoriesOrder = [19, 2, 0, 3, 1, 9, 4, 17, 18, 20, 21, 22, 7, 8, 12, 15, 16, 5, 6, 10, 11, 13, 14]

  const { isLogged, uid } = useUser()

  useMemo(() => {
    const fetchFirebaseData = async (): Promise<void> => {
      void getCategories()
      void getEditionMovies()
      void getEditionNominations()
      void getEditionPeople()
      void getAnnoucements()
    }
    if (isLogged) void fetchFirebaseData()
  }, [isLogged])

  async function getCategories(): Promise<void> {
    const categoriesMap = new Map()
    categoriesJson.forEach((doc) => categoriesMap.set(doc.id, doc['en-US']))
    setCurrentCategoriesMap(categoriesMap)
  }

  async function getEditionMovies(): Promise<void> {
    console.log('edition movies fetched')
    const movies = collection(editionRef, 'movies')
    const orderedMovies = query(movies, orderBy('en-US.name'))

    const response = await getDocs(orderedMovies)

    const map: any = new Map()
    const array: any = []
    response.forEach((doc) => {
      map.set(doc.id, doc.data())
      array.push(doc.data())
    })

    setCurrentMovies(array)
    setCurrentMoviesMap(map)
  }

  async function getEditionPeople(): Promise<void> {
    console.log('edition people fetched')
    const people = collection(editionRef, 'people')
    const orderedPeople = query(people, orderBy('name'))
    const response = await getDocs(orderedPeople)
    const map: any = new Map()
    const array: any = []
    response.forEach((doc) => {
      map.set(doc.id, doc.data())
      array.push(doc.data())
    })
    setCurrentPeople(array)
    setCurrentPeopleMap(map)
  }
  async function getAnnoucements(): Promise<void> {
    console.log('annoucements fetched')
    const orderedAnnoucements = query(annoucements, orderBy('date'))
    const response = await getDocs(orderedAnnoucements)
    const array: any = []
    response.forEach((doc) => array.push(doc.data()))
    setNews(array)
  }

  async function getEditionNominations(): Promise<void> {
    console.log('edition nominations fetched')
    const nominations = collection(editionRef, 'nominations')

    const response = await getDocs(nominations)

    const map: any = new Map()
    response.forEach((doc) => {
      const data = doc.data()
      const oldValues = map.get(data.category) ?? []
      map.set(data.category, [data, ...oldValues])
    })

    const array = Array.from(map, (item: any) => {
      return { key: item[0], value: item[1] }
    })

    const ordered = array.sort((a, b) => categoriesOrder.indexOf(Number(a.key)) - categoriesOrder.indexOf(Number(b.key)))

    setCurrentNominationsByCategory(ordered)
  }

  async function getMovieNominations(movie: string): Promise<any> {
    console.log('movie nominations fetched')
    const nominations = collection(editionRef, 'nominations')
    const movieNominations = query(nominations, where('movie', '==', movie))

    const response = await getDocs(movieNominations)

    const array: any = []
    response.forEach((doc) => {
      array.push(doc.data())
    })

    return array
  }

  async function setMovieUnwatched(movie: string): Promise<void> {
    const userRef = doc(users, uid)

    void updateDoc(userRef, {
      movies: arrayRemove(movie),
    })
  }

  async function updateUser(email?: string, displayName?: string, nickName?: string, preferences?: { poster: boolean; plot: boolean; cast: boolean; ratings: boolean }, onboarding?: boolean): Promise<void> {
    const userRef = doc(users, uid)

    void updateDoc(userRef, {
      ...(email != null && { email }),
      ...(displayName != null && { displayName }),
      ...(nickName != null && { nickName }),
      ...(preferences != null && { preferences }),
      ...(onboarding != null && { onboarding }),
    })
  }

  async function setMovieWatched(movie: string): Promise<void> {
    const userRef = doc(users, uid)

    void updateDoc(userRef, {
      movies: arrayUnion(movie),
    })
  }

  const value = {
    currentNominations,
    currentNominationsByCategory,
    currentCategoriesMap,
    currentPeopleMap,
    news,
    currentPeople,
    currentMovies,
    currentMoviesMap,
    getMovieNominations,
    setMovieUnwatched,
    setMovieWatched,
    updateUser,
  } satisfies DataContextType

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataProvider
