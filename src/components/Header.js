import React from 'react'
import styled from 'styled-components'
import moon_sound from '../assets/audio/moon_sound.wav'

export default function Header(props) {

  return (
    <StyledField>

      <header>
        {/* <audio src={moon_sound} autoPlay loop /> */}
        <div className="header-wrapper">
          <div className="nick-name"><span className='lvl'>{props.info.lvl}</span>{props.info.name}</div>
          <div className="game-name">MoonnyMathics</div>
          <div onClick={props.logoutHandler} className="logout">{props.info.name ? 'logout' : null}</div>
        </div>
      </header>
    </StyledField>
  )
}

const StyledField = styled.div`

.header-wrapper {
    width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    font-weight: 400;
}

.lvl {
  border-radius: 50%;
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 0 15px;
}

.game-name {
  font-size: 40px;
}

.logout {
  cursor: pointer;
}


`