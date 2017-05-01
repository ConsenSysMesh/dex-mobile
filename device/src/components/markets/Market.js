import React, { Component } from 'react'
import { LineGraph } from '../index'
import MarketHeader from './MarketHeader'
import {
  View,
  Text,
} from 'react-native'
import {
  VictoryAxis,
} from 'victory-native'

export default class Market extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <MarketHeader />
        <LineGraph />
      </View>
    )
  }
}
