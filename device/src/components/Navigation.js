import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gestureName: ''
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 80
    }

    return (
      <GestureRecognizer
        onSwipe={ (direction, state) => this.onSwipe(direction, state) }
        config={config}
      >
      </GestureRecognizer>
    )
  }
}
