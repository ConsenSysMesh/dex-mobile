import Promise from 'bluebird'
import { simulationLoop } from '../gauss/simulation'
import Market from '../markets/Market'

let market

const tokenA = '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a'
const tokenB = '0xbbf289d846208c16edc8474705c748aff07732db'

export function runSimulation() {
  return new Promise((resolve, reject) => {
    return Promise.delay(0).then(() => {
      return market = new Market ({
        tokenA: tokenA,
        tokenB: tokenB,
      })
    }).then(() => {
      return simulationLoop()
    }).then(() => {
      resolve(true)
    }).catch((err) => {
      reject(true)
    })
  })
}

runSimulation()
