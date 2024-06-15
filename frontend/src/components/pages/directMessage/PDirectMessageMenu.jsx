/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'

import CHeading1 from '../../parts/heading/CHeading1'
import CCardAddress from '../../parts/card/CCardAddress'

export default function PDirectMessageMenu({addresses}) {
  return (
    <div className="p-directMessage-menu" css={styleRoot}>
      <div className="p-directMessage-menu-head">
        <div className="p-directMessage-menu-head-inner">
          <CHeading1>ダイレクトメッセージ</CHeading1>
        </div>
      </div>
      <ul className="p-directMessage-menu-address">
        {addresses.map(address => <CCardAddress address={address} key={address.id} />)}
      </ul>
    </div>
  )
}

const styleRoot = css`
  border-right: 1px solid var(--color-border);
  .p-directMessage-menu-head {
    padding: 8px 16px;
  }
  .p-directMessage-menu-address {
    .c-cardAddress {
      border-bottom: 1px solid var(--color-border);
    }
  }
`