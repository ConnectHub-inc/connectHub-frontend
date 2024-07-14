import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import CONFIG from '../config'
import PLogin from '../pages/PLogin.tsx'
import PDirectMessage from '../pages/PDirectMessage.jsx'
// import PTest from '../pages/test/PTest'

const authContext = createContext()
const useContextAuth = () => {
  return useContext(authContext)
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const verify = async() => {
    try {
      const token = localStorage.getItem(CONFIG.storage.auth.key)
      if(token) {
        const response = await fetch(CONFIG.endpoint.auth.verify, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({token})
        })
        setIsAuthenticated(response.ok)
      }
    } catch(err) {
      console.error(err)
    }
  }
  return {
    isAuthenticated,
    verify,
  }
}

const RouterAuthProvider = ({ children }) => {
  const auth = useAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

const RoutePrivate = ({ children }) => {
  const auth = useContextAuth()
  const location = useLocation()
  useEffect(() => {
    const verify = async() => {
      try {
        await auth.verify()
      } catch(err) {
        console.error(err)
      }
    }
    verify()
  }, [])
  return(
    auth.isAuthenticated ? (
      children
    ) : (
      <Navigate replace to={{
        pathname: '/login',
        state: {from: location}
      }} />
    )
  )
}

const RouterAuth = () => {
  return (
    <RouterAuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={
            <RoutePrivate>
              <PDirectMessage />
            </RoutePrivate>
          } />
          <Route path='/login' element={<PLogin />} />
        </Routes>
      </Router>
    </RouterAuthProvider>
  )
}

export default RouterAuth