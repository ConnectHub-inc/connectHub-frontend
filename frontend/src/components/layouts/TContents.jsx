/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'

export default function TContents(props) {
  return (
    <div className='t-contents' css={styleRoot}>
      {props.children}
    </div>
  )
}

const styleRoot = css`
  padding-left: 70px;
`