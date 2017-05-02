import Promise from 'bluebird'
import levelup from 'levelup'
export default class ExAgent {
  constructor(params) {
    this.settlement = levelup('../settlement')
    this.market = params.market
    this.tokenA = params.tokenA
    this.tokenB = params.tokenB
    console.log('created ExAgent instance', this.market)
    // this.continuos()
  }

  continuous() {
    return new Promise((resolve, reject) => {
      return Promise.delay(0).then(() => {

      })
    })
  }

  // matching function adheres to ACID transaction principles
  match() {

  }


}
