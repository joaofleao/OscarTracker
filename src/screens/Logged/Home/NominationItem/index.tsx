import * as Styled from './styles'
import Poster from '@components/Poster'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { getImage } from '@services/tmdb/api'
import { Nomination, ScreenTypes } from '@types'
import routes from '@utils/routes'

interface NominationItemProps {
  nomination: Nomination
}

const NominationItem = (props: NominationItemProps): JSX.Element => {
  const { nomination } = props
  const edition = useEdition()
  const user = useUser()
  const navigation = useNavigation<NativeStackNavigationProp<ScreenTypes, 'logged'>>()

  const movie = edition.movies[nomination.movie]
  const winner = edition.winners[nomination.category] === nomination.id
  const person = edition.people[nomination.person ?? '']
  const watched = user.movies.includes(movie?.imdb)

  const showPoster = person != null ? true : user.preferences.poster
  const image = person != null ? getImage(person.image) : getImage(movie?.['en-US'].image)
  const text = person != null ? person.name : movie?.['en-US'].name

  const isBestPicture = nomination.category === 'picture'

  const handleClick = (): void => {
    navigation.navigate(routes.logged.movie, { movieId: movie.imdb })
  }

  return (
    <Styled.Container
      large={isBestPicture}
      onPress={handleClick}
    >
      <Poster
        winner={winner}
        large={isBestPicture}
        spoiler={showPoster}
        image={image}
        isWatched={watched}
      />

      <Styled.Title numberOfLines={2}>{text}</Styled.Title>
    </Styled.Container>
  )
}

export default NominationItem
