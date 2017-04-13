// import components
import React, { Component } from 'react'
import { Market } from './index'
import {
  View,
  StyleSheet,
} from 'react-native'

import { stackNavigator } from 'react-navigation'

export const appNavigator = stackNavigator({
  Market: { screen: Market }
})

export default class RouterComponent extends Component {
  render() {
    return (
      <Router
        firstRouter={route1}
        headerStyle={styles.header}
        ref={'router'}
      />
    )
  }
}

const styles = StyleSheet.create({
  header: {
	backgroundColor: '#5cafec',
  },
});
