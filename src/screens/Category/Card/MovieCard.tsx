import { Pressable, type PressableProps, Text, View } from 'react-native'

import useStyles from './styles'
import Icon from '@components/Icon'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { useWatchedMovies } from '@features/watchedMovies'
import { getImage } from '@services/tmdb/api'

export interface MovieCardProps extends PressableProps {
  information: string
  movieId: string
  winner: boolean
  place: (type: 'wish' | 'bet') => void
  isFirstBet: boolean
  isSecondBet: boolean
  isWish: boolean
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { information, movieId, winner, place, isWish, isFirstBet, isSecondBet, ...rest } = props
  const { user, language } = useUser()
  const { movies } = useEdition()
  const styles = useStyles({ winner })

  const { isMovieWatched } = useWatchedMovies()

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
        image={getImage(movies[movieId].image[language])}
        isWatched={isMovieWatched(movieId)}
        spoiler={user?.settings.preferences.poster}
      />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          {winner && (
            <Icon.Oscar
              filled
              width={18}
              height={18}
            />
          )}
          <Text
            style={styles.title}
            numberOfLines={3}
          >
            {movies[movieId].name[language]}
          </Text>
        </View>

        <Text
          style={styles.information}
          numberOfLines={2}
        >
          {information}
        </Text>

        {/* {isLogged && (
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
        )} */}
      </View>
    </Pressable>
  )
}

export default MovieCard
