'use strict'

import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from './../../helpers/Colors'

const walletIcon = <Ionicons name='md-wallet' size={26} color={Colors.primary} />

export default class MyExercise_4 extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const article = navigation.getParam('article', 'NO-ARTICLE');
    let title = article.title

    return { title };
  }

  changeTitleText = () => {
    const that = this;
    const newArticle = {title: 'New Title'}
    that.props.navigation.setParams({
      article: newArticle
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity style={styles.button} onPress={this.changeTitleText}>
          <Text style={styles.text}>Click Here to Change The Activity Action Bar Screen Title Text</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  button: {

    width: '80%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#00BCD4',
    borderRadius: 7,
    margin:10
  },
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10
  }
});