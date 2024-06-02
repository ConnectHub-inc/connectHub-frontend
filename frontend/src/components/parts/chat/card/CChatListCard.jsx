/** @jsxImportSource @emotion/react */
// import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../../constants/breakpoint'

import CChatListCardItem from './CChatListCardItem'

export default function CChatListCard({list}) {
  const items = list.map(item => <CChatListCardItem item={item} key={item.id} />)
  return (
    <ul>{items}</ul>
  )
}