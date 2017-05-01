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
    this.entries = 0
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(Graphs.priceDataFeed())
  }

  render() {
    const { price_history } = this.props.graphs
    this.entries = price_history.length;
    if (this.entries >= 3) {
      return (
        <VictoryLine
          data={price_history}
          style={{data:
            {stroke: "hsl(187, 47%, 55%)", strokeWidth: 2}
          }}
          x="date"
          y="price"
        />
      )
    } else {
      return <View />
    }
  }
}

const mapStoreToProps = (store) => {
  let mappedProps = new Object()
  mappedProps.graphs = store.graphs
  return mappedProps
}

const LineGraph = connect(mapStoreToProps)(LineGraphComponent)

export default LineGraph
