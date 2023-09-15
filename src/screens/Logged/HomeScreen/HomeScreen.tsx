import React from 'react'
import {
  FlatList,
  type ListRenderItemInfo,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Global from '@components/Global'
import Header from '@components/Header'
import Poster from '@components/Poster'
import ProgressBar from '@components/ProgressBar'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import { getImage } from '@services/tmdb/api'
import type { Category, HomeScreenProps, Nomination } from '@types'
import routes from '@utils/routes'

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  const edition = useEdition()
  const user = useUser()

  React.useEffect(() => {
    if (!user.onboarding) navigation.navigate(routes.logged.preferences)
  }, [user.onboarding, navigation])

  const renderMovie = ({ item }: ListRenderItemInfo<Nomination>): JSX.Element => {
    const movie = edition.movies[item.movie]
    const person = edition.people[item.person ?? '']
    const watched = user.watchedMovies.includes(movie?.imdb)

    const showPoster = person != null ? true : user.preferences.poster
    const image = person != null ? getImage(person.image) : getImage(movie?.['en-US'].image)
    const text = person != null ? person.name : movie?.['en-US'].name

    return (
      <Pressable
        // className={item.category === 'picture' ? 'w-[158px]' : 'w-[106px]'}
        onPress={(): void => {
          navigation.navigate(routes.logged.movie, {
            id: movie.imdb,
            poster: movie['en-US'].image,
            name: movie['en-US'].name,
          })
        }}
      >
        <Poster
          large={item.category === 'picture'}
          spoiler={showPoster}
          image={image}
          isWatched={watched}
        />

        <Text
          numberOfLines={2}
          // className="mt-2 font-primaryBold text-white text-base"
        >
          {text}
        </Text>
      </Pressable>
    )
  }
  const renderCategory = ({ item }: ListRenderItemInfo<[string, Category]>): JSX.Element => {
    return (
      <View>
        <View
        // className="flex-row justify-between items-center mx-4 mb-4"
        >
          <Text
          // className="font-primaryBold text-white text-xl"
          >
            {item[1]['en-US']}
          </Text>

          <TouchableOpacity
            onPress={(): void => {
              navigation.navigate(routes.logged.nomination, { id: item[0] })
            }}
          >
            <Text
            // className="font-primaryDefault text-zinc-600 text-sm"
            >
              see more
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={edition.nominations[item[0]]}
          renderItem={renderMovie}
          ItemSeparatorComponent={Global.Separator}
          ListFooterComponent={Global.Separator}
          ListHeaderComponent={Global.Separator}
        />
      </View>
    )
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Header.TextContainer>
          <Header.Logo bigHeader>oscar tracker</Header.Logo>
          <Header.Description bigHeader>here are the 2022 nominations</Header.Description>
        </Header.TextContainer>
      </Header.Root>

      <View style={{ paddingHorizontal: 20 }}>
        <ProgressBar
          progress={user.watchedMovies.length}
          total={edition.totalMovies}
        />

        <FlatList
          data={Object.entries(edition.categories)}
          renderItem={renderCategory}
          ItemSeparatorComponent={Global.Separator}
          ListFooterComponent={Global.Separator}
        />
      </View>
    </Global.Screen>
  )
}

export default HomeScreen