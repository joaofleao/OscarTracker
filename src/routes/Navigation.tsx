import Icon from '@components/Icon'
import HeaderBar from '@components/navigation/HeaderBar'
import NavBar from '@components/navigation/NavBar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Category from '@screens//Category'
import Home from '@screens//Home'
import Movie from '@screens//Movie'
import PasswordRecovery from '@screens//PasswordRecovery'
import Preferences from '@screens//Preferences'
import WatchList from '@screens//WatchList'
import Profile from '@screens/Profile'
import Settings from '@screens/Settings'
import SignIn from '@screens/SignIn'
import SignUp from '@screens/SignUp'
import { type ScreenTypes } from '@types'
import routes from '@utils/routes'

const Stack = createNativeStackNavigator<ScreenTypes>()
const Tabs = createBottomTabNavigator()

const initialRoute = 0

const tabs = [
  {
    label: routes.home,
    component: Home,
    icon: <Icon.Oscar />,
  },
  {
    label: routes.watchList,
    component: WatchList,
    icon: <Icon.MovieRoll />,
  },
]

const renderTabs = (): JSX.Element[] => {
  return tabs.map((tab) => {
    return (
      <Tabs.Screen
        key={tab.label}
        name={tab.label}
        component={tab.component}
      />
    )
  })
}

const screenOptions = {
  tabBarHideOnKeyboard: true,
  headerShown: false,
}

const renderNavBar = (): JSX.Element => {
  return (
    <>
      <HeaderBar />
      <NavBar
        tabs={tabs}
        initialRoute={initialRoute}
      />
    </>
  )
}

const renderScreens = (): JSX.Element => {
  return (
    <Tabs.Navigator
      initialRouteName={tabs[initialRoute].label}
      backBehavior="none"
      screenOptions={screenOptions}
      tabBar={renderNavBar}
    >
      {renderTabs()}
    </Tabs.Navigator>
  )
}
const Routes = (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.index}>{renderScreens}</Stack.Screen>

      <Stack.Screen
        options={{ gestureEnabled: true, animation: 'slide_from_right' }}
        name={routes.profile}
        component={Profile}
      />

      <Stack.Screen
        options={{ gestureEnabled: true, animation: 'slide_from_right' }}
        name={routes.settings}
        component={Settings}
      />

      <Stack.Screen
        options={{ gestureEnabled: false, animation: 'slide_from_right' }}
        name={routes.preferences}
        component={Preferences}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.category}
        component={Category}
      />

      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        name={routes.movie}
        component={Movie}
      />

      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        name={routes.signIn}
        component={SignIn}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.signUp}
        component={SignUp}
      />
      <Stack.Screen
        options={{
          animation: 'slide_from_right',
        }}
        name={routes.forgotPassword}
        component={PasswordRecovery}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
