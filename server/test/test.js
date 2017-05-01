import Market from '../markets/Market'
import Promise from 'bluebird'

let permutation

export function createMarket(tokenA, tokenB) {
  return new Promise((resolve, reject) => {
    return Promise.delay(0).then(() => {
      return permutation = new Market()
    }).then(() => {

      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function submitSell() {
  return new Promise((resolve, reject) => {
    return permutation.sellA(10)
    .then(() => {
      return permutation.sellB(10)
    }).then(() => {
      console.log('permutation', permutation)
      resolve(true)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function test() {
  return new Promise((resolve, reject) => {
    return Promise.delay(0).then(() => {
      return createMarket()
    }).then(() => {
      return submitSell()
    }).then(() => {
      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}

test()
