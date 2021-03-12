import React, { useState, useEffect } from 'react'
import Header from './Header'
import {post} from './_api/Requests'
import { useDispatch } from "react-redux"
import { Row, Col} from 'antd'
import styled from "styled-components";
import Images from "./Images";

function Registration(props) {

  const dispatch = useDispatch();


  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    window.onkeypress = onEnter
    setError('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, password, isRegister])

  const registerHandler = () => {
    if(username.length < 4) {
      setError('Username should be at least 4 characters')
      return
    } 
    if(password.length < 8) {
      setError('Password should be at least 8 characters')
      return
    } 
    if (password === confPassword) {
      post('/register', {username, password})
      .then(res => {
        if (res.status === 200) setIsRegister(false)
      })
    }else setError('Confirm the password')
  }
  
  const loginHandler = () => {
    post('/signin', {username, password})    
      .then(res => {
        if (res.status === 200) {
          window.onkeypress = null
          dispatch({ type: "SET_LOGIN", payload: true })
          dispatch({ type: "SET_NAME", payload: username })
          props.history.push("/game")
        }else setError('Username or password is wrong')
      })
  }

  const onEnter = e => {
    if (e.key === 'Enter') {
      isRegister ? registerHandler() : loginHandler()
    }
  }
  return (
    <StyledField>
      <Header info={{ lvl: '', name: '' }} />
      <div className="container">
        <div className="char-motion"></div>
        <div className="weapon-motion"></div>
        <div className="boss-motion"></div>
        <div className="armor-motion"></div>
        <span className="task1">2+2=?</span>
        <span className="task2">8:4+2=?</span>
        <span className="task3">8:x+2=6</span>
        <Row justify="center">

          <Col md={{ span: 24 }}>
        <div className="login-form">
          <div className="error-login">{error}</div>
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
          </Col>
        </Row>
      </div>
    </StyledField>

  );
}

export default Registration;

const StyledField = styled.div`

.boss-motion {
  position: absolute;
  width: 200px;
  height: 270px;
  background: url(${Images.boss_1})  no-repeat;
  background-size: contain;
  z-index: -1;
  top: 15vh;
  left: 70vw;
  animation: charReverseAnime 63s infinite linear;
  transform: rotate(0deg);
}

.weapon-motion {
  position: absolute;
  width: 200px;
  height: 270px;
  background: url(${Images.weapon_gold})  no-repeat;
  background-size: contain;
  z-index: -1;
  top: calc(98vh - 70px);
  left: calc(98vw - 20px);
  animation: charReverseAnime 42s infinite linear;
  transform: rotate(0deg);
}

.char-motion {
  position: absolute;
  top: 15vh;
  left: 5vw;
  width: 250px;
  height: 350px;
  background: url(${Images.main_animate})  no-repeat;
  background-size: contain;
  z-index: -1;
  animation: charAnime 79s infinite linear;
  transform: rotate(0deg);
}

.armor-motion {
  position: absolute;
  top: calc(98vh - 100px);
  left: 5vw;
  width: 150px;
  height: 230px;
  background: url(${Images.armor_platinum})  no-repeat;
  background-size: contain;
  z-index: -1;
  animation: charAnime 55s infinite linear;
  transform: rotate(0deg);
}

.task1 {
  color: var(--main);
  font-size: 60px;
  position: absolute;
  top: calc(78vh - 100px);
  left: 40vw;
  z-index: -1;
  animation: charAnime 35s infinite linear;
  transform: rotate(-30deg);
}

.task2 {
  color: var(--uncommon);
  font-size: 52px;
  position: absolute;
  top: calc(38vh - 70px);
  left: 70vw;
  z-index: -1;
  animation: charReverseAnime 38s infinite linear;
  transform: rotate(-5deg);
}

.task3 {
  color: var(--warning);
  font-size: 48px;
  position: absolute;
  top: calc(98vh - 70px);
  left: 60vw;
  z-index: -1;
  animation: charAnime 96s infinite linear;
  transform: rotate(10deg);
}

.task1, .task2, .task3 {
    letter-spacing: 14px;
    text-shadow: 2px 2px 10px var(--secondary);
  }

@media (max-width: 960px) {
  .boss-motion, .char-motion, .armor-motion, .weapon-motion {
    width: 100px;
    height: 140px;
  }

  .task1, .task2, .task3 {
    font-size: 36px;
    letter-spacing: 10px;
  }
}

`