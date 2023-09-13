import { FlatList, ListRenderItemInfo } from 'react-native'

import { Button, Global, Header, Icon, NomineeCard } from '@components'
import { useEdition } from '@features'
import { Nomination, type NominationScreenProps } from '@types'
import { routes } from '@utils'

const NominationScreen = ({ navigation, route }: NominationScreenProps): JSX.Element => {
  const { id } = route.params

  const edition = useEdition()

  const movies = edition.nominations[id]

  const renderMovie = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => {
    const movie = edition.movies[item.movie]
    const person = edition.people[item.person]

    const image = person != null ? person.image : movie['en-US'].image
    const title =
      person != null ? person.name : item.category === '18' ? item.extra : movie['en-US'].name

    const information = person != null ? `as ${item.information}` : item.information
    const extra =
      person != null
        ? movie['en-US'].name
        : item.category === '18'
        ? movie['en-US'].name
        : item.extra

    return (
      <NomineeCard
        onPress={(): void => {
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie['en-US'].image,
            name: movie['en-US'].name,
          })
        }}
        // className="mx-4"
        image={image}
        title={title}
        information={information}
        extra={extra}
        id={movie.imdb}
      />
    )
  }
  return (
    <Global.Screen>
      <Header.Root>
        <Button
          onPress={navigation.goBack}
          icon={<Icon.ArrowLeft />}
          variant="secondary"
        />

        <Header.Title align="center">{edition.categories[id]['en-US']}</Header.Title>
      </Header.Root>

      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item): string => {
          return `${item.movie}${item.person ?? ''} ${item.information ?? ''}${item.extra ?? ''}`
        }}
        ItemSeparatorComponent={Global.Separator}
        ListFooterComponent={Global.Separator}
      />
    </Global.Screen>
  )
}

export default NominationScreen
