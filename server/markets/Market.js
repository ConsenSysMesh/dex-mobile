import Promise from 'bluebird'

/**
 * Market
 * microservice container for Mob instance
 */
export default class Market {
  constructor(params) {
    this.tokenA = params.tokenA
    this.tokenB = params.tokenB
    this.bookA = []
    this.bookB = []
  }

  sellA(sell_obj) {
    return new Promise((resolve, reject) => {
      return Promise.delay(0)
      .then(() => {
        return this.bookA.splice(this.insertA(sell_obj) + 1, 0, sell_obj)
      }).then(() => {
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  sellB(sell_obj) {
    return new Promise((resolve, reject) => {
      return Promise.delay(0)
      .then(() => {
        return this.bookB.splice(this.insertB(sell_obj) + 1, 0, sell_obj)
      }).then(() => {
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  insertA(sell_obj) {
    let i = 0
    for(i; i < this.bookA.length; i++) {
      if (sell_obj.price < this.bookA[i]) {
        break
      }
    }
    return i
  }

  insertB(sell_obj) {
    let i = 0
    for(i; i < this.bookB.length; i++) {
      if (sell_obj.price < this.bookB[i]) {
        break
      }
    }
    return i
  }
}
