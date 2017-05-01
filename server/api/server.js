import express from 'express'
import http from 'http'
import socketio from 'socket.io'
import bodyparser from 'body-parser'
// import { graphqlExpress } from 'graphql-server-express'
// import { schema, root } from './schema'

const app = express();
app.use(bodyparser.json())
const server = http.Server(app)
const websocket = socketio(server)


// set up graphql config
// app.use('/graphql', bodyParser.json(), graphqlExpress({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }))


// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
});

// restful endpoints
app.get('/price', (req, res) => {
  console.log('req', JSON.stringify(req.body))
  websocket.emit('price', JSON.stringify(req.body))
  res.end('sent new price obj', res)
})

app.get('/volume', (req, res) => {
  console.log('hit volume endpoint')
  websocket.emit('volume', JSON.stringify(req.body))
  res.end('sent new volume obj', res)
})

server.listen(3000, () => console.log('listening on *:3000'))
