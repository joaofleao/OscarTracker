import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { Global, Header, Input, NomineeCard, ProgressBar } from '../../../components'
import useEdition from '../../../features/edition/useEdition'
import useTheme from '../../../features/theme/useTheme'
import useUser from '../../../features/user/useUser'
import type { BasicMovieType, WatchListScreenProps } from '../../../types'
import { routes } from '../../../utils'

function WatchListScreen({ navigation }: WatchListScreenProps): JSX.Element {
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<any>([])

  const edition = useEdition()
  const user = useUser()
  const theme = useTheme()

  useEffect(() => {
    if (search === '') setData(Object.values(edition.movies))
    else {
      const filtered = Object.values(edition.movies).filter((movie: any) => {
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
        mh={theme.sizes.size10}
        onPress={() => {
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
        onChange={(e: any) => {
          setSearch(e.nativeEvent.text)
        }}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => {
          return item.imdb
        }}
        ItemSeparatorComponent={Global.Separator}
        ListFooterComponent={Global.Separator}
      />
    </Global.Screen>
  )
}

export default WatchListScreen
