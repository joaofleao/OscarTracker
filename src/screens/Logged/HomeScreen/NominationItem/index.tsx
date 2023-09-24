import { ListRenderItemInfo } from 'react-native'

import * as Styled from './styles'
import Poster from '@components/Poster'
import { EditionContextType } from '@features/edition/EditionContext'
import { UserContextType } from '@features/user/UserContext'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { getImage } from '@services/tmdb/api'
import { Nomination, ScreenTypes } from '@types'
import routes from '@utils/routes'

const NominationItem = (
  object: ListRenderItemInfo<Nomination>,
  navigation: NativeStackNavigationProp<ScreenTypes, 'HomeScreen', undefined>,
  edition: EditionContextType,
  user: UserContextType,
): JSX.Element => {
  const { item } = object

  const movie = edition.movies[item.movie]
  const person = edition.people[item.person ?? '']
  const watched = user.movies.includes(movie?.imdb)

  const showPoster = person != null ? true : user.preferences.poster
  const image = person != null ? getImage(person.image) : getImage(movie?.['en-US'].image)
  const text = person != null ? person.name : movie?.['en-US'].name

  const isBestPicture = item.category === 'picture'

  const handleClick = (): void => {
    navigation.navigate(routes.logged.movie, {
      id: movie.imdb,
      poster: movie['en-US'].image,
      name: movie['en-US'].name,
    })
  }

  return (
    <Styled.Container
      large={isBestPicture}
      onPress={handleClick}
    >
      <Poster
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
