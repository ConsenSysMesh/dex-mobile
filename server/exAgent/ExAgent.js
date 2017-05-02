export default class ExAgent {
  constructor(params) {
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



  match() {

  }


}
