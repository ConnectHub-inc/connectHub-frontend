/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../../constants/breakpoint'

import LDefault from '../components/layouts/LDefault'
import PIndexSectionChat from '../components/pages/index/PIndexSectionChat'

function PIndex() {
  return (
    <LDefault>
      <h1 css={styleH1}>Direct Message</h1>
      <PIndexSectionChat />
    </LDefault>
  )
}

const styleH1 = css`
  margin-block: 1em 0.5em;
`

export default PIndex