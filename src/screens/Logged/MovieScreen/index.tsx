import React, { useEffect, useState } from 'react'
import { ImageBackground, View, Text, TouchableOpacity, FlatList, ListRenderItemInfo, Pressable } from 'react-native'
import { HeaderComponent, IconComponent, ModelComponent, SeparatorComponent } from '../../../components'
import { getImage } from '../../../services/tmdb/api'
import { useData, usePersonalData, useUser } from '../../../hooks'
import { Nomination } from '../../../types'
import { routes } from '../../../utils'
import colors from 'tailwindcss/colors'

function MovieScreen({ navigation, route }: any) {
  const { id, name, poster } = route.params
  const { watchedMovies, preferences } = useUser()
  const [watched, setWatched] = useState<boolean>(false)
  const [nominations, setNominations] = useState<Nomination[]>([])
  const { isWatched } = usePersonalData()
  const { getMovieNominations, currentCategoriesMap, setMovieUnwatched, setMovieWatched } = useData()

  const [showPoster, setShowPoster] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData() {
      const nominations = await getMovieNominations(id)
      setNominations(nominations)
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
        <Pressable
          onPressIn={() => setShowPoster(true)}
          onPressOut={() => setShowPoster(false)}
          className='items-center justify-center w-[228px] h-[338px] bg-zinc-800/40 rounded-xl mb-4'>
          {(showPoster || preferences.poster || isWatched(id)) && (
            <ImageBackground
              imageStyle={{ borderRadius: 12 }}
              className='w-full h-full rounded-xl'
              source={{ uri: getImage(poster) }}
            />
          )}
          {!preferences.poster && !showPoster && !isWatched(id) && (
            <IconComponent
              name={'eye'}
              size={30}
              color={colors.amber[500]}></IconComponent>
          )}
        </Pressable>

        <TouchableOpacity
          onPress={() => markAsWatched(watched)}
          className={`py-4 px-4 rounded-2xl border-2 ${watched ? 'bg-amber-500' : 'border-solid  border-amber-500'}`}>
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
