import { graphql, buildSchema } from 'graphql'

// Construct a schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello World'
  },
}

graphql(schema, `{ hello }`, root).then((response) => {
  console.log(response)
})
