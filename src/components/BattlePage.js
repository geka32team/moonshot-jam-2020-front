import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useSound from 'use-sound'

import shot from '../assets/audio/shot.mp3';
import weapon1_img from "../assets/img/weapon1.png"
import main2_img from "../assets/img/main2.png"
import EnemyCard from './EnemyCard';

export default function BattlePage() {

  const [isAttack, setIsAttack] = useState(false)
  const [answer, setAnswer] = useState('')

  const [playShot] = useSound(shot)

  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  const changeAnswer = event => {
    setAnswer(answer + event.target.innerText)
  }

  useEffect(() => {
    if (answer.length > 1) {
      window.onkeyup = null
      setIsAttack(false)
      setAnswer('')
      playShot()
    }
  }, [answer, playShot])

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

          <div className="task-field">
            {
              isAttack ?
                (<div className="task">
                  <p>12 - x + 6 = 5</p>
                  <p className="ask-answer">x = ?</p>
                  <p className="answer">{answer}</p>
                  <div className="keyboard">
                    {
                      digits.map(digit => <span key={digit} onClick={changeAnswer}>{digit}</span>)
                    }
                  </div>
                </div>)
                :
                (<div>
                  <div className="is-ready">Are you ready to questions?</div>
                  <div onClick={onStartFight} className="start-fight">Start Fight</div>
                </div>)

            }
          </div>
          <EnemyCard />

    </StyledField>
  )
}



const StyledField = styled.div`

.enemy_task_wrapper {
  display: flex;
  width: 750px;
}
  
.character .icon.enemy {
  background: url(${main2_img}) no-repeat;
  background-size: cover;
}

.weapon.enemy {
  background: url(${weapon1_img});
  background-size: contain;
}

.bot-img {
  position: relative;
  border-radius: 35px;
  overflow: hidden;
  height: 400px;
  position: relative;
}

.bot-img::after {
  content: '';
  display: block;
  width: 250px;
  height: 400px;
  background-color: rgb(76, 255, 22);
  position: absolute;
  top: 0;
  opacity: 0.3;
}

.enemy img {
  width: 250px;
  height: 400px;
  object-fit: cover;
}

.enemy-hp {
  display: block;
  background: red;
  width: 200px;
  height: 20px;
  position: absolute;
  top: 370px;
  left: 25px;
  z-index: 1;
  border-radius: 3px;
}

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

`