import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useSound from 'use-sound'
import ReactTooltip from 'react-tooltip'


import shot from '../assets/audio/shot.mp3';
import EnemyCard from './EnemyCard';

export default function BattlePage(props) {

  const [isAttack, setIsAttack] = useState(false)
  const [answer, setAnswer] = useState('')
  const [timeWidth, setTimeWidth] = useState(100)
  const [timer, setTimer] = useState(null)

  const [playShot] = useSound(shot)

  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  const changeAnswer = event => {
    setAnswer(answer + event.target.innerText)
  }

  useEffect(() => {
    if (answer.length > 1) {
      window.onkeyup = null
      props.onDrop(true)
      setIsAttack(false)
      setAnswer('')
      playShot()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, playShot])

  useEffect(() => {
    if(isAttack) {
      startTime(10)
    }else{
      clearInterval(timer)
      setTimeWidth(100)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAttack])

  const startTime = time => {
    console.log('time', time)
    setTimer(setInterval(() => {
      if(timeWidth > 0) setTimeWidth(t => t - 0.5)
    }, time/200 * 1000))
  }

  const onStartFight = () => {
    setIsAttack(true)
    window.onkeyup = writeAnswer
  }

  const writeAnswer = e => {
    if (e.key.match(/[0-9]/)) {
      setAnswer(a => a + e.key)
    }
  }

  return (
    <StyledField>
      <ReactTooltip
        multiline={true}
        aria-haspopup="true"
        delayShow={200}
        className="tooltip"
        id="battleField"
      />
      <div className="task-field">
        {
          isAttack ?
            (<div className="task">
              <p>12 - x + 6 -4 +7 = 5</p>
              <p className="ask-answer">x = ?</p>
              <p className="answer">{answer}</p>
              <div className="timelane"><div style={{width: `${timeWidth}%`, backgroundColor: `rgb(${155+(100 - timeWidth)}, ${255*timeWidth/100}, 0)`}}></div></div>
              <div className="keyboard">
                {
                  digits.map(digit => <span key={digit} onClick={changeAnswer}>{digit}</span>)
                }
              </div>
            </div>)
            :
            (<div>
              <div className="is-ready">Are you ready for questions?</div>
              <div onClick={onStartFight} className="start-fight">Start Fight</div>
            </div>)

        }
      </div>
      <EnemyCard enemyData={props.enemyData} />

    </StyledField>
  )
}



const StyledField = styled.div`

.start-fight {
  background-color: rgb(62, 62, 62);
  text-align: center;
  width: 120px;
  height: 30px;
  color: yellow;
  outline: none;
  border: none;
  border-radius: 2px;
  margin: 10px 0;
  transition: 0.2s;
  box-shadow: -3px 3px 6px rgb(107, 107, 107);
  padding: 3px 6px;
  display: inline-block;
  font-size: 20px;
  margin-top: 100px;
  cursor: pointer;
}

.task-field {
  position: absolute;
  display: inline-block;
  text-align: center;
  font-weight: 400;
  font-size:32px;
  color: yellow;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
}

.ask-answer {
  color: limegreen;
}

.answer {
  font-size: 36px;
  color: limegreen;
  height: 36px;
}

.task {
  height: 210px;
  background-color: rgba(0,0,0,0.6)
}

.keyboard {
  width: 200px;
  margin: auto;
}

.keyboard span {
  font-size: 38px;
  margin: 5px;
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: rgb(138, 162, 80);
  cursor: pointer;
}

.keyboard span:active {
  color: limegreen;
  transform: scale(1.05);
}

.timelane {
  height: 10px;
  background-color: gray;
}

.timelane>div {
  height:10px;
  margin-left: auto;
}

`