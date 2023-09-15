import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as Styled from './styles'
import Tab from './TabBar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tabs = createBottomTabNavigator()

interface Props {
  tabs: {
    [key: string]: {
      label: string
      icon: JSX.Element
      component: ({ navigation }: { navigation: unknown }) => JSX.Element
    }
  }
}

const NavBar = (props: Props): JSX.Element => {
  const { tabs } = props
  const insets = useSafeAreaInsets()

  const screenWidth = Dimensions.get('window').width - 28 * 2

  const labelOffsetValue = React.useRef(new Animated.Value(28)).current

  const screenOptions = {
    tabBarHideOnKeyboard: true,
    headerShown: false,

    tabBarStyle: {
      elevation: 0,
      paddingHorizontal: 28,
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      height: 64,
      paddingBottom: 0,
      marginBottom: insets.bottom,
    },
  }

  const springAnimation = (index): void => {
    Animated.spring(labelOffsetValue, {
      toValue: 28 + index * (screenWidth / Object.keys(tabs).length),
      useNativeDriver: true,
    }).start()
  }

  const tabBarButton = (tabProps, icon): JSX.Element => {
    return (
      <Tab
        icon={icon}
        {...tabProps}
      />
    )
  }

  const renderTabs = (): JSX.Element[] => {
    return Object.values(tabs).map((tab, index) => {
      return (
        <Tabs.Screen
          key={tab.label}
          name={tab.label}
          options={{
            tabBarButton: (e): JSX.Element => {
              return tabBarButton(e, tab.icon)
            },
          }}
          listeners={{
            tabPress: (): void => {
              springAnimation(index)
            },
          }}
          component={tab.component}
        />
      )
    })
  }

  return (
    <Styled.Container>
      <Tabs.Navigator screenOptions={screenOptions}>{renderTabs()}</Tabs.Navigator>

      <Styled.Selector
        style={{
          width: screenWidth / Object.keys(tabs).length,
          transform: [{ translateX: labelOffsetValue }],
        }}
      >
        <Styled.Background />
      </Styled.Selector>
    </Styled.Container>
  )
}

export default NavBar
