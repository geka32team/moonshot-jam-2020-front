import React from 'react'
import './style.css'

function Registration(props) {
  return (
    <div className="login-form">
      <form>
        <div className="login">
          <span>Login</span>
          <input type="text" placeholder="Enter character name" className="username" name="username" />
        </div>
        <div className="pass">
          <span>Password</span>
          <input type="password" placeholder="Enter your password" className="password" name="password" />
        </div>
        <span className="login-btn" onClick={() => { props.history.push("/game") }}>Login</span>
      </form>
    </div>

  );
}

export default Registration;