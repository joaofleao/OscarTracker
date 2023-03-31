import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { HeaderComponent, ModelComponent, NomineeCardComponent, SeparatorComponent, TextInputComponent } from '../../../components'
import { useData } from '../../../hooks'
import { type BasicMovieType } from '../../../types'
import { routes } from '../../../utils'

function WatchListScreen({ navigation, route }: any) {
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<[]>([])

  const { currentMovies } = useData()

  useEffect(() => {
    if (search === '') setData(currentMovies)
    else {
      const filtered = currentMovies.filter((movie: any) => {
        const nameLower = movie['en-US'].name.toLowerCase()
        const searchLower = search.toLowerCase()
        return nameLower.includes(searchLower)
      })
      setData(filtered)
    }
  }, [search, currentMovies])

  const renderItem = ({ item }: BasicMovieType) => {
    return (
      <NomineeCardComponent
        onPress={() =>
          navigation.navigate(routes.logged.movie, {
            id: item.imdb,
            poster: item['en-US'].image,
            name: item['en-US'].name,
          })
        }
        className="mx-4"
        image={item['en-US'].image}
        title={item['en-US'].name}
        id={item.imdb}
      />
    )
  }

  return (
    <ModelComponent
      bottom={false}
      top={false}
    >
      <HeaderComponent>Watch List</HeaderComponent>

      <TextInputComponent
        className="mx-4 mb-5"
        placeholder="Search Movie"
        onChange={(e: any) => {
          setSearch(e.nativeEvent.text)
        }}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdb}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={SeparatorComponent}
      />
    </ModelComponent>
  )
}

export default WatchListScreen
