import React, { useEffect, useState } from "react"
import {
  FlatList,
  Image,
  ImageBackground,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import {
  HeaderComponent,
  ModelComponent,
  SeparatorComponent,
  TextInputComponent,
  ProgressBarComponent,
} from "../../../components"
import { useData, usePersonalData, useUser, useAuth } from "../../../hooks"
import { getImage } from "../../../services/tmdb/api"
import { routes } from "../../../utils"

function HomeScreen({ navigation, route }: any) {
  const {
    currentNominationsByCategory,
    currentCategoriesMap,
    currentMoviesMap,
  } = useData()
  const {
    isWatched,
    totalMovies,
    totalWatchedMovies,
    watchedMoviesInCategory,
    uniqueMovies,
  } = usePersonalData()
  const { preferences, onboarding } = useUser()
  const filter = route.params?.filter || ""
  const [search, setSearch] = useState<string>("")
  const [data, setData] = useState<[]>([])

  useEffect(() => {
    if (!onboarding) navigation.navigate(routes.logged.preferences)
  }, [onboarding])

  useEffect(() => {
    if (search === "") setData(currentNominationsByCategory)
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
    if (filter !== "") setSearch(filter)
  }, [filter])

  const renderMovie = ({ item }: ListRenderItemInfo<any>) => {
    const movie = currentMoviesMap?.get(item.movie)

    return (
      <TouchableOpacity
        className="w-[106px] h-[158px] bg-zinc-800/40 bg-opacity-2 rounded-xl relative"
        onPress={() =>
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie["en-US"].image,
            name: movie["en-US"].name,
          })
        }
      >
        {isWatched(movie.imdb) && (
          <ImageBackground
            imageStyle={{ borderRadius: 12 }}
            className="absolute w-full h-full rounded-xl "
            source={{ uri: getImage(movie["en-US"].image) }}
          />
        )}

        {preferences.poster && !isWatched(movie.imdb) && (
          <View className="  flex-1 items-center justify-center">
            <ImageBackground
              imageStyle={{ borderRadius: 12 }}
              className="absolute w-full h-full rounded-xl "
              source={{ uri: getImage(movie["en-US"].image) }}
            />
            <View className="absolute bg-zinc-900/70 w-full h-full rounded-xl" />
            <Text className="text-white font-primaryBold text-base p-3 text-center">
              {movie["en-US"].name}
            </Text>
          </View>
        )}
        {!preferences.poster && !isWatched(movie.imdb) && (
          <View className="flex-1 items-center justify-center">
            <Text className="text-white font-primaryBold text-base p-3 text-center">
              {movie["en-US"].name}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    )
  }
  const renderCategory = ({ item }: ListRenderItemInfo<any>) => {
    return (
      <View>
        <View className="flex-row justify-between items-center mx-5 mb-4">
          <Text className="font-primaryBold text-white text-xl">
            {currentCategoriesMap.get(item.key)}
          </Text>

          <Text className="font-primaryBold text-white text-base">
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
    <ModelComponent bottom={false} top={false}>
      <HeaderComponent>Home</HeaderComponent>

      <ProgressBarComponent
        progress={totalWatchedMovies()}
        total={totalMovies()}
      />

      <TextInputComponent
        className="mx-5 mb-5"
        value={search}
        placeholder="Search Category"
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
