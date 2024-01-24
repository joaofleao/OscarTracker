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

  place: (type: 'wish' | 'bet') => void
  isFirstBet: boolean
  isSecondBet: boolean
  isWish: boolean
}

const PersonCard = (props: PersonCardProps): JSX.Element => {
  const { actorId, character, movieId, winner, place, isFirstBet, isSecondBet, isWish, ...rest } =
    props

  const { movies: watchedMovies, preferences } = useUser()
  const { movies, people } = useEdition()

  const movie = movies[movieId]['en-US']
  const person = people[actorId]

  const placeBet = (): void => {
    place('bet')
  }

  const placeWish = (): void => {
    place('wish')
  }

  return (
    <Styled.Container {...rest}>
      <Poster
        winner={winner}
        image={getImage(person.image)}
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
              width={20}
              height={20}
            />
          )}
          {person.name}
        </Styled.Title>

        {character && <Styled.Information numberOfLines={2}>as {character}</Styled.Information>}
        <Styled.Movie numberOfLines={2}>{movie.name}</Styled.Movie>
        <Styled.Bets>
          <Styled.Toggle
            selected={isWish}
            label="wish"
            onToggle={placeWish}
            icon={<Icon.FingersCrossed />}
          />
          <Styled.Toggle
            selected={isFirstBet || isSecondBet}
            onToggle={placeBet}
            label={isFirstBet ? 'bet 1' : isSecondBet ? 'bet 2' : 'bet'}
            icon={<Icon.Oscar />}
          />
        </Styled.Bets>
      </Styled.Content>
    </Styled.Container>
  )
}

export default PersonCard
