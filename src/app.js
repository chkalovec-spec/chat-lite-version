const cors = require('cors')
const config = require('config')

const rooms = require('../data')

const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const PORT = config.get('backend_port') || 8000

io.on('connection', socket => {
  console.log('user connected', socket.id)
})

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/rooms', (req, res) => {
  res.json(rooms)
})

server.listen(PORT, err => {
  if (err) throw Error(err)
  console.log(`Server is start on server://localhost:${PORT}`)
})
