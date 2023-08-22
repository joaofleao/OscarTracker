import React, { useEffect, useState } from 'react'
import { FlatList, Image, Linking, type ListRenderItemInfo, Platform, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { IMDB } from '../../../assets/images'
import { Header, IconComponent, Model, SeparatorComponent, SpoilerComponent } from '../../../components'
import { useEdition, useMovies, useUser } from '../../../features'
import { getImage } from '../../../services/tmdb/api'
import { type MovieScreenProps, type Nomination, type TMDBPerson } from '../../../types'
import { routes } from '../../../utils'

const MovieScreen = ({ navigation, route }: MovieScreenProps): JSX.Element => {
  const { id, name, poster } = route.params
  const [watched, setWatched] = useState<boolean>(false)
  const [movieData, setMovieData] = useState<any>([])
  const [movieCast, setMovieCast] = useState<any>([])
  const [movieProviders, setMovieProviders] = useState<any>([])
  const [nominations, setNominations] = useState<Nomination[]>([])

  const edition = useEdition()
  const user = useUser()
  const movies = useMovies()

  const imdbLink = `https://www.imdb.com/title/${id}`

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const nominations = await edition.getNominations(id)
      setNominations(nominations)
      const movie = await movies.getMovie(id)
      const cast = await movies.getCast(id)
      const providers = await movies.getProviders(id)

      setMovieProviders(() => providers.results?.BR?.flatrate?.filter((provider: any) => provider.provider_id !== 1796))
      setMovieData(movie)
      setMovieCast(cast.cast.slice(0, 10))
    }
    void fetchData()
  }, [])

  useEffect(() => {
    const value = user.watchedMovies.includes(id) || false
    setWatched(value)
  }, [user.watchedMovies])

  const markAsWatched = (current: boolean): void => {
    if (current) {
      user.setMovieUnwatched(id)
    } else {
      user.setMovieWatched(id)
    }
  }

  const renderCast = ({ item }: ListRenderItemInfo<TMDBPerson>): JSX.Element => (
    <SpoilerComponent
      show={user.preferences.cast}
      watched={watched}
      className="flex-1"
    >
      <Pressable
        onPress={() => {
          void Linking.openURL(`https://www.themoviedb.org/person/${item.id}`)
        }}
        className="w-[106px] "
      >
        <View className="justify-center items-center ">
          <Text className="absolute text-white text-center">No Image</Text>

          <Image
            source={{ uri: getImage(item.profile_path) }}
            className="w-[106px] h-[158px] rounded-xl bg-zinc-800/40"
          />
        </View>

        <Text
          numberOfLines={2}
          className="mt-3 font-primaryBold text-white text-base w-[full]"
        >
          {item.name}
        </Text>

        <Text
          numberOfLines={1}
          className="mt-2 font-primaryRegular text-white text-sm w-[full] "
        >
          {item.character}
        </Text>
      </Pressable>
    </SpoilerComponent>
  )

  const renderItem = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routes.logged.nomination, { id: item.category })
      }}
      className="bg-amber-500 rounded-2xl py-2 px-4 items-center justify-center"
    >
      <Text className="text-zinc-900 font-primaryBold text-base">{edition.categories[item.category]['en-US']}</Text>
    </TouchableOpacity>
  )
  const renderProvider = ({ item }: ListRenderItemInfo<any>): JSX.Element => (
    <Image
      source={{ uri: getImage(item.logo_path) }}
      className="w-[50px] h-[50px] rounded-full bg-zinc-800/40 mb-2"
    />
  )

  return (
    <Model>
      <Header
        leadingAction={navigation.goBack}
        leadingButton="arrow-left"
        align="left"
      />
      <ScrollView>
        <View className="items-center">
          <SpoilerComponent
            show={user.preferences.poster}
            watched={watched}
          >
            <Image
              className="w-[228px] h-[338px] rounded-xl"
              source={{ uri: getImage(poster) }}
            />
          </SpoilerComponent>

          <Text className="mx-4 mt-4 font-primaryBold text-white text-2xl text-center">{name}</Text>
          <View className=" flex-row justify-center mt-4">
            <View className="mr-6 px-2 py-4 bg-zinc-800/40 justify-center items-center rounded-xl w-20">
              <IconComponent
                name="clock"
                size={30}
                className="text-amber-500"
              />
              <Text className="text-white font-primaryBold text-base mt-2">{movieData.runtime}</Text>
            </View>
            <SpoilerComponent
              text="Show Score"
              show={user.preferences.ratings}
              watched={watched}
            >
              <View className=" px-2 py-4 bg-zinc-800/40 justify-center items-center rounded-xl w-20">
                <IconComponent
                  name="star"
                  size={30}
                  className="text-amber-500"
                />
                <Text className="text-white font-primaryBold text-base mt-2">{movieData.vote_average != null && Math.round(movieData.vote_average * 10) / 10}</Text>
              </View>
            </SpoilerComponent>
            <View className="ml-6 px-2 py-4 bg-zinc-800/40 justify-center items-center rounded-xl w-20">
              <IconComponent
                name="globe"
                size={30}
                className="text-amber-500"
              />
              <Text className="text-white font-primaryBold text-base mt-2">{movieData.original_language}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              markAsWatched(watched)
            }}
            className={` mt-4 py-4 px-4 rounded-2xl border-2 ${watched ? 'bg-amber-500' : 'border-solid  border-amber-500'}`}
          >
            <Text
              className={`text-base font-primaryBold
            ${watched ? 'text-zinc-900' : 'text-amber-500'}
            `}
            >
              {watched ? 'Watched' : 'Mark as Watched'}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4">
          <View className="flex-row justify-between items-center mx-4 mb-2">
            <Text className="font-primaryBold text-white text-xl">Nominations</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.logged.home)
              }}
            >
              <Text className="font-primaryDefault text-zinc-600 text-sm">see more</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={nominations}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => `${item.category}${item.person != null ? item.person : ''}${item.information != null ? item.information : ''}`}
            ItemSeparatorComponent={SeparatorComponent}
            ListHeaderComponent={SeparatorComponent}
            ListFooterComponent={SeparatorComponent}
          />
        </View>

        <View className="mt-4">
          <Text className="mx-4 mb-2 font-primaryBold text-white text-xl">Where to Watch</Text>

          {movieProviders?.length > 0 ? (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={movieProviders}
              renderItem={(item) => renderProvider(item)}
              keyExtractor={(item) => item.provider_id.toString()}
              ItemSeparatorComponent={SeparatorComponent}
              ListHeaderComponent={SeparatorComponent}
              ListFooterComponent={SeparatorComponent}
            />
          ) : (
            <Text className="mx-4 font-primaryRegular text-white text-base text-justify">No streaming services available</Text>
          )}
        </View>

        <View className="mt-4 mx-4">
          <Text className="mb-2 font-primaryBold text-white text-xl">Plot</Text>
          <SpoilerComponent
            show={user.preferences.plot}
            watched={watched}
          >
            <Text className="font-primaryRegular text-white text-base text-justify">{movieData.overview}</Text>
          </SpoilerComponent>
        </View>

        <View className="mt-4">
          <Text className="mx-4 mb-2 font-primaryBold text-white text-xl">Cast</Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={movieCast}
            renderItem={renderCast}
            ItemSeparatorComponent={SeparatorComponent}
            ListFooterComponent={SeparatorComponent}
            ListHeaderComponent={SeparatorComponent}
          />
        </View>

        <View className={`mt-8 mx-4 items-center ${Platform.OS === 'android' ? 'mb-6' : ''}`}>
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => {
              void Linking.openURL(imdbLink)
            }}
          >
            <IMDB
              width={40}
              height={40}
            />
            <Text className="mx-4 font-primaryBold text-white text-base ">Check on IMDB</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Model>
  )
}

export default MovieScreen
