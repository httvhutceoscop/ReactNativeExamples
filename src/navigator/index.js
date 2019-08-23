'use strict'

import { Dimensions } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'

import CustomSlideMenu from '../components/SlideMenu'
import HomeScreen from '../components/Articles/ListArticles'
import Exercise_1 from '../components/Articles/Exercise_1'

import ScreenName from '../constants/ScreenName'
import Colors from '../helpers/Colors'

const { width } = Dimensions.get('window')

const routeConfigs = {
  [ScreenName.HOME]: {
    screen: HomeScreen
  },
  [ScreenName.EXERCISE_1]: {
    screen: Exercise_1
  }
}
const drawerNavigatorConfig = {
  initialRouteName: ScreenName.HOME,
  drawerWidth: width - 100,
  drawerPosition: 'left',
  // contentComponent: CustomSlideMenu,
  contentOptions: {
    activeTintColor: Colors.primary
  },
  order: [ScreenName.HOME, ScreenName.EXERCISE_1]
}

const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig)
const AppContainer = createAppContainer(DrawerNavigator)

export default AppContainer
