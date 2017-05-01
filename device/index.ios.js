/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Navigation, Market } from './src/components/index'
import Router from './src/components/Router'
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
          <Market />
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
    backgroundColor: "hsl(220, 10%, 40%)",
    color: "#E8E8EE",
  },
});

AppRegistry.registerComponent('device', () => device);
