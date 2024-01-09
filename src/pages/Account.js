import React from 'react'
import './pages.css'
import './basic.css'

export const Account = () => {
  return (
    <div className='container'>
      <div className='poravnanje'>
        <h1>
          Account:
        </h1>
        <input type="text" className='accinput' placeholder='Email'/>
        <input type="text" className='accinput' placeholder='Password'/>
        <p className='signup'>
          Don't have an account? <a href="/" alt="">Sign up!</a>
        </p>

        <p className='signup'>
          <a href="/">Forgot password?</a>
        </p>
        <button className='login'>
          Log in
        </button>
      </div>
    </div>
  )
}
