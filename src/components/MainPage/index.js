import React, { useEffect } from 'react'
import useSound from 'use-sound'
import styled from 'styled-components'

import boopSfx from './audio/moon_sound.wav'
import duel_img from "./img/duel.png"
import bot_img from "./img/bot.jpeg"
import boss_img from "./img/boss.jpeg"
import moon_img from "./img/moon.png"
import armor_img from "./img/armor.png"
import bag_img from "./img/bag.png"
import boots_img from "./img/boots.png"
import helm_img from "./img/helm.png"
import gloves_img from "./img/gloves.png"
import main_img from "./img/main.png"
import weapon_img from "./img/weapon.png"

export default function MainPage(props) {
  
  const [play] = useSound(boopSfx)
  
  useEffect(() => {
    console.log('start')
    play()
  }, [play])

  return (
    <StyledField>

      <div className="game">
        <div className="champs-wrapper">
          <div className="character">

            <div className="char-middle">
              <div className="char-left">
                <div className="helm char-item"></div>
                <div className="boots char-item"></div>
                <div className="exp">exp</div>
              </div>

              <div className="icon"></div>

              <div className="char-right">
                <div className="armor char-item"></div>
                <div className="gloves char-item"></div>
                <div className="hp">80</div>
              </div>
            </div>

            <div className="char-bottom">
              <div className="weapon"></div>

              <div className="stats">
                <div>strength: 10</div>
                <div>vitality: 12</div>
                <div>dextirity: 8</div>
                <div>accuracy: 7</div>
                <div>weapon dmg: 10</div>
              </div>
            </div>

            <div className="bag"></div>

          </div>
          <div className="duel">
            <p>Duel</p>
            <span onClick={() => props.history.push("/battle")}><img src={duel_img} alt="fight" /></span>
          </div>

          <div className="enemy">
            <div className="bot easy">
              <p>Easy</p>
              <div className="bot-img">
                <img src={bot_img} alt="Bot" />
              </div>
              <span onClick={() => props.history.push("/battle")}><button className="attack">attack</button></span>
            </div>

            <div className="bot normal">
              <p>Normal</p>
              <div className="bot-img">
                <img src={bot_img} alt="Bot" />
              </div>
              <span onClick={() => props.history.push("/battle")}><button className="attack">attack</button></span>
            </div>

            <div className="bot hard">
              <p>Hard</p>
              <div className="bot-img">
                <img src={bot_img} alt="Bot" />
              </div>
              <span onClick={() => props.history.push("/battle")}><button className="attack">attack</button></span>
            </div>

            <div className="bot extremal">
              <p>Hell</p>
              <div className="bot-img">
                <img src={bot_img} alt="Bot" />
              </div>
              <span onClick={() => props.history.push("/battle")}><button className="attack">attack</button></span>
            </div>
          </div>
        </div>
        <div className="moon">
          <img className="boss2" src={boss_img} alt="boss" />
          <img className="boss3" src={boss_img} alt="boss" />
          <img className="boss4" src={boss_img} alt="boss" />
          <img className="boss5" src={boss_img} alt="boss" />
          <img className="boss6" src={boss_img} alt="boss" />
          <div className="area1"></div>
          <div className="area2"></div>
          <div className="area3"></div>
          <div className="area4"></div>
          <div className="area5"></div>
          <div className="area6"></div>
          <img className="boss1" src={boss_img} alt="boss" />
        </div>
      </div>
    </StyledField>

  )
}

const StyledField = styled.div`
.champs-wrapper {
  display: flex;
  justify-content: space-between;
}

.character {
  width: 300px;
  text-align: center;
  position: relative;
  border: 5px solid rgb(4, 126, 10);
  background-size: contain;
}

.character .icon {
  width: 200px;
  height: 300px;
  background: url(${main_img});
  background-size: cover;
  border: 1px solid black;
}

.char-middle {
  display: flex;
}

.char-left, .char-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.char-bottom {
  display: flex;
}

.char-item {
  width: 50px;
  height: 50px;
}

.helm {
  background: url(${helm_img});
  background-size: cover;
}

.armor {
  background: url(${armor_img});
  background-size: cover;
}

.boots {
  background: url(${boots_img});
  background-size: cover;
}

.gloves {
  background: url(${gloves_img});
  background-size: cover;
}

.exp {
  font-weight: normal;
  background-color: blue;
  height: 150px;
  border: 1px solid black;
  color: white;
}

.hp {
  font-weight: normal;
  color: white;
  background-color: red;
  height: 150px;
  border: 1px solid black;
}

.weapon {
  height: 100px;
  background: url(${weapon_img});
  background-size: contain;
  flex: 1;
  border-right: black 1px solid;
}

.stats {
  height: 100px;
  background-color: rgb(197, 219, 74);
  flex: 1;
}

.stats>div {
  height: 20px;
}

.bag {
  position: absolute;
  right: 60px;
  top: 10px;
  background: url(${bag_img}) no-repeat;
  background-size: 80px 40px;
  background-position: -26px;
  width: 30px;
  height: 30px;
  transition: 0.2s;
  border-radius: 5px;
}

.bag:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.moon {
  position: relative;
  margin: 0 auto;
  width: 500px;
  height: 500px;
  background: url(${moon_img});
  background-size: 540px 540px;
  background-position: center;
  border-radius: 50%;
  overflow: hidden;
}

.enemy {
  text-align: center;
}

.enemy p {
  color: yellow;
  font-weight: normal;
}

.enemy .bot {
  display: inline-block;
  width: 150px;
  background-size: cover;
  margin-left: 20px;
}

.bot-img {
  position: relative;
  border-radius: 35px;
  overflow: hidden;
  height: 150px;
}

.bot-img::after {
  content: '';
  display: block;
  width: 150px;
  height: 150px;
  background-color: rgb(76, 255, 22);
  position: absolute;
  top: 0;
  opacity: 0.3;
}

.bot:nth-child(2) .bot-img::after {
  background-color: rgb(187, 241, 38);
}

.bot:nth-child(3) .bot-img::after {
  background-color: rgb(241, 109, 109);
}

.bot:nth-child(4) .bot-img::after {
  background-color: rgb(197, 11, 172);
}

.enemy img {
  width: 180px;
  height: 150px;
  object-fit: cover;
  object-position: -11px -31px;
}

.attack {
  background-color: rgb(63, 62, 62);
  width: 80px;
  height: 20px;
  color: yellow;
  outline: none;
  border: none;
  border-radius: 2px;
  margin: 10px 0;
  transition: 0.2s;
  box-shadow: -3px 3px 6px black;
}

.attack:hover {
  color: rgb(57, 223, 57);
  cursor: pointer;
  box-shadow: -1px 1px 3px black;
  background-color: rgb(7, 7, 7);
}

.duel {
  text-align: center;
  height: 80px;
}

.duel img {
  border: 3px solid rgb(252, 77, 77);
  border-radius: 5px;
  height: 80px;
  width: 80px;
  transition: 0.2s;
  color: black;
}

.duel img:hover {
  border: 3px solid rgb(45, 211, 45);
  cursor: pointer;
  transform: scale(1.05);
}

.moon div {
  position: absolute;
  cursor: pointer;
  transition: 0.4s;
  background-color: rgba(0, 0, 0, 0.8);
}

.moon img {
  cursor: pointer;
}

.moon div:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.moon .area1 {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  transform: rotate(30deg);
  height: 50%;
  width: 50%;
  top: -10px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
}

.moon .area2 {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  transform: rotate(-7deg);
  height: 50%;
  width: 50%;
  top: -107px;
  left: 190px;
}

.moon .area3 {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  transform: rotate(-17deg);
  height: 70%;
  width: 50%;
  top: 167px;
  left: -100px;
}

.moon .area4 {
  clip-path: polygon(50% 0%, 100% 28%, 85% 83%, 14% 49%, 3% 35%);
  transform: rotate(-33deg);
  height: 139%;
  width: 97%;
  top: 10px;
  left: 369px;
}

.moon .area5 {
  clip-path: polygon(0 0, 0% 100%, 100% 74%);
  transform: rotate(-5.3deg);
  height: 70%;
  width: 75%;
  top: 248px;
  left: 149px;
}

.moon .area6 {
  clip-path: polygon(41% 16%, 93.5% 10%, 78% 96%, 2% 53%);
  transform: rotate(0deg);
  height: 60%;
  width: 60%;
  top: 105px;
  left: 128px;
}

.boss1 {
  width: 70px;
  height: 140px;
  position: absolute;
  top: 70px;
  left: 100px;
}

.boss2 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 30px;
  left: 280px;
}

.boss3 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 270px;
  left: 50px;
}

.boss4 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 190px;
  left: 420px;
}

.boss5 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 370px;
  left: 200px;
}

.boss6 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 200px;
  left: 260px;
}`