/** @jsxImportSource @emotion/react */
import {css}  from '@emotion/react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import CONFIG from '../config'

const PLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async() => {
    try {
      const response = await fetch(CONFIG.endpoint.auth.login, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      })
      const { token } = await response.json()
      localStorage.setItem(CONFIG.storage.auth.key, token)
      navigate('/')
    } catch(err) {
      console.error(err)
    }
  }
  return (
    <div className='p-login' css={styleRoot}>
      <form>
        <h1 className='p-login-title'>Login</h1>
        <input className='p-login-input' type='email' name='email' placeholder='input email' onChange={e => setEmail(e.target.value)} />
        <input className='p-login-input' type='password' name='password' placeholder='input password' autoComplete='false' onChange={e => setPassword(e.target.value)} />
        <button className='p-login-button' type='button' onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

const styleRoot = css`
  .p-login-input {
    display: block;
    margin-top: 0.4rem;
  }
  .p-login-button {
    margin-top: 0.8rem;
  }
`

export default PLogin