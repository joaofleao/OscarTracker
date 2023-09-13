import { Icon, NavBar } from '@components'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  HomeScreen,
  MovieScreen,
  NominationScreen,
  PreferencesScreen,
  ProfileScreen,
  WatchListScreen,
} from '@screens'
import { type ScreenTypes } from '@types'
import { routes } from '@utils'

const Stack = createNativeStackNavigator<ScreenTypes>()

const tabs = {
  home: {
    label: routes.logged.home,
    component: HomeScreen,
    icon: <Icon.Home />,
  },
  watchList: {
    label: routes.logged.watchList,
    component: WatchListScreen,
    icon: <Icon.CheckCircle />,
  },
  profile: {
    label: routes.logged.profile,
    component: ProfileScreen,
    icon: <Icon.Person />,
  },
}

const Logged = (
  <>
    <Stack.Screen name={routes.logged.index}>
      {(): JSX.Element => {
        return <NavBar tabs={tabs} />
      }}
    </Stack.Screen>

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

export default Logged
