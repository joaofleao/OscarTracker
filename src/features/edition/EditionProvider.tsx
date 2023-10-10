import React from 'react'
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'

import EditionContext, { type EditionContextType } from './EditionContext'
import { useUser } from '@features/user'
import { db } from '@services/firebase'
import type { BasicMovieType, EditionType, Nomination, PersonType } from '@types'
import { printFetch } from '@utils/functions'

const editionsCollection = collection(db, 'editions')

const EditionProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [movies, setMovies] = React.useState<EditionContextType['movies']>({})
  const [totalMovies, setTotalMovies] = React.useState<EditionContextType['totalMovies']>(0)
  const [people, setPeople] = React.useState<EditionContextType['people']>({})
  const [nominations, setNominations] = React.useState<EditionContextType['nominations']>({})

  const [categories, setCategories] = React.useState<EditionType['categories']>([])
  const [winners, setWinners] = React.useState<EditionType['winners']>({})

  const [editionId, setEditionId] = React.useState<string>('95')
  const [year, setYear] = React.useState<number>(0)

  const editionRef = doc(editionsCollection, editionId)
  const user = useUser()

  React.useEffect(() => {
    if (user.isLogged) {
      const unsubscribeEdition = onSnapshot(editionRef, (snap) => {
        const response = snap.data() as EditionType
        if (response) {
          printFetch('Firebase', 'Edition fetched', 'red')

          setYear(response.year)
          setWinners(response.winners)
          setCategories(response.categories)
        }
      })

      return () => {
        unsubscribeEdition()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isLogged])

  const getMovies = async (): Promise<void> => {
    printFetch('Firebase', 'Movies fetched', 'yellow')

    const moviesCollection = collection(editionRef, 'movies')
    const orderedMovies = query(moviesCollection, orderBy('en-US.name'))

    const response = await getDocs(orderedMovies)
    const map: typeof movies = {}

    response.forEach((item) => {
      map[item.id] = item.data() as BasicMovieType
    })

    setTotalMovies(response.size)
    setMovies(map)
  }

  const getPeople = async (): Promise<void> => {
    printFetch('Firebase', 'People fetched', 'yellow')

    const peopleCollection = collection(editionRef, 'people')
    const orderedPeople = query(peopleCollection, orderBy('name'))

    const response = await getDocs(orderedPeople)
    const map: typeof people = {}

    response.forEach((item) => {
      map[item.id] = item.data() as PersonType
    })

    setPeople(map)
  }

  const getNominations = async (): Promise<void> => {
    printFetch('Firebase', 'Nominations fetched', 'yellow')

    const nominationsCollection = collection(editionRef, 'nominations')

    const response = await getDocs(nominationsCollection)
    const map: typeof nominations = {}

    response.forEach((item) => {
      const data = { ...item.data(), id: item.id } as Nomination
      const oldValues = map[data.category] ?? []

      map[data.category] = [...oldValues, data]
    })

    setNominations(map)
  }

  const markCategoryWinner = async (nominationId: string, categoryId: string): Promise<void> => {
    const currentWinners = winners ?? {}

    currentWinners[categoryId] = nominationId

    updateDoc(editionRef, { winners: currentWinners })

    printFetch('Firebase', 'Winner Marked', 'yellow')
  }

  const getMovieNominations = async (movie: string): Promise<Nomination[]> => {
    printFetch('Firebase', 'Movie Nominations fetched', 'yellow')

    const nominationsCollection = collection(editionRef, 'nominations')
    const movieNominations = query(nominationsCollection, where('movie', '==', movie))

    const response = await getDocs(movieNominations)

    const array: Nomination[] = []

    response.forEach((item) => {
      const nomination = { ...item.data(), id: item.id } as Nomination
      array.push(nomination)
    })

    return array
  }

  const value: EditionContextType = {
    //edition data
    winners,
    categories,
    year,

    editionId,
    setEditionId,
    totalMovies,

    //edition collections
    movies,
    people,
    nominations,

    getMovies,
    getPeople,
    getNominations,
    getMovieNominations,

    markCategoryWinner,
  }

  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>
}

export default EditionProvider
