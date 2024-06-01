import {useState, useEffect} from 'react'

// フロントで持つページ用データ
const pages = {
  index: {text: 'Simple Chat'},
}

// Chatを一覧形式で返すコンポーネント
export default function PageTestChats(props) {
  const {text} = pages[props.page]
  const socketServerUrl = 'ws://localhost:8080'

  const [input, setInput] = useState('')
  const [chats, setChats] = useState([])
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    // socketインスタンスを生成
    const socket = new WebSocket(socketServerUrl)
    // 受信時の処理
    socket.addEventListener('message', message => {
      const chats = JSON.parse(message.data)
      setChats(chats)
      setSocket(socket)
      // コンポーネントのクリーンアップ時にsocketをクローズ
      return () => socket.close()
    })
  }, [props.page])

  const onChangeInput = e => {
    const input = e.target.value
    setInput(input)
  }

  const onClickButton = e => {
    e.preventDefault()
    if(socket.readyState !== WebSocket.OPEN) {
      console.log('not ready...')
      return
    }
    socket.send(JSON.stringify({type: 'createChat', text: input}))
    setInput('')
  }

  return (
    <>
      <h1>{text}</h1>
      <input type="text" value={input} onChange={onChangeInput} placeholder='new message'/>
      <button type='button' onClick={onClickButton}>Send</button>
      <ul>
        {chats.map(({id, text}) =>
          <li key={id}>
            <span>{text}</span>
          </li>
        )}
      </ul>
    </>
  )
}