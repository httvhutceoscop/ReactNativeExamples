"use strict"

import React, { Component } from 'react';
import Button from 'react-native-button';
import {
  Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from '../Header';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from './../../helpers/Colors'

const walletIcon = <Ionicons name="md-wallet" size={26} color={Colors.primary} />

export default class WithdrawalComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Withdrawal';
    let drawerIcon = () => walletIcon
    return { drawerLabel, drawerIcon };
  }
  
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column' }}>
        <HeaderComponent {...this.props} />
        <View style={{
          flex: 1,
          backgroundColor: '#e97600',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
            This is Withdrawal Screen
          </Text>
        </View>
      </View>
    );
  }
}