import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native'
import {
  HeaderComponent,
  ModelComponent,
  SeparatorComponent,
  TextInputComponent,
  ProgressBarComponent,
  PosterComponent,
} from '../../../components'
import { useData, usePersonalData, useUser, useAuth } from '../../../hooks'
import { getImage } from '../../../services/tmdb/api'
import { routes } from '../../../utils'

function HomeScreen({ navigation, route }: any) {
  const { currentNominationsByCategory, currentCategoriesMap, currentMoviesMap } = useData()
  const { isWatched, totalMovies, totalWatchedMovies, watchedMoviesInCategory, uniqueMovies } = usePersonalData()
  const { preferences, onboarding } = useUser()
  const filter = route.params?.filter || ''
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<[]>([])

  useEffect(() => {
    if (!onboarding) navigation.navigate(routes.logged.preferences)
  }, [onboarding])

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
    const poster = getImage(movie['en-US'].image)
    const watched = isWatched(movie.imdb)

    return (
      <TouchableOpacity
        className='w-[106px]'
        onPress={() =>
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie['en-US'].image,
            name: movie['en-US'].name,
          })
        }>
        <PosterComponent
          spoiler={preferences.poster}
          image={poster}
          isWatched={watched}
        />

        <Text
          numberOfLines={2}
          className='mt-2 font-primaryBold text-white text-base w-[full]'>
          {movie['en-US'].name}
        </Text>
      </TouchableOpacity>
    )
  }
  const renderCategory = ({ item }: ListRenderItemInfo<any>) => {
    return (
      <View>
        <View className='flex-row justify-between items-center mx-5 mb-4'>
          <Text className='font-primaryBold text-white text-xl'>{currentCategoriesMap.get(item.key)}</Text>

          <Text className='font-primaryBold text-white text-base'>
            {watchedMoviesInCategory(item.value)}/{uniqueMovies(item.value)}
          </Text>
        </View>
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

      <ProgressBarComponent
        progress={totalWatchedMovies()}
        total={totalMovies()}
      />

      <TextInputComponent
        className='mx-5 mb-5'
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
