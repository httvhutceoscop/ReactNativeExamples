"use strict"

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const promotionIcon = <Ionicons name="md-gift" size={26} color="#0067a7" />;

export default class PromotionComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = 'Promotion';
    let tabBarIcon = () => promotionIcon

    return { tabBarLabel, tabBarIcon };
  }
  
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#e97600',
        alignItems: 'center',
        justifyContent: 'center'
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is Promotion Screen</Text>
      </View>
    );
  }
}