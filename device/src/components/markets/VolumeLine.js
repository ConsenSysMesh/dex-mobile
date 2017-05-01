import React, { Component } from 'react'
import {
  VictoryLine
} from 'victory-native'
import { connect } from 'react-redux'
import { Graphs } from '../../actions/index'

class VolumeLineComponent extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(Graphs.volumeDataFeed())
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

const VolumeLine = connect(mapStoreToProps)(VolumeLineComponent)

export default VolumeLine
