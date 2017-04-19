import Promise from 'bluebird'
import SocketIOClient from 'socket.io-client'

export default class Graphs {
  constructor() {
    this.socket = SocketIOClient('http://localhost:6000', {jsonp: false})
  }

  priceDataFeed() {
    return (dispatch) => {
      console.log("this.socket", this.socket)
      this.socket.on('connected' {
        console.log('client is connected')
      })
      this.socket.on('price-history', (price_obj) => {
        console.log('price_obj', price_obj)
      })
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
