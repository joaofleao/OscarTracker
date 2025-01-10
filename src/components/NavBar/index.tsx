import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import useStyles from './styles'
import Tab from './TabBar'
import useKeyboard from '@hooks/useKeyboard'
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
  const keyboardOpen = useKeyboard()
  const styles = useStyles({ keyboardOpen })

  const selected = navigation.getState()?.routes?.[0]?.state?.index ?? initialRoute
  const insets = useSafeAreaInsets()

  const screenWidth = Dimensions.get('window').width

  const window80 = (screenWidth * 80) / 100
  const navBarWidth = window80 > 400 ? 400 : window80
  const offset = (navBarWidth / tabs.length) * selected

  const labelOffsetValue = React.useRef(new Animated.Value(offset)).current

  const keyboardOffsetValue = React.useRef<Animated.Value>(new Animated.Value(0)).current

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

  React.useEffect(() => {
    Animated.spring(keyboardOffsetValue, {
      toValue: keyboardOpen ? 400 : 0,
      useNativeDriver: true,
    }).start()
  }, [keyboardOpen, keyboardOffsetValue])

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: keyboardOffsetValue }], bottom: insets.bottom + 12 },
      ]}
    >
      {tabs.map(renderTabs)}

      <Animated.View style={[styles.selector, { transform: [{ translateX: labelOffsetValue }] }]}>
        <Animated.View style={styles.background} />
      </Animated.View>
    </Animated.View>
  )
}

export default NavBar
