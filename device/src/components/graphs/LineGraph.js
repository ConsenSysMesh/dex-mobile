import React, { Component } from 'react'
import { VictoryLine } from 'victory-native'
import { connect } from 'react-redux'
import { Graphs } from '../../actions/index'

import {
  View,
  StyleSheet,
} from 'react-native'

class LineGraphComponent extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    console.log('graphs', Graphs.getPriceData)
  }

  render() {
    return (
      <VictoryLine />
    )
  }
}

const mapStoreToProps = (store) => {
  let mappedProps = new Object()
  mappedProps.graphs = store.graphs
  return mappedProps
}

const Navigation = connect(mapStoreToProps)(LineGraphComponent)

export default LineGraphComponent;
