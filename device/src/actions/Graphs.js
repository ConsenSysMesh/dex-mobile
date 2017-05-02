import Promise from 'bluebird'
import SocketIOClient from 'socket.io-client'

export default class Graphs {
  constructor() {
    this.socket = SocketIOClient('http://localhost:3000', {jsonp: false});
    this.socket.on('connected', () => {
      console.log('device connected to server')
    })
  }

  priceDataFeed() {
    return (dispatch) => {
      this.socket.on('price', (price_obj) => {
        console.log('price_obj(device)', price_obj)
        dispatch({ type: 'UPDATE_PRICE_HISTORY', result: price_obj})
      })
    }
  }

  volumeDataFeed() {
    return (dispatch) => {
      this.socket.on('volume', (volume_obj) => {
        console.log('volume_obj(device)', volume_obj)
        dispatch({ type: 'UPDATE_VOLUME_HISTORY', result: volume_obj })
      })
    }
  }
  marketDepthDataFeed() {
    return (dispatch) => {
      this.socket.on('market_depth', (depth_obj) => {
        console.log('depth_obj(device)', depth_obj)
        dispatch({ type: 'UPDATE_MARKET_DEPTH', result: depth_obj})
      })
    }
  }
}
