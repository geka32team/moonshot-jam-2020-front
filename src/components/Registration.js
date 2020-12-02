import React, { useState, useEffect } from 'react'
import Header from './Header'
import {post} from './_api/Requests'
import { useDispatch } from "react-redux"

function Registration(props) {

  const dispatch = useDispatch();


  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  useEffect(() => {
    window.onkeypress = onEnter
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, password, isRegister])

  const registerHandler = () => {
    if (password === confPassword) {
      post('/register', {username, password})
      .then(res => {
        if (res.status === 200) setIsRegister(false)
      })
    }
  }
  
  const loginHandler = () => {
    post('/signin', {username, password})    
      .then(res => {
        if (res.status === 200) {
          window.onkeypress = null
          dispatch({ type: "SET_LOGIN", payload: true })
          dispatch({ type: "SET_NAME", payload: username })
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
        <div className="boss-motion"></div>
        <div className="armor-motion"></div>
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
                <span className="login-btn mt-5" onClick={loginHandler}>Login</span>
              </form>
          }
        </div>
      </div>
    </>

  );
}

export default Registration;
