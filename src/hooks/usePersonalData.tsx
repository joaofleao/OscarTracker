import { useState } from 'react'
import { BasicMovieType } from '../types'
import { useAuth, useData } from '../hooks'

function usePersonalData() {
  const { userData } = useAuth()
  const { currentMovies } = useData()
  const watched = userData?.movies

  const totalMovies = (): number => {
    if (currentMovies) return currentMovies.length
    return 0
  }
  const totalWatchedMovies = (): number => {
    if (userData) return watched.length
    return 0
  }

  function uniqueMovies(categoryMovies: BasicMovieType[]): number {
    const filtered = new Set(categoryMovies.map((item: any) => item.movie))
    return [...filtered].length
  }

  function watchedMoviesInCategory(categoryMovies: BasicMovieType[]): number {
    const filtered = categoryMovies.filter((item: any) => {
      return watched.includes(item.movie)
    })
    return filtered.length
  }
  function isWatched(movie: BasicMovieType): boolean {
    return watched.includes(movie)
    return false
  }

  return [isWatched, totalMovies, totalWatchedMovies, watchedMoviesInCategory, uniqueMovies] as const
}

export default usePersonalData
