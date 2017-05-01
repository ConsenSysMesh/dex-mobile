import Promise from 'bluebird'

/**
 * Market
 * microservice container for Mob instance
 */
export default class Market {
  constructor() {
    // this.tokenA = tokenA
    // this.tokenB = tokenB
    this.bookA = []
    this.bookB = []

    console.log('created Market class, yuhhh')
  }

  sellA(amount) {
    console.log('hit sell A')
    return new Promise((resolve, reject) => {
      return Promise.delay(0)
      .then(() => {
        this.bookA.push(amount)
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  sellB(amount) {
    console.log('hit sell B')
    return new Promise((resolve, reject) => {
      return Promise.delay(0)
      .then(() => {
        this.bookB.push(amount)
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
