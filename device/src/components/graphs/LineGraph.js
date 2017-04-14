import React, { Component } from 'react'
import { VictoryLine } from 'victory-native'
import { connect } from 'react-redux'
import { Graphs } from '../../actions/index'

import {
  View,
  StyleSheet,
} from 'react-native'

class LineGraphComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch } = this.props;
    console.log('this.props', this.props)
    console.log('dispatch', dispatch)
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

const LineGraph = connect(mapStoreToProps)(LineGraphComponent)

export default LineGraph;
