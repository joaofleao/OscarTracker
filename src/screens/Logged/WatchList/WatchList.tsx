import React from 'react'
import { Animated, View } from 'react-native'

import * as Styled from './styles'
import Button from '@components/Button'
import DynamicHeader from '@components/DynamicHeader'
import SearchField from '@components/FormFields/SearchField'
import Global from '@components/Global'
import NomineeCard from '@components/NomineeCard'
import ProgressBar from '@components/ProgressBar'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import type { WatchListProps } from '@types'
import routes from '@utils/routes'

function WatchList({ navigation }: WatchListProps): JSX.Element {
  const edition = useEdition()
  const user = useUser()

  const [search, setSearch] = React.useState<string>('')
  const [onlyWatched, setOnlyWatched] = React.useState<boolean>(false)
  const [data, setData] = React.useState(Object.values(edition.movies))
  const scrollOffsetY = React.useRef(new Animated.Value(0)).current

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

  React.useEffect(() => {
    if (onlyWatched) {
      const filtered = Object.values(edition.movies).filter((movie) => {
        return !user.movies.includes(movie.imdb)
      })
      setData(filtered)
    } else setData(Object.values(edition.movies))
  }, [edition.movies, onlyWatched, user.movies])

  const renderItem = ({ item }: { item }): JSX.Element => {
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
      <Styled.List
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
          useNativeDriver: false,
        })}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Global.Separator}
        ListFooterComponent={Global.NavBarSeparator}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <DynamicHeader.Root>
            <DynamicHeader.Collapse
              size={64}
              scrollOffsetY={scrollOffsetY}
            >
              <View>
                <Styled.Header>
                  <DynamicHeader.Title>Watch List</DynamicHeader.Title>
                  <Button
                    onPress={(): void => {
                      return setOnlyWatched((value) => {
                        return !value
                      })
                    }}
                    size="action"
                    label={onlyWatched ? 'all movies' : 'unwatched'}
                    variant="secondary"
                  />
                </Styled.Header>
              </View>
            </DynamicHeader.Collapse>
            <ProgressBar
              progress={user.movies.length}
              total={edition.totalMovies}
            />

            <SearchField
              onChangeText={setSearch}
              value={search}
            />
          </DynamicHeader.Root>
        }
      />
    </Global.Screen>
  )
}

export default WatchList
