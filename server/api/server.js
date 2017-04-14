import express from 'express'
import bodyParser from 'body-parser'

import { line_graph_data } from '../gauss/data'
console.log('line_graph_data', line_graph_data)

const app = express()
// app.use(bodyParser.json())

app.get('/price', (req, res) => {
  console.log('hit get endpoint')
  res.end('yo this is the api')
})
app.listen(6000)

console.log('API listening on port 6000')
