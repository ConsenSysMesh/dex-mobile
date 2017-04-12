/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Navigation } from './src/components/index'
// import Router from './src/components/Router'
// console.log('Router', Router)
import store from './src/store'
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class device extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>

        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8EE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('device', () => device);
