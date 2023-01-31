import React, { useEffect, useState } from 'react'
import { Image, View, Text, TouchableOpacity, FlatList, ListRenderItemInfo } from 'react-native'
import { HeaderComponent, ModelComponent, SeparatorComponent } from '../../../components'
import { getImage } from '../../../services/tmdb/api'
import { useData, useAuth } from '../../../hooks'
import { Nomination } from '../../../types'
import { routes } from '../../../utils'

function MovieScreen({ navigation, route }: any) {
  const { id, name, poster } = route.params
  const [watched, setWatched] = useState<boolean>(false)
  const [nominations, setNominations] = useState<Nomination[]>([])
  const { getMovieNominations, currentCategoriesMap, setMovieUnwatched, setMovieWatched } = useData()
  const { userData } = useAuth()

  useEffect(() => {
    async function fetchData() {
      const nominations = await getMovieNominations(id)
      setNominations(nominations)
    }
    fetchData()
  }, [userData])

  useEffect(() => {
    const value = userData?.movies.includes(id) || false
    setWatched(value)
  }, [userData])

  const markAsWatched = async (current: boolean) => {
    if (current) {
      setMovieUnwatched(id)
    } else {
      setMovieWatched(id)
    }
  }

  const renderItem = ({ item }: ListRenderItemInfo<Nomination>) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(routes.logged.home, {
          filter: currentCategoriesMap.get(item.category),
        })
      }
      className='bg-amber-500 rounded-2xl py-2 px-4 items-center justify-center'>
      <Text className='text-zinc-900 font-primaryBold text-md'>{currentCategoriesMap.get(item.category)}</Text>
    </TouchableOpacity>
  )

  return (
    <ModelComponent
      bottom={false}
      top={false}>
      <HeaderComponent
        leadingAction={() => navigation.goBack()}
        leadingButton='chevron-left'>
        {name}
      </HeaderComponent>
      <View className='items-center '>
        <Image
          className='w-[228px] h-[338px] rounded-xl mb-4'
          source={{ uri: getImage(poster) }}
        />

        <TouchableOpacity
          onPress={() => markAsWatched(watched)}
          className={`py-4 px-4 rounded-2xl border-2 ${watched ? 'bg-amber-500' : 'border-solid  border-amber-500'}`}>
          <Text
            className={`text-md font-primaryBold
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
          keyExtractor={item => item.category}
          ItemSeparatorComponent={() => <SeparatorComponent className='w-2' />}
          ListHeaderComponent={() => <SeparatorComponent className='w-5' />}
          ListFooterComponent={() => <SeparatorComponent className='w-5' />}
        />
      </View>
    </ModelComponent>
  )
}

export default MovieScreen
