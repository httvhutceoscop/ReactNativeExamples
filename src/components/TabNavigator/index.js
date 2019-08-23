'use strict'

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomeComponent from '../Home'
import PromotionComponent from '../Promotion'
import TransactionHistoryComponent from '../TransactionHistory'
import MyWalletComponent from '../MyWallet'
import Colors from './../../helpers/Colors'

const routeConfigs = {
  Home: {
    screen: HomeComponent
  },
  Promotion: {
    screen: PromotionComponent
  },
  Transaction: {
    screen: TransactionHistoryComponent
  },
  MyWallet: {
    screen: MyWalletComponent
  }
}

const tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Colors.primary,
    labelStyle: {
      fontSize: 13
    },
    style: {
      backgroundColor: 'lightgray',
      padding: -10
    }
  },
  order: ['Home', 'Promotion', 'Transaction', 'MyWallet']
}

const AppNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig)
// const AppContainer = createAppContainer(AppNavigator)

export default AppNavigator
