import React from 'react'
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore'

import { db } from '../../services'
import type { BasicMovieType, Category, DocumentData, Nomination, PersonType, QueryDocumentSnapshot } from '../../types'
import { functions } from '../../utils'
import { useUser } from '..'
import EditionContext, { type EditionContextType } from './EditionContext'

const editionsCollection = collection(db, 'editions')
const categoriesCollection = collection(db, 'categories')

const EditionProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [categories, setCategories] = React.useState<EditionContextType['categories']>({})
  const [edition, setEdition] = React.useState<EditionContextType['edition']>('95')
  const [movies, setMovies] = React.useState<EditionContextType['movies']>({})
  const [totalMovies, setTotalMovies] = React.useState<EditionContextType['totalMovies']>(0)
  const [people, setPeople] = React.useState<EditionContextType['people']>({})
  const [nominations, setNominations] = React.useState<EditionContextType['nominations']>({})
  const user = useUser()
  const editionRef = doc(editionsCollection, edition)

  React.useMemo(() => {
    const fetchFirebaseData = async (): Promise<void> => {
      void getCategories()
      void getMovies()
      void getPeople()
      void getNominations()
    }
    if (user.isLogged) void fetchFirebaseData()
  }, [user.isLogged, edition])

  async function getCategories(): Promise<void> {
    functions.printFetch('Firebase', 'Categories fetched', 'yellow')

    const response = await getDocs(categoriesCollection)
    const map: typeof categories = {}

    response.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      map[doc.id] = doc.data() as Category
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

  async function getMovies(): Promise<void> {
    functions.printFetch('Firebase', 'Movies fetched', 'yellow')

    const moviesCollection = collection(editionRef, 'movies')
    const orderedMovies = query(moviesCollection, orderBy('en-US.name'))

    const response = await getDocs(orderedMovies)
    const map: typeof movies = {}

    response.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      map[doc.id] = doc.data() as BasicMovieType
    })

    setTotalMovies(response.size)
    setMovies(map)
  }

  async function getPeople(): Promise<void> {
    functions.printFetch('Firebase', 'People fetched', 'yellow')

    const peopleCollection = collection(editionRef, 'people')
    const orderedPeople = query(peopleCollection, orderBy('name'))

    const response = await getDocs(orderedPeople)
    const map: typeof people = {}

    response.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      map[doc.id] = doc.data() as PersonType
    })

    setPeople(map)
  }

  async function getNominations(): Promise<void> {
    functions.printFetch('Firebase', 'Nominations fetched', 'yellow')

    const nominationsCollection = collection(editionRef, 'nominations')

    const response = await getDocs(nominationsCollection)
    const map: typeof nominations = {}

    response.forEach((doc) => {
      const data = doc.data() as Nomination
      const oldValues = map[data.category] ?? []

      map[data.category] = [...oldValues, data]
    })

    setNominations(map)
  }

  async function getMovieNominations(movie: string): Promise<Nomination[]> {
    functions.printFetch('Firebase', 'Movie Nominations fetched', 'yellow')

    const nominations = collection(editionRef, 'nominations')
    const movieNominations = query(nominations, where('movie', '==', movie))

    const response = await getDocs(movieNominations)

    const array: Nomination[] = []

    response.forEach((doc) => {
      const nomination = doc.data() as Nomination
      array.push(nomination)
    })

    return array
  }

  const value = {
    edition,
    setEdition,
    totalMovies,

    categories,
    movies,
    people,
    nominations,
    getNominations: getMovieNominations,
  } satisfies EditionContextType

  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>
}

export default EditionProvider