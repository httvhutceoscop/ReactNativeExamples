'use strict'

import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Base64 } from 'js-base64';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from './../../helpers/Colors'

const walletIcon = <Ionicons name='md-wallet' size={26} color={Colors.primary} />

export default class MyExercise_2 extends Component {

  constructor() {
    super()

    this.state = {
      Password_Holder: '',
      update_data: '',
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let title = 'My Wallet';
  //   let tabBarIcon = () => walletIcon

    return { title };
  }

  encrypt_password = () => {
    var temp = Base64.encode(this.state.Password_Holder);
    this.setState({ update_data: temp });
  }

  decrypt_password = () => {
    var temp2 = Base64.decode(this.state.update_data);
    this.setState({ update_data: temp2 });
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <TextInput
          placeholder="Enter Password Here"
          onChangeText={data => this.setState({ Password_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity style={styles.button} onPress={this.encrypt_password} >
          <Text style={styles.text}>Click Here to Encode Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.decrypt_password} >
          <Text style={styles.text}>Click Here to Decode Password</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>
          {this.state.update_data}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {

    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#01579B',
    borderRadius: 3,
    marginTop: 20
  },

  textInputStyle: {

    textAlign: 'center',
    height: 42,
    width: '80%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }
});
