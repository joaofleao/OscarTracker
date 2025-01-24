import React from 'react'
import { Animated, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import useStyles from './styles'
import Tab from './TabBar'
import ProgressBar from '@components/ProgressBar'
import { useEdition } from '@features/edition'
import { useWatchedMovies } from '@features/watchedMovies'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { type ScreenTypes } from '@types'

type ScreenNavigationProp = NativeStackNavigationProp<ScreenTypes>

interface Props {
  tabs: {
    label: string
    icon: JSX.Element
    component: ({ navigation }: { navigation: unknown }) => JSX.Element
  }[]
  initialRoute: number
}

const NavBar = (props: Props): JSX.Element => {
  const navigation = useNavigation<ScreenNavigationProp>()
  const { tabs, initialRoute } = props
  const styles = useStyles()
  const { editionWatchedMovies } = useWatchedMovies()
  const edition = useEdition()

  const selected = navigation.getState()?.routes?.[0]?.state?.index ?? initialRoute
  const insets = useSafeAreaInsets()

  const selectorOffset = React.useRef(new Animated.Value(0)).current

  const springAnimation = (index): void => {
    Animated.spring(selectorOffset, {
      toValue: 80 * index,
      useNativeDriver: true,
    }).start()
  }

  const renderTabs = (tab, index): JSX.Element => {
    const handlePress = (): void => {
      springAnimation(index)
      navigation.navigate(tab.label)
    }

    return (
      <Tab
        key={tab.label}
        onPress={handlePress}
        selected={index === selected}
        icon={tab.icon}
      />
    )
  }

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Animated.View style={[styles.selector, { transform: [{ translateX: selectorOffset }] }]}>
          <Animated.View style={styles.background} />
        </Animated.View>
        {tabs.map(renderTabs)}
      </View>

      <View style={styles.progressContainer}>
        <ProgressBar
          progress={Object.values(editionWatchedMovies).length}
          total={Object.keys(edition.movies).length}
        />
      </View>
    </View>
  )
}

export default NavBar
