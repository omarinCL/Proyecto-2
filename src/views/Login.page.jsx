import React from 'react'
import LoginContainer from './../containers/Login/Login.container'
import '../styles/login.scss'

const LoginPage = () => {
  return (
    <>
      <div className='login-clean'>
        <div className='illustration'>
          <i className='fas fa-key' />
        </div>
        <LoginContainer />
      </div>
    </>
  )
}

export default LoginPage
