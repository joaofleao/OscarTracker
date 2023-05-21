import React from 'react'
import { FlatList } from 'react-native'

import { HeaderComponent, ModelComponent, NomineeCardComponent, SeparatorComponent } from '../../../components'
import { useData } from '../../../hooks'
import { type NominationScreenProps } from '../../../types'
import { routes } from '../../../utils'

const NominationScreen = ({ navigation, route }: NominationScreenProps): JSX.Element => {
  const { id } = route.params
  const { currentCategoriesMap, currentMoviesMap, currentPeopleMap, currentNominationsByCategory } = useData()
  const movies = currentNominationsByCategory.filter((category: any) => {
    return category.key === id
  })[0].value

  const renderMovie = ({ item }: any): JSX.Element => {
    const movie = currentMoviesMap?.get(item.movie)
    const person = currentPeopleMap?.get(item.person)

    const image = person != null ? person.image : movie['en-US'].image
    const title = person != null ? person.name : item.category === '18' ? item.extra : movie['en-US'].name

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const information = person != null ? `as ${item.information}` : item.information
    const extra = person != null ? movie['en-US'].name : item.category === '18' ? movie['en-US'].name : item.extra

    return (
      <NomineeCardComponent
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
    <ModelComponent>
      <HeaderComponent
        leadingAction={navigation.goBack}
        leadingButton={'arrow-left'}
        title={currentCategoriesMap.get(id)}
      />

      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.information}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={SeparatorComponent}
      />
    </ModelComponent>
  )
}

export default NominationScreen
