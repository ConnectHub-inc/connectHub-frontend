/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'

import iconUserMan from '../../../assets/images/icon/icon-user-man.png'

export default function CCardAddress({address}) {
  const defaultAddress = {
    icon: iconUserMan,
    name: 'dummy name',
    time: 'dummy time',
    message: 'dummy message',
    current: false
  }
  const {icon, name, time, message, current} = Object.assign(defaultAddress, address)

  return (
    <div className={`c-cardAddress ${current ? '-current' : null}`} css={styleRoot}>
      <div className="c-cardAddress-inner">
        <div className="c-cardAddress-icon">
          <img src={icon} alt="" />
        </div>
        <div className="c-cardAddress-content">
          <div className="c-cardAddress-info">
            <p className="c-cardAddress-name">{name}</p>
            <time className="c-cardAddress-time">{time}</time>
          </div>
          <div className="c-cardAddress-message">
            <p className="c-cardAddress-message-text">{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styleRoot = css`
  padding: 0.8rem 2rem;
  &:hover {
    cursor: pointer;
    background-color: var(--color-bg-base-hover);
  }
  &.-current {
    background-color: rgba(248, 248, 248, 0.08);
    &:hover {
      cursor: default;
    }
  }
  .c-cardAddress-inner {
    display: flex;
    gap: 0.8rem;
    .c-cardAddress-icon {
      flex-shrink: 0;
      width: 3.6rem;
      height: 3.6rem;
    }
  }
  .c-cardAddress-icon {
    border-radius: 4px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
      background-color: var(--color-white);
    }
  }
  .c-cardAddress-info {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .c-cardAddress-name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .c-cardAddress-time {
    color: var(--color-gray);
    font-size: 1.3rem;
  }
  * + .c-cardAddress-time {
    margin-left: 1.6rem;
  }
  .c-cardAddress-message {
    .c-cardAddress-message-text {
      font-size: 1.4rem;
      line-height: 1.6;
    }
  }
  * + .c-cardAddress-message {
    margin-top: 0.25rem;
  }
`