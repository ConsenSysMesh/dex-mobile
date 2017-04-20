import express from 'express'
import http from 'http'
import socketio from 'socket.io'
import bodyparser from 'body-parser'

const app = express();
app.use(bodyparser.json())
const server = http.Server(app);
const websocket = socketio(server);

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
});

// restful endpoints
app.get('/price', (req, res) => {
  console.log('req', JSON.stringify(req.body))
  // websocket.emit('price', )
  res.end('yo this is the api')
})

server.listen(3000, () => console.log('listening on *:3000'))
