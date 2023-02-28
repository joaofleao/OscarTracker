import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ListRenderItemInfo, Image } from 'react-native'
import { HeaderComponent, ModelComponent, SeparatorComponent, SpoilerComponent } from '../../../components'
import { getImage } from '../../../services/tmdb/api'
import { useData, useUser, useMovies } from '../../../hooks'
import { Nomination } from '../../../types'
import { routes } from '../../../utils'

function MovieScreen({ navigation, route }: any) {
  const { id, name, poster } = route.params
  const { watchedMovies, preferences } = useUser()
  const [watched, setWatched] = useState<boolean>(false)
  const [nominations, setNominations] = useState<Nomination[]>([])
  const { getMovieNominations, currentCategoriesMap, setMovieUnwatched, setMovieWatched } = useData()
  const { getMovie } = useMovies()

  useEffect(() => {
    async function fetchData() {
      const nominations = await getMovieNominations(id)
      setNominations(nominations)
      const movie = await getMovie(id)
      console.log(movie)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const value = watchedMovies.includes(id) || false
    setWatched(value)
  }, [watchedMovies])

  const markAsWatched = async (current: boolean) => {
    if (current) {
      setMovieUnwatched(id)
    } else {
      setMovieWatched(id)
    }
  }

  const renderItem = ({ item }: ListRenderItemInfo<Nomination>) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.logged.home, { filter: currentCategoriesMap.get(item.category) })}
      className='bg-amber-500 rounded-2xl py-2 px-4 items-center justify-center'>
      <Text className='text-zinc-900 font-primaryBold text-base'>{currentCategoriesMap.get(item.category)}</Text>
    </TouchableOpacity>
  )

  return (
    <ModelComponent>
      <HeaderComponent
        leadingAction={() => navigation.goBack()}
        leadingButton='arrow-left'>
        {name}
      </HeaderComponent>
      <View className='items-center '>
        <SpoilerComponent
          show={preferences.poster}
          watched={watched}>
          <Image
            className='w-[228px] h-[338px]'
            source={{ uri: getImage(poster) }}
          />
        </SpoilerComponent>
        <TouchableOpacity
          onPress={() => markAsWatched(watched)}
          className={` mt-4 py-4 px-4 rounded-2xl border-2 ${
            watched ? 'bg-amber-500' : 'border-solid  border-amber-500'
          }`}>
          <Text
            className={`text-base font-primaryBold
            ${watched ? 'text-zinc-900' : 'text-amber-500'}
            `}>
            {watched ? 'Watched' : 'Mark as Watched'}
          </Text>
        </TouchableOpacity>
      </View>

      <View className='mt-4'>
        <Text className='mx-4 mb-4 font-primaryBold text-white text-xl'>Nominations</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={nominations}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.category + item.person + item.information}
          ItemSeparatorComponent={() => <SeparatorComponent className='w-2' />}
          ListHeaderComponent={() => <SeparatorComponent className='w-5' />}
          ListFooterComponent={() => <SeparatorComponent className='w-5' />}
        />
      </View>
    </ModelComponent>
  )
}

export default MovieScreen
