import React, { Component } from 'react'
import {
  VictoryLine
} from 'victory-native'
import { connect } from 'react-redux'

class VolumeLineComponent extends Component {
  constructor() {
    super()
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
