'use strict'

import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from './../../helpers/Colors'

class CustomLeftHeader extends Component {
  render () {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.openDrawer()}>
        <Ionicons name='md-menu' size={32} color={Colors.white} />
      </TouchableOpacity>
    )
  }
}

export default class HeaderComponent extends Component {
  render () {
    return (
      <View>
        <Header
          leftComponent={<CustomLeftHeader {...this.props} />}
          centerComponent={{ text: 'Viet ReactNative', style: { color: '#fff', fontSize: 20 } }}
        />
      </View>
    )
  }
}
