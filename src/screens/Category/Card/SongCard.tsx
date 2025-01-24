import { Pressable, type PressableProps, Text, View } from 'react-native'

import useStyles from './styles'
import Icon from '@components/Icon'
import Poster from '@components/Poster'
import TextToggle from '@components/TextToggle'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { useWatchedMovies } from '@features/watchedMovies'
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
  const { isMovieWatched } = useWatchedMovies()

  const { user } = useUser()
  const { movies } = useEdition()
  const styles = useStyles({ winner })

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
        image={getImage(movies[movieId].image['en-US'])}
        isWatched={isMovieWatched(movieId)}
        spoiler={user?.settings.preferences.poster}
      />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          {winner && (
            <Icon.Oscar
              filled
              width={20}
              height={20}
            />
          )}
          <Text
            style={styles.title}
            numberOfLines={3}
          >
            {song}
          </Text>
        </View>

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
          {movies[movieId].name['en-US']}
        </Text>
        {/* <View style={styles.bets}>
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
        </View> */}
      </View>
    </Pressable>
  )
}

export default SongCard
