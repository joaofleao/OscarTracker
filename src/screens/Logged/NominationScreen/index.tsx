import React from 'react'
import { FlatList } from 'react-native'
import { HeaderComponent, ModelComponent, SeparatorComponent, NomineeCardComponent } from '../../../components'
import { useData } from '../../../hooks'
import { routes } from '../../../utils'

function NominationScreen({ navigation, route }: any) {
  const { id, movies } = route.params
  const { currentCategoriesMap, currentMoviesMap, currentPeopleMap } = useData()

  const renderMovie = ({ item }: any) => {
    const movie = currentMoviesMap?.get(item.movie)
    const person = currentPeopleMap?.get(item.person)

    const image = person ? person.image : movie['en-US'].image
    const title = person ? person.name : item.category === '18' ? item.extra : movie['en-US'].name
    const information = person ? 'as ' + item.information : item.information
    const extra = person ? movie['en-US'].name : item.category === '18' ? movie['en-US'].name : item.extra

    return (
      <NomineeCardComponent
        onPress={() =>
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie['en-US'].image,
            name: movie['en-US'].name,
          })
        }
        className='mx-4'
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
        leadingAction={() => navigation.goBack()}
        leadingButton={'arrow-left'}>
        {currentCategoriesMap.get(id)}
      </HeaderComponent>

      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => item.information}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={SeparatorComponent}
      />
    </ModelComponent>
  )
}

export default NominationScreen
