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

  place: (type: 'wish' | 'bet') => void
  isFirstBet: boolean
  isSecondBet: boolean
  isWish: boolean
}

const SongCard = (props: SongCardProps): JSX.Element => {
  const { information, movieId, song, winner, place, isFirstBet, isSecondBet, isWish, ...rest } =
    props

  const { movies: watchedMovies, preferences } = useUser()
  const { movies } = useEdition()

  const movie = movies[movieId]['en-US']

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
              width={20}
              height={20}
            />
          )}
          {song}
        </Styled.Title>
        <Styled.Information numberOfLines={2}>{information}</Styled.Information>
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

export default SongCard
