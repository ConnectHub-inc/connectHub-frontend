const http = require('http')
const WebSocket = require('ws')

const port = 8001

// dummy data
const chats = [
  {id: 1, text: 'Good Morning!'},
  {id: 2, text: 'Hello!'},
]
let id = 2

// http server
const server = http
  .createServer()
  // .createServer(app)
  .listen(port, console.log(`websocket server started! http://localhost:${port}`))

// websocket server
const wss = new WebSocket.Server({server})

const broadcast = () => {
  for(const client of wss.clients) {
    if(client.readyState !== WebSocket.OPEN) continue
    client.send(JSON.stringify(chats))
  }
}

wss.on('connection', ws => {
  broadcast()
  ws.on('message', message => {
    const {type, text} = JSON.parse(message)
    switch(type) {
      case 'createChat': {
        if(!text || typeof text !== 'string') return
        const chat = {id: ++id, text: text}
        chats.push(chat)
        broadcast()
      }
    }
  })
})

wss.on('close', e => {
  console.log('close!')
  console.log('code', e.code)
  console.log('reason', e.reason)
})
