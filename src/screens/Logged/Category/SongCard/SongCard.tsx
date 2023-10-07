import { type PressableProps } from 'react-native'

import * as Styled from './styles'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'

export interface SongCardProps extends PressableProps {
  categoryId: string
  information: string
  movieId: string
  song: string
  winner: boolean
  key: string
}

const SongCard = (props: SongCardProps): JSX.Element => {
  const { categoryId, information, movieId, song, winner, key, ...rest } = props

  const { movies: watchedMovies, preferences } = useUser()
  const { movies } = useEdition()

  const movie = movies[movieId]['en-US']

  return (
    <Styled.Container
      key={key}
      {...rest}
    >
      <Poster
        image={getImage(movie.image)}
        isWatched={watchedMovies.includes(movieId)}
        spoiler={preferences.poster}
      />
      <Styled.Content>
        <Styled.Title numberOfLines={3}>{song}</Styled.Title>
        <Styled.Character numberOfLines={2}>{information}</Styled.Character>
        <Styled.Movie numberOfLines={2}>{movie.name}</Styled.Movie>
      </Styled.Content>
    </Styled.Container>
  )
}

export default SongCard
