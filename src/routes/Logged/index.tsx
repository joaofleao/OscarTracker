import Icon from '@components/Icon'
import NavBar from '@components/NavBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@screens/Logged/HomeScreen'
import MovieScreen from '@screens/Logged/MovieScreen'
import NominationScreen from '@screens/Logged/NominationScreen'
import PreferencesScreen from '@screens/Logged/PreferencesScreen'
import ProfileScreen from '@screens/Logged/ProfileScreen'
import WatchListScreen from '@screens/Logged/WatchListScreen'
import { type ScreenTypes } from '@types'
import routes from '@utils/routes'

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
      options={{ gestureEnabled: false }}
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
