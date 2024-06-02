/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
// import {mediaPC, mediaSP} from '../../../../constants/breakpoint'

import iconUserMan from '../../../../assets/images/icon/icon-user-man.png'

function CChatCard({data}) {
  const defaultProps = {
    icon: iconUserMan,
    name: 'dummy name',
    time: 'dummy time',
    message: 'dummy message'
  }
  const {icon, name, time, message} = Object.assign(defaultProps, data)

  return (
    <div>
      <div css={styleInner}>
        <div css={styleIcon}>
          <img src={icon} alt='' css={styleIconImg} />
        </div>
        <div>
          <div css={styleInfo}>
            <p css={styleName}>{name}</p>
            <time css={styleTime}>{time}</time>
          </div>
          <div css={styleMessage}>
            <p css={styleMessageText}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styleInner = css`
  display: flex;
  gap: 8px;
`
const styleIcon = css`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 4px;
`
const styleIconImg = css`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  background-color: var(--color-white);
`
const styleInfo = css`
  display: flex;
  align-items: end;
`
const styleName = css`
  font-size: 0.875rem;
  font-weight: bold;
`
const styleTime = css`
  font-size: 0.75rem;
  * + & {
    margin-left: 1em;
  }
`
const styleMessage = css`
  * + & {
    margin-top: 0.25rem;
  }
`
const styleMessageText = css`
  font-size: 0.875rem;
  line-height: 1.6;
`

export default CChatCard