import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import type { BasicMovieType, WatchListScreenProps } from '../../../types'
import { routes } from '../../../utils'
import { Global, Header, Input, NomineeCard, ProgressBar } from '@components'
import { useEdition, useUser } from '@features'

function WatchListScreen({ navigation }: WatchListScreenProps): JSX.Element {
  const edition = useEdition()
  const user = useUser()

  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState(Object.values(edition.movies))

  useEffect(() => {
    if (search === '') setData(Object.values(edition.movies))
    else {
      const filtered = Object.values(edition.movies).filter((movie) => {
        const nameLower = movie['en-US'].name.toLowerCase()
        const searchLower = search.toLowerCase()
        return nameLower.includes(searchLower)
      })
      setData(filtered)
    }
  }, [search, edition.movies])

  const renderItem = ({ item }: { item: BasicMovieType }): JSX.Element => {
    return (
      <NomineeCard
        onPress={(): void => {
          navigation.navigate(routes.logged.movie, {
            id: item.imdb,
            poster: item['en-US'].image,
            name: item['en-US'].name,
          })
        }}
        // className="mx-4"
        image={item['en-US'].image}
        title={item['en-US'].name}
        id={item.imdb}
      />
    )
  }

  return (
    <Global.Screen>
      <Header.Root>
        <Header.TextContainer>
          <Header.Title bigHeader>Watch List</Header.Title>
          <Header.Description bigHeader>here are the 2022 nominees</Header.Description>
        </Header.TextContainer>
      </Header.Root>

      <ProgressBar
        progress={user.watchedMovies.length}
        total={edition.totalMovies}
      />

      <Input
        type="search"
        onChange={(e): void => {
          setSearch(e.nativeEvent.text)
        }}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: BasicMovieType): string => {
          return item.imdb
        }}
        ItemSeparatorComponent={Global.Separator}
        ListFooterComponent={Global.Separator}
      />
    </Global.Screen>
  )
}

export default WatchListScreen
