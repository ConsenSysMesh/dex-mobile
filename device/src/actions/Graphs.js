import Promise from 'bluebird'

export default class Graphs {
  constructor() {

  }

  getPriceData() {
    return (dispatch) => {
      fetch('http://localhost:6000/price')
      .then((respone) => {
        console.log('response', response)
      }).catch((error) => {
        console.log('error')
      })
    }
  }
}
