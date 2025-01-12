import { Pressable, type PressableProps, Text, View } from 'react-native'

import useStyles from './styles'
import Icon from '@components/Icon'
import Poster from '@components/Poster'
import TextToggle from '@components/TextToggle'
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
  const styles = useStyles({ winner })

  const movie = movies[movieId]['en-US']

  const placeBet = (): void => {
    place('bet')
  }

  const placeWish = (): void => {
    place('wish')
  }

  return (
    <Pressable
      style={styles.container}
      {...rest}
    >
      <Poster
        winner={winner}
        image={getImage(movie.image)}
        isWatched={watchedMovies.includes(movieId)}
        spoiler={preferences.poster}
      />
      <View style={styles.content}>
        <Text
          style={styles.title}
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
        </Text>

        <Text
          style={styles.information}
          numberOfLines={2}
        >
          {information}
        </Text>
        <Text
          style={styles.movie}
          numberOfLines={2}
        >
          {movie.name}
        </Text>
        <View style={styles.bets}>
          <TextToggle
            style={styles.toggle}
            selected={isWish}
            label="wish"
            onToggle={placeWish}
            icon={<Icon.FingersCrossed />}
          />
          <TextToggle
            style={styles.toggle}
            selected={isFirstBet || isSecondBet}
            onToggle={placeBet}
            label={isFirstBet ? 'bet 1' : isSecondBet ? 'bet 2' : 'bet'}
            icon={<Icon.Oscar />}
          />
        </View>
      </View>
    </Pressable>
  )
}

export default SongCard
