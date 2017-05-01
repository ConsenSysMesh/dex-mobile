import Promise from 'bluebird'
import SocketIOClient from 'socket.io-client'

export default class Graphs {
  constructor() {

  }

  priceDataFeed() {
    return (dispatch) => {
      this.socket = SocketIOClient('http://localhost:3000', {jsonp: false});
      this.socket.on('connected', () => {
        console.log('device connected to server')
      })
      this.socket.on('price', (price_obj) => {
        console.log('price_obj(device)', price_obj)
        dispatch({ type: 'UPDATE_PRICE_HISTORY', result: price_obj})
      })
      console.log('socket(device)', this.socket)
    }
  }



  // getPriceData() {
  //   return (dispatch) => {
  //     fetch('http://localhost:6000/price')
  //     .then((response) => {
  //       console.log('response', response)
  //     }).catch((error) => {
  //       console.log('error', error)
  //     })
  //   }
  // }
}
