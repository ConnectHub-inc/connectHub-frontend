/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../constants/breakpoint'

import iconUserMan from '../../../assets/images/icon/icon-user-man.png'

function CChatCard({chat}) {
  const defaultChat = {
    icon: iconUserMan,
    name: 'dummy name',
    time: 'dummy time',
    message: 'dummy message'
  }
  const {icon, name, time, message} = Object.assign(defaultChat, chat)

  return (
    <div className='c-chatCard' css={styleRoot}>
      <div className='c-chatCard-inner'>
        <div className='c-chatCard-icon'>
          <img src={icon} alt='' />
        </div>
        <div className='c-chatCard-content'>
          <div className='c-chatCard-info'>
            <p className='c-chatCard-name'>{name}</p>
            <time className='c-chatCard-time'>{time}</time>
          </div>
          <div className='c-chatCard-message'>
            <p className='c-chatCard-message-text'>{message}</p>
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
  .c-chatCard-inner {
    display: flex;
    gap: 0.8rem;
    .c-chatCard-icon {
      flex-shrink: 0;
      width: 3.6rem;
      height: 3.6rem;
    }
  }
  .c-chatCard-icon {
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
  .c-chatCard-info {
    display: flex;
    align-items: end;
  }
  .c-chatCard-name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .c-chatCard-time {
    font-size: 1.2rem;
  }
  * + .c-chatCard-time {
    margin-left: 1.6rem;
  }
  .c-chatCard-message {
    .c-chatCard-message-text {
      font-size: 1.4rem;
      line-height: 1.6;
    }
  }
  * + .c-chatCard-message {
    margin-top: 0.25rem;
  }
`

export default CChatCard