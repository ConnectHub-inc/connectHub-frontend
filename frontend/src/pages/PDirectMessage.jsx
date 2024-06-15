/** @jsxImportSource @emotion/react */
// import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../../constants/breakpoint'

import LDefault from '../components/layouts/LDefault'
import PDirectMessageChats from '../components/pages/directMessage/PDirectMessageChats'

export default function PDirectMessage() {
  const chats = [
    {
      id: 1,
      name: 'Alice',
      time: '21:57',
      message: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
    },
    {
      id: 2,
      name: 'Bob',
      time: '22:00',
      message: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
    },
  ]

  return (
    <LDefault>
      <div className='p-directMessage'>
        <PDirectMessageChats chats={chats} />
      </div>
    </LDefault>
  )
}