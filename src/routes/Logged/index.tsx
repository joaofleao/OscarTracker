import React, { useRef } from 'react'
import { Animated, Dimensions, Platform, View } from 'react-native'

import { Icon } from '../../components'
import {
  HomeScreen,
  MovieScreen,
  NominationScreen,
  PreferencesScreen,
  ProfileScreen,
  WatchListScreen,
} from '../../screens'
import { type ScreenTypes } from '../../types'
import { routes } from '../../utils'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<ScreenTypes>()
const Tab = createBottomTabNavigator()

const screenOptionsIos = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    paddingHorizontal: 28,
    paddingTop: 10,
    borderTopWidth: 1,
    height: 100,
    borderTopColor: '#27272a',
    backgroundColor: '#18181b',
  },
}
const screenOptionsAndroid = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    paddingHorizontal: 28,
    paddingTop: 20,
    elevation: 0,
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    backgroundColor: '#18181b',
  },
}

const tabs = [
  {
    name: routes.logged.home,
    icon: <Icon.Home />,
    component: HomeScreen,
  },
  {
    name: routes.logged.watchList,
    icon: <Icon.CheckCircle />,
    component: WatchListScreen,
  },
  {
    name: routes.logged.profile,
    icon: <Icon.Person />,
    component: ProfileScreen,
  },
]

const TabNavigator = (): JSX.Element => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current
  const getWidth = (Dimensions.get('window').width - 56) / tabs.length

  const renderTab = (
    name: string,
    component: any,
    position: number,
    icon: JSX.Element,
  ): JSX.Element => {
    return (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }): JSX.Element => {
            return React.cloneElement(icon, {
              color: focused ? '#f59e0b' : '#44403c',
              filled: focused,
            })
          },
        }}
        listeners={() => {
          return {
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: position,
                useNativeDriver: true,
              }).start()
            },
          }
        }}
      />
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={Platform.OS === 'ios' ? screenOptionsIos : screenOptionsAndroid}
      >
        {tabs.map((item, i) => {
          return renderTab(item.name, item.component, i * getWidth, item.icon)
        })}
      </Tab.Navigator>
      <Animated.View
        // className="w-1.5 h-1.5 absolute bottom-8 left-7 rounded-full "
        style={{ marginLeft: (getWidth - 6) / 2, transform: [{ translateX: tabOffsetValue }] }}
      >
        <View
        // className="bg-amber-500 w-full h-full absolute rounded-full"
        />
      </Animated.View>
    </View>
  )
}

export const Logged = (
  <>
    <Stack.Screen
      name={routes.logged.index}
      component={TabNavigator}
    />
    <Stack.Screen
      name={routes.logged.preferences}
      component={PreferencesScreen}
    />
    <Stack.Screen
      name={routes.logged.movie}
      component={MovieScreen}
    />
    <Stack.Screen
      name={routes.logged.nomination}
      component={NominationScreen}
    />
  </>
)
