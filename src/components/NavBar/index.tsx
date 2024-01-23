import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as Styled from './styles'
import Tab from './TabBar'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { type ScreenTypes } from '@types'

type ProfileScreenNavigationProp = NativeStackNavigationProp<ScreenTypes>

interface Props {
  tabs: {
    label: string
    icon: JSX.Element
    component: ({ navigation }: { navigation: unknown }) => JSX.Element
  }[]
  initialRoute: number
}

const NavBar = (props: Props): JSX.Element => {
  const { tabs, initialRoute } = props

  const navigation = useNavigation<ProfileScreenNavigationProp>()

  const selected = navigation.getState()?.routes?.[0]?.state?.index ?? initialRoute
  const insets = useSafeAreaInsets()

  const screenWidth = Dimensions.get('window').width

  const window80 = (screenWidth * 80) / 100
  const navBarWidth = window80 > 400 ? 400 : window80
  const offset = (navBarWidth / tabs.length) * selected

  const labelOffsetValue = React.useRef(new Animated.Value(offset)).current

  const springAnimation = (index): void => {
    Animated.spring(labelOffsetValue, {
      toValue: (navBarWidth / tabs.length) * index,
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
    <Styled.Container style={{ bottom: insets.bottom + 12 }}>
      {tabs.map(renderTabs)}

      <Styled.Selector
        style={{
          transform: [{ translateX: labelOffsetValue }],
        }}
      >
        <Styled.Background />
      </Styled.Selector>
    </Styled.Container>
  )
}

export default NavBar
