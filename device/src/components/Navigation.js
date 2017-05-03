import { Main } from './index'
// import Router from './Router'
// console.log('Router', Router)
import store from '../store'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
import { stackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

class NavigationComponent extends Component {
  constructor(props) {
    super(props)
  }

  onSwipe(direction, state) {
    const { dispatch } = this.props
    console.log('direction', direction)
    // switch (direction) {
    //   case 'SWIPE_DOWN':
    //     dispatch({type: 'SWIPE_DOWN'})
    //     break;
    //   case 'SWIPE_UP':
    //     dispatch({type: 'SWIPE_UP'})
    //     break;
    //   case 'SWIPE_RIGHT':
    //     dispatch({type: 'SWIPE_RIGHT'})
    //     break;
    //   case 'SWIPE_LEFT':
    //     dispatch({type: 'SWIPE_LEFT'})
    //     break;
    //   default:
    //     break;
    // }
  }

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 150
    };
    console.log('this.props.x', this.props)
    return (
      <GestureRecognizer
        onSwipe={ (direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
          flex: 1,
        }}
      >
        <Text>X-axis{this.props.navigation.x}</Text>
        <Text>Y-axis{this.props.navigation.y}</Text>

      </GestureRecognizer>
    )
  }
}

const mapStoreToProps = (store) => {
  let mappedProps = new Object()
  mappedProps.navigation = store.navigation
  return mappedProps
}

const Navigation = connect(mapStoreToProps)(NavigationComponent)

export default Navigation
