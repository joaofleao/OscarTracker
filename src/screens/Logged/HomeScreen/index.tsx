import React, { useEffect, useState } from 'react'
import { FlatList, Linking, type ListRenderItemInfo, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import packageJson from '../../../../package.json'
import { HeaderComponent, ModalComponent, ModelComponent, PosterComponent, ProgressBarComponent, SeparatorComponent, TextInputComponent } from '../../../components'
import { useData, usePersonalData, useUser } from '../../../features'
import { getImage } from '../../../services/tmdb/api'
import { type HomeScreenProps } from '../../../types'
import { routes } from '../../../utils'

const HomeScreen = ({ navigation, route }: HomeScreenProps): JSX.Element => {
  const { currentNominationsByCategory, currentCategoriesMap, currentMoviesMap, currentPeopleMap, news } = useData()
  const { isWatched, totalMovies, totalWatchedMovies } = usePersonalData()
  const { preferences, onboarding } = useUser()
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<[]>([])

  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    if (news != null && news[0].version !== packageJson.version) setModal(true)
  }, [news])

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

  const renderMovie = ({ item }: any, category: any): any => {
    const movie = currentMoviesMap?.get(item.movie)
    const person = currentPeopleMap?.get(item.person)
    const watched = isWatched(movie.imdb)

    const showPoster = person != null ? true : preferences.poster
    const image = person != null ? getImage(person.image) : getImage(movie['en-US'].image)
    const text = person != null ? person.name : movie['en-US'].name

    return (
      <Pressable
        className={category === '19' ? 'w-[158px]' : 'w-[106px]'}
        onPress={() => {
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie['en-US'].image,
            name: movie['en-US'].name,
          })
        }}
      >
        <PosterComponent
          large={category === '19'}
          spoiler={showPoster}
          image={image}
          isWatched={watched}
        />

        <Text
          numberOfLines={2}
          className="mt-2 font-primaryBold text-white text-base"
        >
          {text}
        </Text>
      </Pressable>
    )
  }
  const renderCategory = ({ item }: ListRenderItemInfo<any>): JSX.Element => {
    return (
      <View>
        <View className="flex-row justify-between items-center mx-4 mb-4">
          <Text className="font-primaryBold text-white text-xl">{currentCategoriesMap.get(item.key)}</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.logged.nomination, { id: item.key })
            }}
          >
            <Text className="font-primaryDefault text-zinc-600 text-sm">see more</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item.value}
          renderItem={(movie) => renderMovie(movie, item.key)}
          ItemSeparatorComponent={SeparatorComponent}
          ListFooterComponent={SeparatorComponent}
          ListHeaderComponent={SeparatorComponent}
        />
      </View>
    )
  }

  const newVersionModal = (): JSX.Element => {
    const update = news[0]
    return (
      <ModalComponent
        title={update.title}
        description={update.description}
        visible={modal}
        confirmLabel={'Update to '.concat(update.version)}
        onConfirm={() => {
          void Linking.openURL(update.url)
        }}
      >
        <View style={{ flex: 1, maxHeight: 200 }}>
          <ScrollView
            indicatorStyle="white"
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {update.updates.map((update: string) => (
              <Text
                key={update}
                className="font-primaryBold text-white text-base mb-2"
              >
                {update}
              </Text>
            ))}
          </ScrollView>
        </View>
      </ModalComponent>
    )
  }

  return (
    <ModelComponent
      bottom={false}
      top={false}
    >
      <HeaderComponent
        title="Welcome Back!"
        bigHeader
        align="left"
        description="Here are the 2022 nominations"
      />

      {modal && newVersionModal()}

      <ProgressBarComponent
        animated={false}
        progress={totalWatchedMovies()}
        total={totalMovies()}
      />

      <TextInputComponent
        className="mx-4 mb-5"
        value={search}
        placeholder="Search Category"
        onChange={(e: any) => {
          setSearch(e.nativeEvent.text)
        }}
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
