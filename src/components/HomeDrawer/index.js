"use strict"

import React, { Component } from 'react';
import {
  Text, View, Image, TouchableHighlight,
} from 'react-native';
import HeaderComponent from '../Header';
import TabNavigator from '../TabNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from './../../helpers/Colors'

const homeIcon = <Ionicons name="md-home" size={26} color={Colors.primary} />

export default class HomeComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Home';
    let drawerIcon = () => homeIcon
    return {drawerLabel, drawerIcon};
  }
  
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <HeaderComponent {...this.props} />
        <TabNavigator />
      </View>
    );
  }
}