import React, { useEffect, useState } from "react"
import { type BasicMovieType } from "../types"
import { useAuth, useData, useUser } from "../hooks"

function usePersonalData() {
  const { currentMovies } = useData()
  const { watchedMovies } = useUser()

  const totalMovies = (): number => {
    if (currentMovies) return currentMovies.length
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
