/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
import {Link} from 'react-router-dom';

import CIconTalk from '../../parts/chat/icon/CIconTalk';

export default function TSideNavLink(props) {
  return (
    <Link to={props.href} className='t-sideNav-link' css={styleRoot}>
      <div className='t-sideNav-link-iconWrapper'>
        <div className='t-sideNav-link-icon'>
          {(props.icon === 'talk') ? <CIconTalk /> : null}
        </div>
      </div>
      <p className='t-sideNav-link-text'>{props.children}</p>
    </Link>
  )
}

const styleRoot = css`
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
`