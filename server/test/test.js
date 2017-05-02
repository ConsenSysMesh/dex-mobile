import Market from '../markets/Market'
import Promise from 'bluebird'

let permutation
let sellA_obj = {
  amount: 3000,
  price: 1.25,
}
let sellB_obj = {
  amount: 5000,
  price: 1.15,
}

export function createMarket(tokenA, tokenB) {
  return new Promise((resolve, reject) => {
    return Promise.delay(0).then(() => {
      return permutation = new Market({
        tokenA: '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a',
        tokenB: '0xbbf289d846208c16edc8474705c748aff07732db'
      })
    }).then(() => {

      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function submitSell() {
  console.log('hit submit sell')
  return new Promise((resolve, reject) => {
    return permutation.sellA(sellA_obj)
    .then(() => {
      return permutation.sellB(sellB_obj)
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
