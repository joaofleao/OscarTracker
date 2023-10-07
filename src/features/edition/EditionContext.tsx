import { createContext } from 'react'

import type { BasicMovieType, Category, Nomination, PersonType } from '@types'

export interface EditionContextType {
  edition: string
  setEdition: (edition: string) => void
  totalMovies: number

  categories: Record<string, Category>
  movies: Record<string, BasicMovieType>
  people: Record<string, PersonType>
  nominations: Record<string, Nomination[]>
  getMovieNominations: (movie: string) => Promise<Nomination[]>

  getCategories: () => Promise<void>
  getMovies: () => Promise<void>
  getPeople: () => Promise<void>
  getNominations: () => Promise<void>

  markCategoryWinner: (nominationId: string, categoryId: string) => Promise<void>
}

const EditionContext = createContext<EditionContextType | null>(null)
EditionContext.displayName = 'EditionContext'

export default EditionContext
