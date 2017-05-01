import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class MarketHeader extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={{ alignItems: true }}>
        <Text style={{ color: "#E8E8EE", fontSize: 50}}>DEX/GNO</Text>
      </View>
    )
  }
}
