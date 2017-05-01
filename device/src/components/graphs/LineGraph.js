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
    console.log('this.props', this.props)
    console.log('dispatch', dispatch)
    dispatch(Graphs.priceDataFeed())
  }

  render() {
    console.log('this.props', this.props)
    const { price_history } = this.props.graphs
    console.log('price_history', price_history)
    let mock_data=[
      {price: 35000, loss: 2000, date: "1493671627607"},
      {price: 42000, loss: 8000, date: "1493672627607"},
      {price: 55000, loss: 5000, date: "1493673627607"}
    ]
    console.log('price_history', price_history)
    console.log('mock_data', mock_data)
    let mock_data2 = price_history
    this.entries = price_history.length;
    if (this.entries >= 3) {
      return (
        <VictoryLine
          data={price_history}
          style={{data:
            {stroke: "red", strokeWidth: 4}
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

export default LineGraph;
