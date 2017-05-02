import React, { Component } from 'react'
import { LineGraph, VolumeLine, MarketDepth } from '../index'
import MarketHeader from './MarketHeader'
import {
  View,
  Text,
} from 'react-native'


export default class Market extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: true }}>
        <MarketHeader />
        <MarketDepth />
      </View>
    )
  }
}
