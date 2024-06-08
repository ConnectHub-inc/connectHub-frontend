/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
import {Link} from 'react-router-dom';

import CIconTalk from '../parts/chat/icon/CIconTalk';

export default function TSideNav() {
  return (
    <nav className='t-sideNav' css={styleRoot}>
      <ul className='t-sideNav-listLink'>
        <li className='t-sideNav-listLinkItem'>
          <Link to="/" className='t-sideNav-link'>
            <div className='t-sideNav-link-iconWrapper'>
              <div className='t-sideNav-link-icon'>
                <CIconTalk />
              </div>
            </div>
            <p className='t-sideNav-link-text'>DM</p>
          </Link>
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
  .t-sideNav-listLinkItem {
    margin-top: 16px;
  }
  .t-sideNav-link {
    .t-sideNav-link-iconWrapper {
      position: relative;
      display: block;
      overflow: hidden;
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background-color: rgba(248,248,248,0.5);
      .t-sideNav-link-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 17px;
        transition: transform .2s ease-out;
      }
      &:hover {
        .t-sideNav-link-icon {
          transform: translate(-50%, -50%) scale(1.3);
        }
      }
    }
    .t-sideNav-link-text {
      font-size: 11px;
      font-weight: 700;
      text-align: center;
      margin-top: 4px;
    }
  }
`