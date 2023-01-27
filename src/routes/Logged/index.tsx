import React, { useRef } from 'react'
import { Dimensions, Animated, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'tailwindcss/colors'

import { routes } from '../../utils'
import { IconComponent, ModelComponent } from '../../components'
import { HomeScreen, ProfileScreen, WatchListScreen, MovieScreen } from '../../screens'
import { ScreenTypes } from '../../types'

const Stack = createNativeStackNavigator<ScreenTypes>()
const Tab = createBottomTabNavigator()

const screenOptions = {
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

const HomeTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={routes.logged.home}
      component={HomeScreen}
      initialParams={{ filter: '' }}
    />
    <Stack.Screen
      name={routes.logged.movie}
      component={MovieScreen}
    />
  </Stack.Navigator>
)

const WatchListTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={routes.logged.watchList}
      component={WatchListScreen}
    />
  </Stack.Navigator>
)

const UserTab = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={routes.logged.profile}
      component={ProfileScreen}
    />
  </Stack.Navigator>
)

const tabs = [
  {
    name: 'HomeTab',
    component: HomeTab,
    icon: 'home-tab',
  },
  {
    name: 'WatchListTab',
    component: WatchListTab,
    icon: 'check-tab',
  },
  {
    name: 'UserTab',
    component: UserTab,
    icon: 'user-tab',
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
          tabBarIcon: ({ focused }) => (
            <IconComponent
              name={focused ? icon.concat('-filled') : icon}
              className='absolute font text-2xl'
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
      <Tab.Navigator screenOptions={screenOptions}>
        {tabs.map((item, i) => {
          return renderTab(item.name, item.component, i * getWidth, item.icon)
        })}
      </Tab.Navigator>

      <Animated.View
        className='w-1.5 h-1.5 relative bottom-8 left-7 rounded-full'
        style={{ marginLeft: (getWidth - 6) / 2, transform: [{ translateX: tabOffsetValue }] }}>
        <View className='bg-amber-500 w-full h-full absolute rounded-full' />
      </Animated.View>
    </ModelComponent>
  )
}

export const Logged = (
  <>
    <Stack.Screen
      name={routes.logged.home}
      component={TabNavigator}
    />
  </>
)
