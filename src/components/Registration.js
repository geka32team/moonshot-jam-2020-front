import React, { useState, useEffect } from 'react'
import Header from './Header'

function Registration(props) {


  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  const registerUrl =  'https://moonnymathics-api.herokuapp.com/api/register'
  const loginUrl = 'https://moonnymathics-api.herokuapp.com/api/signin'

  useEffect(() => {
    window.onkeypress = onEnter
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const registerHandler = () => {
    if (password === confPassword) {
      fetch(registerUrl, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.status === 200) setIsRegister(false)
        })
    }
  }

  const loginHandler = () => {
    fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
      .then(res => {
        if (res.status === 200) {
          window.onkeypress = null
          props.history.push("/game")
        }
      })
  }

  const onEnter = e => {
    if (e.key === 'Enter') {
      isRegister ? registerHandler() : loginHandler()
    }
  }
  return (
    <>
      <Header info={{ lvl: '', name: '' }} />
      <div className="container">
        <div className="char-motion"></div>
        <div className="weapon-motion"></div>
        <div className="login-form">
          <div>
            <span className={isRegister ? "active-btn" : "login-btn"} onClick={() => setIsRegister(true)}>Register</span>
            <span className={isRegister ? "login-btn" : "active-btn"} onClick={() => setIsRegister(false)}>Login</span>
          </div>
          {
            isRegister ?
              <form>
                <div className="login">
                  <span>Login</span>
                  <input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder="Enter character name" className="username" name="username" />
                </div>
                <div className="pass">
                  <span>Password</span>
                  <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" className="password" name="password" />
                </div>
                <div className="pass">
                  <span>Confirm</span>
                  <input onChange={e => setConfPassword(e.target.value)} value={confPassword} type="password" placeholder="Enter your password" className="password" name="password" />
                </div>
                <span className="login-btn" onClick={registerHandler}>Register</span>
              </form>
              :
              <form>
                <div className="login">
                  <span>Login</span>
                  <input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder="Enter character name" className="username" name="username" />
                </div>
                <div className="pass">
                  <span>Password</span>
                  <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" className="password" name="password" />
                </div>
                <span className="login-btn" onClick={loginHandler}>Login</span>
              </form>
          }
        </div>
      </div>
    </>

  );
}

export default Registration;