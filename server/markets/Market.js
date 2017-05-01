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
        return this.bookA.splice(insertA(amount) + 1, 0, amount)
      }).then(() => {
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
        return array.splice(insert())
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  insertA(amount) {
    let i = 0
    for(i; i < this.bookA.length; i++) {
      if (amount > this.bookA[i]) {
        break
      }
    }
    return i
  }

  insertB(amount) {
    let i = 0
    for(i; i < this.bookB.length; i++) {
      if (amount > this.bookB[i]) {
        break
      }
    }
    return i
  }
}
