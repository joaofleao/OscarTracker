import React, { useEffect, useState } from 'react'
import { FlatList, Image, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native'
import { HeaderComponent, ModelComponent, SeparatorComponent, TextInputComponent } from '../../../components'
import { useData } from '../../../hooks'
import { getImage } from '../../../services/tmdb/api'
import { routes } from '../../../utils'

function HomeScreen({ navigation, route }: any) {
  const { currentNominationsByCategory, currentCategoriesMap, currentMoviesMap } = useData()
  const { filter } = route.params || ''
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<[]>([])

  useEffect(() => {
    if (search === '') setData(currentNominationsByCategory)
    else {
      const filtered = currentNominationsByCategory.filter((movie: any) => {
        const name = currentCategoriesMap.get(movie.key)
        const nameLower = name.toLowerCase()
        const searchLower = search.toLowerCase()
        return nameLower.includes(searchLower)
      })
      setData(filtered)
    }
  }, [search, currentNominationsByCategory])

  useEffect(() => {
    if (filter !== '') setSearch(filter)
  }, [filter])

  const renderMovie = ({ item }: ListRenderItemInfo<any>) => {
    const movie = currentMoviesMap?.get(item.movie)

    return (
      <TouchableOpacity
        className='w-[106px] bg-neutral-900 rounded-xl '
        onPress={() =>
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie['en-US'].image,
            name: movie['en-US'].name,
          })
        }>
        <Image
          className='w-[106px] h-[158px] rounded-xl'
          source={{ uri: getImage(movie['en-US'].image) }}
        />
        <Text
          className='text-white font-primaryBold text-md p-3'
          numberOfLines={2}>
          {movie['en-US'].name}
        </Text>
      </TouchableOpacity>
    )
  }
  const renderCategory = ({ item }: ListRenderItemInfo<any>) => {
    return (
      <View>
        <Text className='mx-5 mb-4 font-primaryBold text-white text-xl'>{currentCategoriesMap.get(item.key)}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item.value}
          renderItem={renderMovie}
          ItemSeparatorComponent={SeparatorComponent}
          ListFooterComponent={SeparatorComponent}
          ListHeaderComponent={SeparatorComponent}
        />
      </View>
    )
  }

  return (
    <ModelComponent
      bottom={false}
      top={false}>
      <HeaderComponent>Home</HeaderComponent>

      <TextInputComponent
        className='mx-5 mb-5'
        search
        value={search}
        placeholder='Search Category'
        onChange={(e: any) => setSearch(e.nativeEvent.text)}
      />

      <FlatList
        data={data}
        renderItem={renderCategory}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={SeparatorComponent}
      />
    </ModelComponent>
  )
}

export default HomeScreen
