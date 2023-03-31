import { useMemo, useState } from 'react'
import { arrayRemove, arrayUnion, collection, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore'

import { DataContext } from '../contexts'
import { useAuth, useUser } from '../hooks'
import { db } from '../services'
import { type DataContextType, type Provider } from '../types'
import categoriesJson from '../utils/dictionary/categories.json'

const editions = collection(db, 'editions')
const users = collection(db, 'users')

const DataProvider: React.FC<Provider> = ({ children }) => {
  const [currentEdition, setCurrentEdition] = useState<string>('95')

  const [currentMovies, setCurrentMovies] = useState<any>(null)
  const [currentMoviesMap, setCurrentMoviesMap] = useState<any>(null)

  const [currentPeople, setCurrentPeople] = useState<any>(null)
  const [currentPeopleMap, setCurrentPeopleMap] = useState<any>(null)
  const [currentCategoriesMap, setCurrentCategoriesMap] = useState<any>(null)

  const [currentNominations] = useState<any>()
  const [currentNominationsByCategory, setCurrentNominationsByCategory] = useState<any>()
  const editionRef = doc(editions, currentEdition)

  const categoriesOrder = [19, 2, 0, 3, 1, 9, 4, 17, 18, 20, 21, 22, 7, 8, 12, 15, 16, 5, 6, 10, 11, 13, 14]

  const { uid } = useUser()

  useMemo(() => {
    async function fetchData() {
      getCategories()
      await getEditionMovies()
      await getEditionNominations()
      await getEditionPeople()
    }
    if (uid) fetchData()
  }, [uid])

  async function getCategories() {
    const categoriesMap = new Map()
    categoriesJson.forEach((doc) => categoriesMap.set(doc.id, doc['en-US']))
    setCurrentCategoriesMap(categoriesMap)
  }

  async function getEditionMovies() {
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

  async function getEditionPeople() {
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

  async function getEditionNominations() {
    console.log('edition nominations fetched')
    const nominations = collection(editionRef, 'nominations')

    const response = await getDocs(nominations)

    const map: any = new Map()
    response.forEach((doc) => {
      const data = doc.data()
      const oldValues = map.get(data.category) || []
      map.set(data.category, [data, ...oldValues])
    })

    const array = Array.from(map, (item: any) => {
      return { key: item[0], value: item[1] }
    })

    const ordered = array.sort((a, b) => categoriesOrder.indexOf(Number(a.key)) - categoriesOrder.indexOf(Number(b.key)))

    setCurrentNominationsByCategory(ordered)
  }

  async function getMovieNominations(movie: string) {
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

  async function setMovieUnwatched(movie: string) {
    const userRef = doc(users, uid)

    updateDoc(userRef, {
      movies: arrayRemove(movie),
    })
  }

  async function updateUser(email?: string, displayName?: string, nickName?: string, preferences?: { poster: boolean; plot: boolean; cast: boolean; ratings: boolean }, onboarding?: boolean) {
    const userRef = doc(users, uid)

    updateDoc(userRef, {
      ...(email && { email }),
      ...(displayName && { displayName }),
      ...(nickName && { nickName }),
      ...(preferences != null && { preferences }),
      ...(onboarding && { onboarding }),
    })
  }

  async function setMovieWatched(movie: string) {
    const userRef = doc(users, uid)

    updateDoc(userRef, {
      movies: arrayUnion(movie),
    })
  }

  const value = {
    currentNominations,
    currentNominationsByCategory,
    currentCategoriesMap,
    currentPeopleMap,
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
