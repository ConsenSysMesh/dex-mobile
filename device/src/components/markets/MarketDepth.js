import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import {
  VictoryBar,
} from 'victory-native'
import { connect } from 'react-redux'

export class MarketDepthComponent extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <VictoryBar

      />
    )
  }
}

const mapStoreToProps = (store) => {
  return store.graphs
}

export default MarketDepth = connect(mapStoreToProps)(MarketDepthComponent)
