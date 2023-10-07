import React from 'react'
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore'

import EditionContext, { type EditionContextType } from './EditionContext'
import { db } from '@services/firebase'
import type { BasicMovieType, Category, Nomination, PersonType } from '@types'
import { printFetch } from '@utils/functions'

const editionsCollection = collection(db, 'editions')
const categoriesCollection = collection(db, 'categories')

const EditionProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [categories, setCategories] = React.useState<EditionContextType['categories']>({})
  const [edition, setEdition] = React.useState<EditionContextType['edition']>('95')
  const [movies, setMovies] = React.useState<EditionContextType['movies']>({})
  const [totalMovies, setTotalMovies] = React.useState<EditionContextType['totalMovies']>(0)
  const [people, setPeople] = React.useState<EditionContextType['people']>({})
  const [nominations, setNominations] = React.useState<EditionContextType['nominations']>({})

  const editionRef = doc(editionsCollection, edition)

  const getCategories = async (): Promise<void> => {
    printFetch('Firebase', 'Categories fetched', 'yellow')

    const response = await getDocs(categoriesCollection)
    const map: typeof categories = {}

    response.forEach((item) => {
      map[item.id] = item.data() as Category
    })

    const ordered = Object.entries(map)
      .sort((a, b) => {
        const order = a[1].order - b[1].order
        return order
      })
      .reduce((accumulator: typeof categories, current) => {
        accumulator[current[0]] = current[1]
        return accumulator
      }, {})

    setCategories(ordered)
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
    edition,
    setEdition,
    totalMovies,

    categories,
    movies,
    people,
    nominations,

    getCategories,
    getMovies,
    getPeople,
    getNominations,
    getMovieNominations,
  }

  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>
}

export default EditionProvider
