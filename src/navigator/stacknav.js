'use strict'

import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from '../components/Articles/ListArticles'
import Exercise_1 from '../components/Articles/Exercise_1'
import Exercise_2 from '../components/Articles/Exercise_2'
import Exercise_3 from '../components/Articles/Exercise_3'
import Exercise_4 from '../components/Articles/Exercise_4'
import Exercise_5 from '../components/Articles/Exercise_5'
import Exercise_6 from '../components/Articles/Exercise_6'
import Exercise_7 from '../components/Articles/Exercise_7'
import Exercise_8 from '../components/Articles/Exercise_8'
import Exercise_9 from '../components/Articles/Exercise_9'
import Exercise_10 from '../components/Articles/Exercise_10'
import Exercise_11 from '../components/Articles/Exercise_11'
import Exercise_12 from '../components/Articles/Exercise_12'
import Exercise_13 from '../components/Articles/Exercise_13'
import Exercise_14 from '../components/Articles/Exercise_14'
import Exercise_15 from '../components/Articles/Exercise_15'
import Exercise_16 from '../components/Articles/Exercise_16'
import Exercise_17 from '../components/Articles/Exercise_17'
import Exercise_18 from '../components/Articles/Exercise_18'
import Exercise_19 from '../components/Articles/Exercise_19'
import Exercise_20 from '../components/Articles/Exercise_20'

import ScreenName from '../constants/ScreenName'

const routeConfigs = {
  [ScreenName.HOME]: { screen: HomeScreen },
  [ScreenName.EXERCISE_1]: { screen: Exercise_1 },
  [ScreenName.EXERCISE_2]: { screen: Exercise_2 },
  [ScreenName.EXERCISE_3]: { screen: Exercise_3 },
  [ScreenName.EXERCISE_4]: { screen: Exercise_4 },
  [ScreenName.EXERCISE_5]: { screen: Exercise_5 },
  [ScreenName.EXERCISE_6]: { screen: Exercise_6 },
  [ScreenName.EXERCISE_7]: { screen: Exercise_7 },
  [ScreenName.EXERCISE_8]: { screen: Exercise_8 },
  [ScreenName.EXERCISE_9]: { screen: Exercise_9 },
  [ScreenName.EXERCISE_10]: { screen: Exercise_10 },
  [ScreenName.EXERCISE_11]: { screen: Exercise_11 },
  [ScreenName.EXERCISE_12]: { screen: Exercise_12 },
  [ScreenName.EXERCISE_13]: { screen: Exercise_13 },
  [ScreenName.EXERCISE_14]: { screen: Exercise_14 },
  [ScreenName.EXERCISE_15]: { screen: Exercise_15 },
  [ScreenName.EXERCISE_16]: { screen: Exercise_16 },
  [ScreenName.EXERCISE_17]: { screen: Exercise_17 },
  [ScreenName.EXERCISE_18]: { screen: Exercise_18 },
  [ScreenName.EXERCISE_19]: { screen: Exercise_19 },
  [ScreenName.EXERCISE_20]: { screen: Exercise_20 }
}

const stackNavigatorConfig = {
  initialRouteName: ScreenName.HOME
}

const stackNav = createStackNavigator(routeConfigs, stackNavigatorConfig)
const AppContainer = createAppContainer(stackNav)

export default AppContainer
