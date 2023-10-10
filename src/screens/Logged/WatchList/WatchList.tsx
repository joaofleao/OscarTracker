import React from 'react'
import { FlatList } from 'react-native'

import * as Styled from './styles'
import SearchField from '@components/FormFields/SearchField'
import Global from '@components/Global'
import Header from '@components/Header'
import NomineeCard from '@components/NomineeCard'
import ProgressBar from '@components/ProgressBar'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import type { BasicMovieType, WatchListProps } from '@types'
import routes from '@utils/routes'

function WatchList({ navigation }: WatchListProps): JSX.Element {
  const edition = useEdition()
  const user = useUser()

  const [search, setSearch] = React.useState<string>('')
  const [data, setData] = React.useState(Object.values(edition.movies))

  React.useEffect(() => {
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
          navigation.navigate(routes.logged.movie, { movieId: item.imdb })
        }}
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
      <Styled.Content>
        <ProgressBar
          progress={user.movies.length}
          total={edition.totalMovies}
        />

        <SearchField
          onChangeText={setSearch}
          value={search}
        />

        <FlatList
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={Global.Separator}
        />
      </Styled.Content>
    </Global.Screen>
  )
}

export default WatchList