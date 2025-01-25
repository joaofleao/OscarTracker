import React from 'react'
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore'

import EditionContext, { type EditionContextType } from './EditionContext'
import { useUser } from '@features/user'
import useAsyncStorage from '@hooks/useAsyncStorage'
import { db } from '@services/firebase'
import type { BasicMovieType, EditionType, Nomination, PersonType } from '@types'
import { print } from '@utils/functions'

const editionsCollection = collection(db, 'editions')

const EditionProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const { language } = useUser()
  const [movies, setMovies] = React.useState<EditionContextType['movies']>({})

  const [people, setPeople] = React.useState<EditionContextType['people']>({})
  const [nominations, setNominations] = React.useState<EditionContextType['nominations']>({})

  const [categories, setCategories] = React.useState<EditionType['categories']>([])
  const [winners, setWinners] = React.useState<EditionType['winners']>({})

  const [editionId, setEditionId] = React.useState<string>('97')
  const [year, setYear] = React.useState<number>(0)

  const [date, setDate] = React.useState<Timestamp>(Timestamp.now())

  const async = useAsyncStorage()

  const editionRef = doc(editionsCollection, editionId)

  React.useEffect(
    () => {
      const unsubscribeEdition = onSnapshot(editionRef, (snap) => {
        const response = snap.data() as EditionType
        if (response) {
          print('Firebase', 'Edition updated', 'green')

          setDate(response.date)
          setYear(response.year)
          setWinners(response.winners)
          setCategories(response.categories)
        }
      })

      return () => {
        unsubscribeEdition()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(() => {
    getPeople()
    getMovies()
    getNominations()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMovies = async (): Promise<void> => {
    print('Firebase', 'Movies fetched', 'yellow')

    const moviesCollection = collection(editionRef, 'movies')
    const orderedMovies = query(moviesCollection, orderBy(`name.${language}`))

    const response = await getDocs(orderedMovies)
    const map: typeof movies = {}

    response.forEach((item) => {
      map[item.id] = item.data() as BasicMovieType
    })

    setMovies(map)
    await async.storeObject('movies', map)
  }

  const getMovies = async (): Promise<void> => {
    const storedMovies = await async.readObject('movies')
    if (storedMovies) {
      print('Async-Storage', 'Movies fetched', 'blue')
      setMovies(storedMovies as EditionContextType['movies'])
    } else fetchMovies()
  }

  const fetchPeople = async (): Promise<void> => {
    print('Firebase', 'People fetched', 'yellow')

    const peopleCollection = collection(editionRef, 'people')
    const orderedPeople = query(peopleCollection, orderBy('name'))

    const response = await getDocs(orderedPeople)
    const map: typeof people = {}

    response.forEach((item) => {
      map[item.id] = item.data() as PersonType
    })

    setPeople(map)
    await async.storeObject('people', map)
  }

  const getPeople = async (): Promise<void> => {
    const storedPeople = await async.readObject('people')

    if (storedPeople) {
      print('Async-Storage', 'People fetched', 'blue')
      setPeople(storedPeople as EditionContextType['people'])
    } else fetchPeople()
  }

  const fetchNominations = async (): Promise<void> => {
    print('Firebase', 'Nominations fetched', 'yellow')

    const nominationsCollection = collection(editionRef, 'nominations')

    const response = await getDocs(nominationsCollection)
    const map: typeof nominations = {}

    response.forEach((item) => {
      const data = { ...item.data(), id: item.id } as Nomination
      const oldValues = map[data.category] ?? []

      map[data.category] = [...oldValues, data]
    })

    setNominations(map)
    await async.storeObject('nominations', map)
  }

  const getNominations = async (): Promise<void> => {
    const storedNominations = await async.readObject('nominations')

    if (storedNominations) {
      print('Async-Storage', 'Nominations fetched', 'blue')

      setNominations(storedNominations as EditionContextType['nominations'])
    } else fetchNominations()
  }

  const markCategoryWinner = async (nominationId: string, categoryId: string): Promise<void> => {
    const currentWinners = winners ?? {}

    currentWinners[categoryId] = nominationId

    updateDoc(editionRef, { winners: currentWinners })

    print('Firebase', 'Winner Marked', 'yellow')
  }

  const getMovieNominations = async (movie: string): Promise<Nomination[]> => {
    print('Firebase', 'Movie Nominations fetched', 'yellow')

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

  const changeEdition: EditionContextType['setEditionId'] = async (id) => {
    setEditionId(id)
    await async.storeString('editionId', id)
  }

  const refreshEdition: EditionContextType['refreshEdition'] = async () => {
    fetchMovies()
    fetchPeople()
    fetchNominations()
  }
  const value: EditionContextType = {
    //edition data
    winners,
    categories,
    year,
    date,

    editionId,
    setEditionId: changeEdition,

    //edition collections
    movies,
    people,
    nominations,

    refreshEdition,

    getMovieNominations,

    markCategoryWinner,
  }

  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>
}

export default EditionProvider
