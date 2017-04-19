import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import socketIO from 'socket.io'

let app = express()
let server = http.Server(app)
let io = new socketIO(server)

io.on('connection', (socket) => {
  console.log('a client just joined!', socket.id)
})

// app.use(bodyParser.json())

app.get('/price', (req, res) => {
  console.log('hit get endpoint')
  res.end('yo this is the api')
})
app.listen(6000)

console.log('API listening on port 6000')
