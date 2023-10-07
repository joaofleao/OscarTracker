import { type PressableProps } from 'react-native'

import * as Styled from './styles'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'

export interface PersonCardProps extends PressableProps {
  actorId: string
  movieId: string
  character: string
  winner: boolean
  categoryId: string
  key: string
}

const PersonCard = (props: PersonCardProps): JSX.Element => {
  const { actorId, categoryId, character, movieId, winner, key, ...rest } = props

  const { movies: watchedMovies, preferences } = useUser()
  const { movies, people } = useEdition()

  const movie = movies[movieId]['en-US']
  const person = people[actorId]

  return (
    <Styled.Container
      key={key}
      {...rest}
    >
      <Poster
        image={getImage(person.image)}
        isWatched={watchedMovies.includes(movieId)}
        spoiler={preferences.poster}
      />
      <Styled.Content>
        <Styled.Title numberOfLines={3}>{person.name}</Styled.Title>
        <Styled.Character numberOfLines={2}>as {character}</Styled.Character>
        <Styled.Movie numberOfLines={2}>{movie.name}</Styled.Movie>
      </Styled.Content>
    </Styled.Container>
  )
}

export default PersonCard
