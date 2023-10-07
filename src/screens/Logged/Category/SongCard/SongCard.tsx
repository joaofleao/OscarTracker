import { type PressableProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/Icon'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'

export interface SongCardProps extends PressableProps {
  information: string
  movieId: string
  song: string
  winner: boolean
}

const SongCard = (props: SongCardProps): JSX.Element => {
  const { information, movieId, song, winner, ...rest } = props

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
        <Styled.Row>
          {winner && (
            <Icon.Oscar
              filled
              width={20}
              height={20}
            />
          )}

          <Styled.Title
            winner={winner}
            numberOfLines={3}
          >
            {song}
          </Styled.Title>
        </Styled.Row>
        <Styled.Information numberOfLines={2}>{information}</Styled.Information>
        <Styled.Movie numberOfLines={2}>{movie.name}</Styled.Movie>
      </Styled.Content>
    </Styled.Container>
  )
}

export default SongCard
