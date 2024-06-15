/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'

import LDefault from '../components/layouts/LDefault'
import PDirectMessageMenu from '../components/pages/directMessage/PDirectMessageMenu'
import PDirectMessageChats from '../components/pages/directMessage/PDirectMessageChats'

export default function PDirectMessage() {
  // example data
  const addresses = [
    {
      id: 1,
      name: 'Alice',
      time: '8:10',
      message: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
    },
    {
      id: 2,
      name: 'Bob',
      time: '22:00',
      message: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
      current: true
    },
  ]
  const chats = [
    {
      id: 1,
      name: 'Bob',
      time: '22:00',
      message: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
    },
    {
      id: 2,
      name: 'User',
      time: '21:57',
      message: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
    },
  ]

  return (
    <LDefault>
      <div className="p-directMessage" css={styleRoot}>
        <div className="p-directMessage-inner">
          <div className="p-directMessage-content">
            <PDirectMessageMenu addresses={addresses}/>
            <PDirectMessageChats chats={chats} />
          </div>
        </div>
      </div>
    </LDefault>
  )
}

const styleRoot = css`
  height: 100vh;
  .p-directMessage-inner {
    height: 100%;
    padding-block: 4px;
    padding-right: 4px;
  }
  .p-directMessage-content {
    height: 100%;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    display: flex;
    .p-directMessage-menu {
      flex-shrink: 0;
      width: 420px;
    }
  }
`