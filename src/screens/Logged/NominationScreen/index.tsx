import React from 'react'
import { FlatList } from 'react-native'

import { Global, Header, NomineeCard } from '../../../components'
import { useEdition, useTheme } from '../../../features'
import { type NominationScreenProps } from '../../../types'
import { routes } from '../../../utils'

const NominationScreen = ({ navigation, route }: NominationScreenProps): JSX.Element => {
  const { id } = route.params

  const edition = useEdition()
  const theme = useTheme()

  const movies = edition.nominations[id]

  const renderMovie = ({ item }: any): JSX.Element => {
    const movie = edition.movies[item.movie]
    const person = edition.people[item.person]

    const image = person != null ? person.image : movie['en-US'].image
    const title = person != null ? person.name : item.category === '18' ? item.extra : movie['en-US'].name

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const information = person != null ? `as ${item.information}` : item.information
    const extra = person != null ? movie['en-US'].name : item.category === '18' ? movie['en-US'].name : item.extra

    return (
      <NomineeCard
        mh={theme.sizes.size10}
        onPress={() => {
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie['en-US'].image,
            name: movie['en-US'].name,
          })
        }}
        className="mx-4"
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
      <Header
        leadingAction={navigation.goBack}
        leadingButton={'arrow-left'}
        title={edition.categories[id]['en-US']}
      />

      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => `${item.movie}${item.person ?? ''} ${item.information ?? ''}${item.extra ?? ''}`}
        ItemSeparatorComponent={Global.Separator}
        ListFooterComponent={Global.Separator}
      />
    </Global.Screen>
  )
}

export default NominationScreen
