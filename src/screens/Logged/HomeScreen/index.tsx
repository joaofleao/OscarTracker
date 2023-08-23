import React from 'react'
import { FlatList, type ListRenderItemInfo, Pressable, Text, TouchableOpacity, View } from 'react-native'

import { Global, Header, Postert, ProgressBarComponent, SeparatorComponent } from '../../../components'
import { useEdition, useUser } from '../../../features'
import { getImage } from '../../../services/tmdb/api'
import { type HomeScreenProps, type Nomination } from '../../../types'
import { routes } from '../../../utils'

const HomeScreen = ({ navigation, route }: HomeScreenProps): JSX.Element => {
  const edition = useEdition()

  const user = useUser()

  const renderMovie = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => {
    const movie = edition.movies[item.movie]
    const person = edition.people[item.person ?? '']
    const watched = user.watchedMovies.includes(movie?.imdb)

    const showPoster = person != null ? true : user.preferences.poster
    const image = person != null ? getImage(person.image) : getImage(movie?.['en-US'].image)
    const text = person != null ? person.name : movie?.['en-US'].name

    return (
      <Pressable
        className={item.category === 'picture' ? 'w-[158px]' : 'w-[106px]'}
        onPress={() => {
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie['en-US'].image,
            name: movie['en-US'].name,
          })
        }}
      >
        <Postert
          large={item.category === 'picture'}
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
  const renderCategory = ({ item }: ListRenderItemInfo<any>): JSX.Element => (
    <View>
      <View className="flex-row justify-between items-center mx-4 mb-4">
        <Text className="font-primaryBold text-white text-xl">{item[1]['en-US']}</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(routes.logged.nomination, { id: item[0] })
          }}
        >
          <Text className="font-primaryDefault text-zinc-600 text-sm">see more</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={edition.nominations[item[0]]}
        renderItem={renderMovie}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={SeparatorComponent}
        ListHeaderComponent={SeparatorComponent}
      />
    </View>
  )

  return (
    <Global.Screen>
      <Header
        title="Welcome Back!"
        bigHeader
        align="left"
        description="Here are the 2022 nominations"
      />

      <ProgressBarComponent
        animated={false}
        progress={user.watchedMovies.length}
        total={edition.totalMovies}
        className="mb-8"
      />

      <FlatList
        data={Object.entries(edition.categories)}
        renderItem={renderCategory}
        ItemSeparatorComponent={SeparatorComponent}
        ListFooterComponent={SeparatorComponent}
      />
    </Global.Screen>
  )
}

export default HomeScreen
