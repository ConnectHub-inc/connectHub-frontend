/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../constants/breakpoint'

export default function CHeading1(props) {
  return (
    <h1 className='c-heading1' css={styleRoot}>
      {props.children}
    </h1>
  )
}

const styleRoot = css`
  color: var(--color-white);
  font-size: 18px;
  line-height: 1.33334;
`