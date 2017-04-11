import { Main } from './index'

import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gestureName: 'asdf'
    }
  }

  onSwipe(getsureName, gestureState) {
    // console.log('gestureName', gestureName, 'gestureState', gestureState)
    // switch (gestureName) {
    //   case 'SWIPE_DOWN':
    //     this.setState(gestureName: gestureName)
    //     break;
    //   case 'SWIPE_UP':
    //     this.setState(gestureName: gestureName)
    //     break;
    //   case 'SWIPE_RIGHT':
    //     this.setState(gestureName: gestureName)
    //     break;
    //   case 'SWIPE_LEFT':
    //     this.setState(gestureName: gestureName)
    //     break;
    //   default:
    //     break;
    // }
    console.log('recognized swipe')
  }

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 80
    };
    console.log('Main(nav)', Main)
    return (
      <GestureRecognizer
        onSwipe={ (direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
          flex: 1
        }}
      >
        <Text>Recieved gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>




    )
  }
}
