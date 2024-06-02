/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../../constants/breakpoint'

import CChatCard from "./CChatCard"

export default function CChatListCardItem({item}) {
  return (
    <li css={styleRoot}>
      <CChatCard data={item}/>
    </li>
  )
}

const styleRoot = css`
  padding: 8px 16px;
  &:hover {
    cursor: pointer;
    background-color: var(--color-bg-base-hover);
  }
`