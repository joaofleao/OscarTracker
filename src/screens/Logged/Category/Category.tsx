import { ListRenderItemInfo } from 'react-native'

import MovieCard from './MovieCard'
import PersonCard from './PersonCard'
import SongCard from './SongCard'
import * as Styled from './styles'
import Button from '@components/Button'
import Global from '@components/Global'
import Header from '@components/Header'
import Icon from '@components/Icon'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { type CategoryProps, Nomination } from '@types'
import routes from '@utils/routes'

const Category = ({ navigation, route }: CategoryProps): JSX.Element => {
  const { categoryId } = route.params
  const { adminSettings } = useUser()

  const edition = useEdition()
  const categoryNominations = edition.nominations[categoryId]

  const renderCard = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => {
    const props = {
      winner: item.winner,
      categoryId: item.category,
      movieId: item.movie,
      onPress: (): void => {
        navigation.navigate(routes.logged.movie, { movieId: item.movie })
      },
    }

    if (item.person)
      return (
        <PersonCard
          actorId={item.person}
          character={item.information}
          {...props}
        />
      )
    if (item.song)
      return (
        <SongCard
          song={item.song}
          information={item.information}
          {...props}
        />
      )
    return (
      <MovieCard
        information={item.information}
        {...props}
      />
    )
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Button
          onPress={navigation.goBack}
          icon={<Icon.ArrowLeft />}
          variant="action"
        />
        <Header.Title>
          {adminSettings && 'Winner of '}
          {edition.categories[categoryId]['en-US']}
        </Header.Title>
      </Header.Root>

      <Styled.Content
        indicatorStyle="black"
        data={categoryNominations}
        renderItem={renderCard}
        keyExtractor={(_, index): string => {
          return `${index}`
        }}
        ItemSeparatorComponent={Global.Separator}
      />
    </Global.Screen>
  )
}

export default Category
