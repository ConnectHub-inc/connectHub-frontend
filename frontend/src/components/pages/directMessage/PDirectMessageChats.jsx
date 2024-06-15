/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'

import CCardChat from '../../parts/card/CCardChat'

export default function PDirectMessageChats({chats}) {
  return (
    <ul className="p-directMessage-chats" css={styleRoot}>
      {chats.map(chat => <CCardChat chat={chat} key={chat.id} />)}
    </ul>
  )
}

const styleRoot = css`
  background-color: var(--color-bg-base-thin);
`