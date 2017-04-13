// import components
import React, { Component } from 'react'
import { Market } from './index'
import {
  View,
  StyleSheet,
} from 'react-native'
import Router from 'react-native-simple-router'


// establish routes
const route = {
  name: 'market',
  component: Market,
  sceneConfig: Navigator.SceneConfigs.FloatFromRight
}

export default class RouterComponent extends Component {
  render() {
    return (
      <Router
        firstRouter={route}
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
