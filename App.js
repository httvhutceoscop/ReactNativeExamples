'use strict'

import React, { Fragment } from 'react'
import {
  SafeAreaView
} from 'react-native'
// import SearchableFlatList from './src/components/SearchableList'
// import DrawerNav from './src/navigator'
// import AppContainer from './src/components/DrawerNavigator'
import AppContainer from './src/navigator/stacknav'

const App = () => {
  return (
    <Fragment>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <SearchableFlatList />
      </SafeAreaView> */}
      <AppContainer />
    </Fragment>
  )
}

export default App
