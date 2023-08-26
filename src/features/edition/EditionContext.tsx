import { createContext } from 'react'

import type { BasicMovieType, Category, Nomination, PersonType } from '../../types'

export interface EditionContextType {
  edition: string
  setEdition: (edition: string) => void
  totalMovies: number

  categories: Record<string, Category>
  movies: Record<string, BasicMovieType>
  people: Record<string, PersonType>
  nominations: Record<string, Nomination[]>
  getNominations: (movie: string) => Promise<Nomination[]>
}

const EditionContext = createContext<EditionContextType | null>(null)
EditionContext.displayName = 'EditionContext'

export default EditionContext
