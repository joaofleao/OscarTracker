import React from 'react'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'

import EditionContext, { type EditionContextType } from './EditionContext'
import { db } from '@services/firebase'
import type { BasicMovieType, EditionType, Nomination, PersonType } from '@types'
import { printFetch } from '@utils/functions'

const editionsCollection = collection(db, 'editions')

const EditionProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [editionId, setEditionId] = React.useState<EditionContextType['editionId']>('95')
  const [edition, setEdition] = React.useState<EditionContextType['edition']>({} as EditionType)
  const [movies, setMovies] = React.useState<EditionContextType['movies']>({})
  const [totalMovies, setTotalMovies] = React.useState<EditionContextType['totalMovies']>(0)
  const [people, setPeople] = React.useState<EditionContextType['people']>({})
  const [nominations, setNominations] = React.useState<EditionContextType['nominations']>({})

  const editionRef = doc(editionsCollection, editionId)

  const getEdition = async (): Promise<void> => {
    printFetch('Firebase', 'Edition fetched', 'yellow')
    const value = await getDoc(editionRef)
    setEdition({ ...value.data(), editionId } as EditionType)
  }

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
    const nominationsCollection = collection(editionRef, 'nominations')

    const categoryNominations = query(nominationsCollection, where('category', '==', categoryId))
    const response = await getDocs(categoryNominations)

    response.forEach((item) => {
      const nominationRef = doc(nominationsCollection, item.id)
      updateDoc(nominationRef, {
        winner: item.id === nominationId,
      })
    })

    printFetch('Firebase', 'Winner Marked', 'yellow')
  }

  const getMovieNominations = async (movie: string): Promise<Nomination[]> => {
    printFetch('Firebase', 'Movie Nominations fetched', 'yellow')

    const nominationsCollection = collection(editionRef, 'nominations')
    const movieNominations = query(nominationsCollection, where('movie', '==', movie))

    const response = await getDocs(movieNominations)

    const array: Nomination[] = []

    response.forEach((item) => {
      const nomination = item.data() as Nomination
      array.push(nomination)
    })

    return array
  }

  const value: EditionContextType = {
    editionId,
    setEditionId,
    totalMovies,

    edition,
    movies,
    people,
    nominations,

    getMovies,
    getPeople,
    getNominations,
    getMovieNominations,
    getEdition,

    markCategoryWinner,
  }

  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>
}

export default EditionProvider
