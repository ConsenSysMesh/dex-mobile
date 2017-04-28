import { buildSchema } from 'grqphql'

export const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

export const root = {
  hello: () => {
    return 'yo yo, whats happenin'
  },
}
