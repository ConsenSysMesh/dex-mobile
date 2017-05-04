import Market from '../markets/Market'
import Promise from 'bluebird'
import ExAgent from '../exAgent/ExAgent'

let exAgent
let market
let sellA_obj = {
  amount: 3000,
  price: 1.25,
}
let sellB_obj = {
  amount: 5000,
  price: 1.15,
}
const tokenA = '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a'
const tokenB = '0xbbf289d846208c16edc8474705c748aff07732db'

export function createMarket(tokenA, tokenB) {
  return new Promise((resolve, reject) => {
    return Promise.delay(0).then(() => {
      return market = new Market({
        tokenA: tokenB,
        tokenB: tokenB,
      })
    }).then(() => {
      return exAgent = new ExAgent({
        market: market
        tokenA: tokenA,
        tokenB: tokenB,
      })
    .then(() => {
      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function submitSell() {
  console.log('hit submit sell')
  return new Promise((resolve, reject) => {
    return market.sellA(sellA_obj)
    .then(() => {
      return market.sellB(sellB_obj)
    }).then(() => {
      console.log('market', market)
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
