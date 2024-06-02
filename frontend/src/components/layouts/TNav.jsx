/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'

import { Link } from 'react-router-dom';

export default function TNav() {
  return (
    <div className="t-nav">
      <h2>Nav</h2>
      <ul>
        <li>
          <Link to="/" css={styleLink}>Direct Message</Link>
        </li>
        <li>
          <Link to="/test/" css={styleLink}>Test</Link>
        </li>
      </ul>
    </div>
  )
}

const styleLink = css`
  *:-webkit-any-link {
    color: inherit;
  }
`