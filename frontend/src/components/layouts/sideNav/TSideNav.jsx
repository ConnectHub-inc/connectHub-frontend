/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'

import TSideNavLink from './TSideNavLink';

export default function TSideNav() {
  return (
    <nav className='t-sideNav' css={styleRoot}>
      <ul className='t-sideNav-listLink'>
        <li className='t-sideNav-listLinkItem'>
          <TSideNavLink href="/" icon="talk">DM</TSideNavLink>
        </li>
      </ul>
    </nav>
  )
}

const styleRoot = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100svh;
  padding-inline: 17px;
  background-color: var(--color-bg-base-thin);
  .t-sideNav-listLinkItem {
    margin-top: 16px;
  }
`