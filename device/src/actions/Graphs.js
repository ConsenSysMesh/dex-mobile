import Promise from 'bluebird'
import SocketIOClient from 'socket.io-client'

export default class Graphs {
  constructor() {
    this.socket = SocketIOClient('http://localhost:3000')
  }

  dataFeed() {
    socket.on('price-history', (message) => {
      console.log('message', message)
    })
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
