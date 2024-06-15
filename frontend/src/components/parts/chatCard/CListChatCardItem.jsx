/** @jsxImportSource @emotion/react */
// import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../../constants/breakpoint'

import CChatCard from "./CChatCard"

export default function CListChatCardItem({chat}) {
  return (
    <li>
      <CChatCard chat={chat}/>
    </li>
  )
}