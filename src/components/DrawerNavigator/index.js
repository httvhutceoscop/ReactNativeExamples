import { Dimensions } from 'react-native'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import HomeDrawerComponent from '../HomeDrawer'
import WithdrawalComponent from '../Withdrawal'
import PaymentCodeComponent from '../PaymentCode'
import ScanCodeComponent from '../ScanCode'

var { width } = Dimensions.get('window')
const routeConfigs = {
  Home: {
    screen: HomeDrawerComponent
  },
  ScanCode: {
    screen: ScanCodeComponent
  },
  Withdrawal: {
    screen: WithdrawalComponent
  },
  PaymentCode: {
    screen: PaymentCodeComponent
  }
}
const drawerNavigatorConfig = {
  initialRouteName: 'Home',
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: 'red'
  },
  order: ['Home', 'Withdrawal', 'PaymentCode', 'ScanCode']
}

const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig)
const AppContainer = createAppContainer(DrawerNavigator)

export default AppContainer
