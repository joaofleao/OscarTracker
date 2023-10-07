import { type PressableProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/Icon'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'

export interface PersonCardProps extends PressableProps {
  actorId: string
  movieId: string
  character: string
  winner: boolean
}

const PersonCard = (props: PersonCardProps): JSX.Element => {
  const { actorId, character, movieId, winner, ...rest } = props

  const { movies: watchedMovies, preferences } = useUser()
  const { movies, people } = useEdition()

  const movie = movies[movieId]['en-US']
  const person = people[actorId]

  return (
    <Styled.Container {...rest}>
      <Poster
        winner={winner}
        image={getImage(person.image)}
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
            {person.name}
          </Styled.Title>
        </Styled.Row>
        <Styled.Character numberOfLines={2}>as {character}</Styled.Character>
        <Styled.Movie numberOfLines={2}>{movie.name}</Styled.Movie>
      </Styled.Content>
    </Styled.Container>
  )
}

export default PersonCard
