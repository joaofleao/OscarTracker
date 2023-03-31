import React, { useRef } from 'react'
import { Animated, Dimensions, Platform, View } from 'react-native'
import colors from 'tailwindcss/colors'

import { IconComponent, ModelComponent } from '../../components'
import { HomeScreen, MovieScreen, NominationScreen, PreferencesScreen, ProfileScreen, WatchListScreen } from '../../screens'
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
    paddingTop: 20,
    marginBottom: 10,
    borderTopWidth: 1,
    borderTopColor: colors.zinc[800],
    backgroundColor: colors.zinc[900],
  },
}
const screenOptionsAndroid = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    paddingHorizontal: 28,
    paddingTop: 20,
    elevation: 0,
    marginBottom: 40,
    borderTopWidth: 1,
    borderTopColor: colors.zinc[800],
    backgroundColor: colors.zinc[900],
  },
}

const tabs = [
  {
    name: routes.logged.home,
    icon: 'home-tab',
    component: HomeScreen,
  },
  {
    name: routes.logged.watchList,
    icon: 'check-tab',
    component: WatchListScreen,
  },
  {
    name: routes.logged.profile,
    icon: 'user-tab',
    component: ProfileScreen,
  },
]

function TabNavigator() {
  const tabOffsetValue = useRef(new Animated.Value(0)).current
  const getWidth = (Dimensions.get('window').width - 56) / tabs.length

  const renderTab = (name: string, component: any, position: number, icon: string) => {
    return (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused }) => (
            <IconComponent
              name={focused ? icon.concat('-filled') : icon}
              className="absolute font text-2xl"
              style={{ color: focused ? colors.amber[500] : colors.stone[700] }}
            />
          ),
        }}
        listeners={() => ({
          tabPress: () => {
            Animated.spring(tabOffsetValue, {
              toValue: position,
              useNativeDriver: true,
            }).start()
          },
        })}
      />
    )
  }
  return (
    <ModelComponent bottom={false}>
      <Tab.Navigator screenOptions={Platform.OS === 'ios' ? screenOptionsIos : screenOptionsAndroid}>
        {tabs.map((item, i) => {
          return renderTab(item.name, item.component, i * getWidth, item.icon)
        })}
      </Tab.Navigator>

      <Animated.View
        className="w-1.5 h-1.5 relative bottom-8 left-7 rounded-full"
        style={{ marginLeft: (getWidth - 6) / 2, transform: [{ translateX: tabOffsetValue }] }}
      >
        <View className="bg-amber-500 w-full h-full absolute rounded-full" />
      </Animated.View>
    </ModelComponent>
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
