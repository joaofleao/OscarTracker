import * as Styled from './styles'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import usePressableAnimation from '@hooks/usePressableAnimation'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { getImage } from '@services/tmdb/api'
import { Nomination, ScreenTypes } from '@types'
import routes from '@utils/routes'

interface NominationItemProps {
  nomination: Nomination
  winnerTitle?: string
  winnerDescription?: string
}

const NominationItem = (props: NominationItemProps): JSX.Element => {
  const { nomination, winnerTitle, winnerDescription } = props
  const edition = useEdition()
  const user = useUser()

  const navigation = useNavigation<NativeStackNavigationProp<ScreenTypes, 'logged'>>()

  const movie = edition.movies[nomination.movie]
  const winner = edition.winners?.[nomination.category] === nomination.id
  const person = edition.people[nomination.person ?? '']
  const watched = user.movies.includes(movie?.imdb)
  const isBestPicture = nomination.category === 'picture'

  const image =
    person != null
      ? getImage(person.image)
      : getImage(movie?.['en-US'].image, isBestPicture ? 500 : 200)
  const text = person != null ? person.name : movie?.['en-US'].name

  const handleClick = (): void => {
    navigation.navigate(routes.logged.movie, { movieId: movie.imdb })
  }

  const { animationPressIn, animationPressOut, scale } = usePressableAnimation()

  return (
    <Styled.Container
      large={isBestPicture}
      style={{ transform: [{ scale }] }}
      onPressIn={animationPressIn}
      onPressOut={animationPressOut}
      onPress={handleClick}
    >
      <Poster
        winner={winner}
        size={isBestPicture ? 'large' : 'small'}
        spoiler={user.preferences.poster}
        image={image}
        isWatched={watched}
        winnerTitle={winnerTitle}
        winnerDescription={winnerDescription}
      />

      <Styled.Title numberOfLines={2}>{text}</Styled.Title>
    </Styled.Container>
  )
}

export default NominationItem
