/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
import {Link} from 'react-router-dom';

import CIconTalk from '../../parts/icon/CIconTalk';

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
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 0.8rem;
    background-color: rgba(248,248,248,0.5);
    .t-sideNav-link-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.7rem;
      transition: transform .2s ease-out;
    }
  }
  .t-sideNav-link-text {
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;
    margin-top: 0.4rem;
  }
  &:hover {
    .t-sideNav-link-icon {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }
`