const http = require('http')
const WebSocket = require('ws')

const port = 8080

// 仮データ
const chats = [
  {id: 1, text: 'Good Morning!'},
  {id: 2, text: 'Hello!'},
]
let id = 2

// サーバー立ててlisten
const server = http
  .createServer()
  .listen(port, console.log(`server started! http://localhost:${port}`))

// wssインスタンスを生成
const wss = new WebSocket.Server({server})

// wssインスタンスを生成
// noServer（Next.jsが引き起こすhmrエラー解決のため）
// ↑https://stackoverflow.com/questions/69840693/how-can-i-run-a-websocket-server-in-next-js-custom-server-in-dev-mode
// const wss = new WebSocket.Server({noServer: true})

// 接続中の全クライアントにChatsを送信する関数
const sendChatsToOpenClient = () => {
  for(const client of wss.clients) {
    if(client.readyState !== WebSocket.OPEN) continue
    client.send(JSON.stringify(chats))
  }
}

// wssがクライアントと接続したら、
wss.on('connection', ws => {
  // 全クライアントにchatsを送信
  ws.send(JSON.stringify(chats))
  // クライアントからの受信対応（wsではmessageイベントのみを介ccする）
  ws.on('message', message => {
    const {type, text} = JSON.parse(message)
    switch(type) {
      case 'createChat': {
        // chatの追加
        if(!text || typeof text !== 'string') return
        const chat = {id: ++id, text: text}
        chats.push(chat)
        sendChatsToOpenClient()
      }
    }
  })
})

// 101（switching protocol）がリクエストされても接続が閉じないように、upgradeイベントをlisten
// ↑https://nodejs.org/api/http.html#event-upgrade
// server.on('upgrade', (req, socket, head) => {
//   wss.handleUpgrade(req, socket, head, function done(ws) {
//     wss.emit('connection', ws, req)
//   })
// })

// デバッグ用
wss.on('close', e => {
  console.log('close!')
  console.log('code', e.code)
  console.log('reason', e.reason)
})
