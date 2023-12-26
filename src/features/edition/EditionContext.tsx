import { createContext } from 'react'

import type { BasicMovieType, EditionType, Nomination, PersonType } from '@types'

export interface EditionContextType {
  //edition data
  winners: EditionType['winners']
  categories: EditionType['categories']
  year: EditionType['year']

  editionId: EditionType['editionId']
  setEditionId: (edition: EditionType['editionId']) => void
  totalMovies: number

  //edition collections
  movies: Record<string, BasicMovieType>
  people: Record<string, PersonType>
  nominations: Record<string, Nomination[]>

  getMovieNominations: (movie: string) => Promise<Nomination[]>
  getMovies: () => Promise<void>
  getPeople: () => Promise<void>
  getNominations: () => Promise<void>

  markCategoryWinner: (nominationId: string, categoryId: string) => Promise<void>
}

const EditionContext = createContext<EditionContextType | null>(null)
EditionContext.displayName = 'EditionContext'

export default EditionContext
