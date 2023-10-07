import React from 'react'
import { useLocation } from 'react-router-dom'

import Router from './Router'
import Layout from './components/layout'
import SignInPage from './pages/SignInPage'
import useAuthentication from './hooks/useAuthentication'

const App = () => {
  const location = useLocation()
  const user = useAuthentication()

  if (location.pathname === '/login' || !user.current) {
    return <SignInPage />
  }

  return (
    <div className='bg-slate-50 min-h-screen overflow-clip p-4'>
      <Layout>
        <Router />
      </Layout>
    </div>
  )
}

export default App
