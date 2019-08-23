"use strict"

import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from './../../helpers/Colors'

const walletIcon = <Ionicons name="md-wallet" size={26} color={Colors.primary} />

export default class MyWalletComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = 'My Wallet';
    let tabBarIcon = () => walletIcon

    return { tabBarLabel, tabBarIcon };
  }
  
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#007256',
        alignItems: 'center',
        justifyContent: 'center'
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is My Wallet Screen</Text>
      </View>
    );
  }
}