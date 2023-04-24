import { useData, useUser } from '../hooks'
import { type BasicMovieType } from '../types'

interface PersonalDataType {
  isWatched: (imdb: string) => boolean
  totalMovies: () => number
  totalWatchedMovies: () => number
  watchedMoviesInCategory: (categoryMovies: BasicMovieType[]) => number
  uniqueMovies: (categoryMovies: BasicMovieType[]) => number
}

const usePersonalData = (): PersonalDataType => {
  const { currentMovies } = useData()
  const { watchedMovies } = useUser()

  const totalMovies = (): number => {
    if (currentMovies != null) return currentMovies.length
    return 0
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
