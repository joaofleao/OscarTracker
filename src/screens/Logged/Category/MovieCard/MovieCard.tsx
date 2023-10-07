import { type PressableProps } from 'react-native'

import * as Styled from './styles'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'

export interface MovieCardProps extends PressableProps {
  categoryId: string
  information: string
  movieId: string
  winner: boolean
  nominationId: string
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { categoryId, information, movieId, winner, nominationId, ...rest } = props

  const { movies: watchedMovies, preferences } = useUser()
  const { movies } = useEdition()

  const movie = movies[movieId]['en-US']

  return (
    <Styled.Container {...rest}>
      <Poster
        image={getImage(movie.image)}
        isWatched={watchedMovies.includes(movieId)}
        spoiler={preferences.poster}
      />
      <Styled.Content>
        <Styled.Title numberOfLines={3}>{movie.name}</Styled.Title>
        <Styled.Information numberOfLines={2}>{information}</Styled.Information>
      </Styled.Content>
    </Styled.Container>
  )
}

export default MovieCard
