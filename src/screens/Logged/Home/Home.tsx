import React from 'react'
import { Animated, FlatList, View } from 'react-native'
import { Timestamp } from 'firebase/firestore'

import NominationCaroussel from './NominationCaroussel'
import DynamicHeader from '@components/DynamicHeader'
import Global from '@components/Global'
import ProgressBar from '@components/ProgressBar'
import { useAuth } from '@features/auth'
import { useBallots } from '@features/ballots'
import { useCategories } from '@features/categories'
import { useEdition } from '@features/edition'
import { useUser } from '@features/user'
import type { HomeProps } from '@types'
import routes from '@utils/routes'

const Home = ({ navigation }: HomeProps): JSX.Element => {
  const edition = useEdition()
  const ballot = useBallots()

  const user = useUser()
  const auth = useAuth()
  const { categories } = useCategories()

  React.useEffect(() => {
    if (!auth.user.emailVerified) navigation.navigate(routes.logged.emailVerification)
  }, [auth.user.emailVerified, navigation])

  const renderNominationCaroussel = ({ item }): JSX.Element => {
    if (edition?.categories?.includes(item)) return <NominationCaroussel categoryId={item} />
  }

  const oscarDate = edition.date.seconds * 1000
  const today = Timestamp.now().seconds * 1000
  const daysLeft = Math.ceil((oscarDate - today) / (1000 * 3600 * 24))
  const scrollOffsetY = React.useRef(new Animated.Value(0)).current

  const daysLegend = {
    before: {
      title: `${daysLeft} day${daysLeft === 1 ? '' : 's'}`,
      subTitle: 'for the',
      accent: 'Academy Awards',
    },
    during: {
      title: `It's today!`,
      subTitle: 'remember to ',
      accent: 'place your bets!',
    },
    afterFinished: {
      title: 'Congratulations!',
      subTitle: 'you made',
      accent: `${ballot.points} points`,
    },
    afterNotFinished: {
      title: `It's over`,
      subTitle: 'you made',
      accent: `${ballot.points} points`,
    },
    afterNoResults: {
      title: `It's over`,
      subTitle: 'awaiting results,',
      accent: `hold on!`,
    },
  }

  const getTitle = (text: 'title' | 'subTitle' | 'accent'): string => {
    if (Object.keys(edition.winners || []).length === edition.categories.length) {
      if (user.movies.length === Object.keys(edition.movies).length)
        return daysLegend.afterFinished[text]
      else return daysLegend.afterNotFinished[text]
    }

    if (daysLeft > 0) return daysLegend.before[text]
    if (daysLeft === 0) return daysLegend.during[text]

    return daysLegend.afterNoResults[text]
  }

  return (
    <Global.Screen>
      <FlatList
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
          useNativeDriver: false,
        })}
        data={Object.keys(categories)}
        renderItem={renderNominationCaroussel}
        ItemSeparatorComponent={Global.Separator}
        ListFooterComponent={Global.NavBarSeparator}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <DynamicHeader.Root>
            <DynamicHeader.Collapse scrollOffsetY={scrollOffsetY}>
              <View>
                <DynamicHeader.Title>{getTitle('title')}</DynamicHeader.Title>
                <DynamicHeader.SubTitle>
                  {getTitle('subTitle')}{' '}
                  <DynamicHeader.Accent>{getTitle('accent')}</DynamicHeader.Accent>
                </DynamicHeader.SubTitle>
              </View>
            </DynamicHeader.Collapse>
            <ProgressBar
              progress={user.movies.length}
              total={Object.keys(edition.movies).length}
            />
          </DynamicHeader.Root>
        }
      />
    </Global.Screen>
  )
}

export default Home
