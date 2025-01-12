import React from 'react'
import { Animated, FlatList, View } from 'react-native'

import useStyles from './styles'
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
  const styles = useStyles()

  const [search, setSearch] = React.useState<string>('')
  const [filter, setFilter] = React.useState<'all movies' | 'watched' | 'unwatched'>('all movies')

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
    if (filter === 'unwatched') {
      const filtered = Object.values(edition.movies).filter((movie) => {
        return !user.movies.includes(movie.imdb)
      })
      setData(filtered)
    } else if (filter === 'watched') {
      const filtered = Object.values(edition.movies).filter((movie) => {
        return user.movies.includes(movie.imdb)
      })
      setData(filtered)
    } else setData(Object.values(edition.movies))
  }, [edition.movies, filter, user.movies])

  const renderItem = ({ item }: { item }): JSX.Element => {
    return (
      <View style={styles.item}>
        <NomineeCard
          onPress={(): void => {
            navigation.navigate(routes.logged.movie, { movieId: item.imdb })
          }}
          image={item['en-US'].image}
          title={item['en-US'].name}
          id={item.imdb}
        />
      </View>
    )
  }

  return (
    <Global.Screen>
      <FlatList
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
              <View style={styles.header}>
                <DynamicHeader.Title>Watch List</DynamicHeader.Title>
              </View>
            </DynamicHeader.Collapse>
            <ProgressBar
              progress={user.movies.length}
              total={Object.keys(edition.movies).length}
            />

            <SearchField
              onChangeText={setSearch}
              value={search}
            />
          </DynamicHeader.Root>
        }
      />

      <Global.Footer considerNavBar>
        <View style={styles.floatingButton}>
          <Button
            onPress={(): void => {
              return setFilter((value) => {
                if (value === 'all movies') return 'watched'
                if (value === 'watched') return 'unwatched'
                else return 'all movies'
              })
            }}
            size="action"
            label={filter}
            variant="outlined"
          />
        </View>
      </Global.Footer>
    </Global.Screen>
  )
}

export default WatchList
