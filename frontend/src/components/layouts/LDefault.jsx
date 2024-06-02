/** @jsxImportSource @emotion/react */
// import {css}  from '@emotion/react'

import TNav from "./TNav"

export default function LDefault(props) {
  return (
    <div>
      <TNav />
      {props.children}
    </div>
  )
}