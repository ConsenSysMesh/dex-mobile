import express from 'express'
import http from 'http'
import socketio from 'socket.io'

const app = express();
const server = http.Server(app);
const websocket = socketio(server);

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
});

// restful endpoints
app.get('/price', (req, res) => {
  console.log('req', req)
  console.log('res', res)
  // websocket.emit('price', )
  res.end('yo this is the api')
})

server.listen(3000, () => console.log('listening on *:3000'))
