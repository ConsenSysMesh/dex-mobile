import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

let app = express()
let server = http.Server(app)

// app.use(bodyParser.json())

app.get('/price', (req, res) => {
  console.log('hit get endpoint')
  res.end('yo this is the api')
})
app.listen(6000)

console.log('API listening on port 6000')
