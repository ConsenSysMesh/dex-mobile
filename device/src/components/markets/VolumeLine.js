import React, { Component } from 'react'
import {
  VictoryLine
} from 'victory-native'
import {
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { Graphs } from '../../actions/index'

class VolumeLineComponent extends Component {
  constructor() {
    super()
    this.entries = 0
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(Graphs.volumeDataFeed())
  }

  render() {
    const { volume_history } = this.props.graphs
    this.entries = volume_history.length
    if(this.entries >=3) {
      return (
        <VictoryLine
          data={volume_history}
          style={{data:
            {stroke: "hsl(187, 47%, 55%)", strokeWidth: 2}
          }}
          x="date"
          y="volume"
        />
      )
    } else {
      return (
        <View />
      )
    }
  }
}

const mapStoreToProps = (store) => {
  let mappedProps = new Object()
  mappedProps.graphs = store.graphs
  return mappedProps
}

const VolumeLine = connect(mapStoreToProps)(VolumeLineComponent)

export default VolumeLine
