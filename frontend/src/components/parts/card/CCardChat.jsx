/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'

import iconUserMan from '../../../assets/images/icon/icon-user-man.png'

export default function CCardChat({chat}) {
  const defaultChat = {
    icon: iconUserMan,
    name: 'dummy name',
    time: 'dummy time',
    message: 'dummy message'
  }
  const {icon, name, time, message} = Object.assign(defaultChat, chat)

  return (
    <div className="c-cardChat" css={styleRoot}>
      <div className="c-cardChat-inner">
        <div className="c-cardChat-icon">
          <img src={icon} alt="" />
        </div>
        <div className="c-cardChat-content">
          <div className="c-cardChat-info">
            <p className="c-cardChat-name">{name}</p>
            <time className="c-cardChat-time">{time}</time>
          </div>
          <div className="c-cardChat-message">
            <p className="c-cardChat-message-text">{message}</p>
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
  .c-cardChat-inner {
    display: flex;
    gap: 0.8rem;
    .c-cardChat-icon {
      flex-shrink: 0;
      width: 3.6rem;
      height: 3.6rem;
    }
  }
  .c-cardChat-icon {
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
  .c-cardChat-info {
    display: flex;
    align-items: end;
  }
  .c-cardChat-name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .c-cardChat-time {
    color: var(--color-gray);
    font-size: 1.2rem;
  }
  * + .c-cardChat-time {
    margin-left: 1.6rem;
  }
  .c-cardChat-message {
    .c-cardChat-message-text {
      font-size: 1.4rem;
      line-height: 1.6;
    }
  }
  * + .c-cardChat-message {
    margin-top: 0.25rem;
  }
`