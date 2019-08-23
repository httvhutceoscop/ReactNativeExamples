'use strict'

import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import { NavigationActions, StackNavigator } from 'react-navigation'
import dataArticles from '../../data/Articles'
import IOSIcon from 'react-native-vector-icons/Ionicons'

export default class ListArticles extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      data: [],
      error: null
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let title = 'Home';
    let headerLeft = (<TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <IOSIcon name='ios-menu' size={30} />
      </TouchableOpacity>
      )
    let headerStyle = { paddingRight: 10, paddingLeft: 15 }

    return { title };
  }

  navigateToScreen = item => () => {
    let route = item.screenName
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {article: item}
    });
    this.props.navigation.dispatch(navigateAction);
  }

  componentDidMount () {
    this.setState({
      data: dataArticles
    })
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    )
  }

  searchFilterFunction = text => {
    console.log(text)
  }

  renderHeader = () => {
    return (
      <SearchBar 
        placeholder="Type here ..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    )
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
      title={`${item.id}. ${item.title}`}
      subtitle={item.description}
      onPress={this.navigateToScreen(item)}
    />
  )

  render () {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}
