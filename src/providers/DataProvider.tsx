import { DataContextType, Provider } from '../types'
import { useState, useMemo } from 'react'
import { DataContext } from '../contexts'
import { db } from '../services'
import categoriesJson from '../utils/dictionary/categories.json'
import { collection, getDocs, doc, query, orderBy, where, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { useAuth, useUser } from '../hooks'

const editions = collection(db, 'editions')
const people = collection(db, 'people')
const users = collection(db, 'users')

const DataProvider: React.FC<Provider> = ({ children }) => {
  const [currentEdition, setCurrentEdition] = useState<string>('95')

  const [currentMovies, setCurrentMovies] = useState<any>(null)
  const [currentMoviesMap, setCurrentMoviesMap] = useState<any>(null)

  const [currentCategoriesMap, setCurrentCategoriesMap] = useState<any>(null)

  const [currentNominations] = useState<any>()
  const [currentNominationsByCategory, setCurrentNominationsByCategory] = useState<any>()

  const { uid } = useUser()

  useMemo(() => {
    async function fetchData() {
      getCategories()
      await getEditionMovies()
      await getEditionNominations()
    }
    if (uid) fetchData()
  }, [uid])

  async function getCategories() {
    const categoriesMap = new Map()
    categoriesJson.forEach(doc => categoriesMap.set(doc.id, doc['en-US']))
    setCurrentCategoriesMap(categoriesMap)
  }

  async function getEditionMovies() {
    console.log('getEditionsMovies')
    const editionRef = doc(editions, currentEdition)
    const movies = collection(editionRef, 'movies')
    const orderedMovies = query(movies, orderBy('en-US.name'))

    const response = await getDocs(orderedMovies)

    const map: any = new Map()
    var array: any = []
    response.forEach(doc => {
      map.set(doc.id, doc.data())
      array.push(doc.data())
    })

    setCurrentMovies(array)
    setCurrentMoviesMap(map)
  }

  async function getEditionNominations() {
    console.log('getEditionsNominations')
    const editionRef = doc(editions, currentEdition)
    const nominations = collection(editionRef, 'nominations')

    const response = await getDocs(nominations)

    const map: any = new Map()
    response.forEach(doc => {
      const data = doc.data()
      const oldValues = map.get(data.category) || []
      map.set(data.category, [data, ...oldValues])
    })

    const array = Array.from(map, (item: any) => {
      return { key: item[0], value: item[1] }
    })

    setCurrentNominationsByCategory(array)
  }

  async function getMovieNominations(movie: string) {
    console.log('getMovieNominations')
    const editionRef = doc(editions, currentEdition)
    const nominations = collection(editionRef, 'nominations')
    const movieNominations = query(nominations, where('movie', '==', movie))

    const response = await getDocs(movieNominations)

    var array: any = []
    response.forEach(doc => {
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

  async function updateUser(
    email: string,
    displayName: string,
    nickName: string,
    preferences: { poster: boolean; plot: boolean; cast: boolean; ratings: boolean },
  ) {
    const userRef = doc(users, uid)

    updateDoc(userRef, {
      preferences,
      email,
      displayName,
      nickName,
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
