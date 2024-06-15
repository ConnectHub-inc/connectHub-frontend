/** @jsxImportSource @emotion/react */
// import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../../constants/breakpoint'

import CListChatCardItem from './CListChatCardItem'

export default function CListChatCard({chats}) {
  const chatEls = chats.map(chat => <CListChatCardItem chat={chat} key={chat.id} />)
  return (
    <ul>
      {chatEls}
    </ul>
  )
}