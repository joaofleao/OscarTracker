import { useState } from 'react'
import { Provider } from '../types'
import { UserContext } from '../contexts'
import { UserContextType } from '../types/ContextTypes'

const UserProvider: React.FC<Provider> = ({ children }) => {
  const [posterSpoiler, setPosterSpoiler] = useState<boolean>(false)
  const [castSpoiler, setCastSpoiler] = useState<boolean>(false)
  const [ratingsSpoiler, setRatingsSpoiler] = useState<boolean>(false)
  const [plotSpoiler, setPlotSpoiler] = useState<boolean>(false)

  const [watchedMovies, setWatchedMovies] = useState<string[]>([])

  const value = {
    posterSpoiler,
    setPosterSpoiler,
    castSpoiler,
    setCastSpoiler,
    ratingsSpoiler,
    setRatingsSpoiler,
    plotSpoiler,
    setPlotSpoiler,
    watchedMovies,
    setWatchedMovies,
  } satisfies UserContextType

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
