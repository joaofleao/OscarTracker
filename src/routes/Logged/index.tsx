import Icon from '@components/Icon'
import NavBar from '@components/NavBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Category from '@screens/Logged/Category'
import EmailVerification from '@screens/Logged/EmailVerification'
import Home from '@screens/Logged/Home'
import Movie from '@screens/Logged/Movie'
import Preferences from '@screens/Logged/Preferences'
import Profile from '@screens/Logged/Profile'
import WatchList from '@screens/Logged/WatchList'
import { type ScreenTypes } from '@types'
import routes from '@utils/routes'

const Stack = createNativeStackNavigator<ScreenTypes>()

const tabs = {
  home: {
    label: routes.logged.home,
    component: Home,
    icon: <Icon.Home />,
  },
  watchList: {
    label: routes.logged.watchList,
    component: WatchList,
    icon: <Icon.CheckCircle />,
  },
  profile: {
    label: routes.logged.profile,
    component: Profile,
    icon: <Icon.Person />,
  },
}

const Logged = (
  <>
    <Stack.Screen
      name={routes.logged.index}
      options={{
        animation: 'slide_from_right',
      }}
    >
      {(): JSX.Element => {
        return <NavBar tabs={tabs} />
      }}
    </Stack.Screen>

    <Stack.Screen
      options={{ gestureEnabled: false, animation: 'slide_from_right' }}
      name={routes.logged.preferences}
      component={Preferences}
    />

    <Stack.Screen
      options={{
        animation: 'slide_from_right',
        presentation: 'transparentModal',
      }}
      name={routes.logged.movie}
      component={Movie}
    />

    <Stack.Screen
      options={{
        animation: 'slide_from_right',
      }}
      name={routes.logged.category}
      component={Category}
    />

    <Stack.Screen
      options={{
        animation: 'slide_from_right',
      }}
      name={routes.logged.emailVerification}
      component={EmailVerification}
    />
  </>
)

export default Logged
