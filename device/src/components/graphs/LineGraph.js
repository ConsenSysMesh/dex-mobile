import React, { Component } from 'react'
import { VictoryBar } from 'victory-native'

import {
  View,
  StyleSheet,
} from 'react-native'

export default class LineGraph extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <VictoryBar />
    )
  }
}
