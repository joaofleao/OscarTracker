import { useEdition, useUser } from '../../features'
import type { BasicMovieType } from '../../types'

interface PersonalDataType {
  isWatched: (imdb: string) => boolean
  totalMovies: () => number
  totalWatchedMovies: () => number
  watchedMoviesInCategory: (categoryMovies: BasicMovieType[]) => number
  uniqueMovies: (categoryMovies: BasicMovieType[]) => number
}

const usePersonalData = (): PersonalDataType => {
  const edition = useEdition()
  const { watchedMovies } = useUser()

  const totalMovies = (): number => {
    return Object.values(edition.movies).length
  }
  const totalWatchedMovies = (): number => {
    return watchedMovies.length
  }

  function uniqueMovies(categoryMovies: BasicMovieType[]): number {
    const filtered = new Set(categoryMovies.map((item: any) => item.movie))
    return [...filtered].length
  }

  function watchedMoviesInCategory(categoryMovies: BasicMovieType[]): number {
    const filtered = categoryMovies.filter((item: any) => {
      return watchedMovies.includes(item.movie)
    })
    return filtered.length
  }
  function isWatched(imdb: string): boolean {
    return watchedMovies.includes(imdb)
  }

  return {
    isWatched,
    totalMovies,
    totalWatchedMovies,
    watchedMoviesInCategory,
    uniqueMovies,
  }
}

export default usePersonalData
