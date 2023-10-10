import { type PressableProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/Icon'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'

export interface MovieCardProps extends PressableProps {
  information: string
  movieId: string
  winner: boolean
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { information, movieId, winner, ...rest } = props
  const { movies: watchedMovies, preferences } = useUser()
  const { movies } = useEdition()

  const movie = movies[movieId]['en-US']

  return (
    <Styled.Container {...rest}>
      <Poster
        winner={winner}
        image={getImage(movie.image)}
        isWatched={watchedMovies.includes(movieId)}
        spoiler={preferences.poster}
      />

      <Styled.Content>
        <Styled.Title
          winner={winner}
          numberOfLines={3}
        >
          {winner && (
            <Icon.Oscar
              filled
              width={18}
              height={18}
            />
          )}
          {movie.name}
        </Styled.Title>

        <Styled.Information numberOfLines={2}>{information}</Styled.Information>
      </Styled.Content>
    </Styled.Container>
  )
}

export default MovieCard