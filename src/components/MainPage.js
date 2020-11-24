import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import CharCard from './CharCard'
import Inventory from './Inventory'
import BattlePage from './BattlePage'
import Header from './Header'

import Images from './Images'
import DropPage from './DropPage'

// import io from 'socket.io-client'
// const url = 'http://127.0.0.1:5000/api'

export default function MainPage() {

  const [bagOpen, setBagOpen] = useState(false)
  const [isBattle, setIsBattle] = useState(false)
  const [drop, setDrop] = useState(false)
  const [botLvl, setBotlvl] = useState(1)

  // const socket = io(url);

  // useEffect(() => {

  //   setBotlvl(charData.bot_lvl)
  //   socket.on('connect', () => {
  //     console.log(socket.id);
  //   });

  //   socket.emit("echo", { msg: 'hello' }, data => {
  //     console.log('data', data)
  //   });
  // }, []);

  const enemyData = {
    hp: 120,
    current_hp: 85,
    lvl: 3,
    str: 9,
    vit: 10,
    dex: 12,
    acc: 13,
    dmg: 84,
    items: [
      {
        url: 'iron_w',
        type: 'weapon',
        name: 'Pistol of Serafim',
        set_name: 'serafim',
        rar: 'epic',
        is_weared: true,
        main_bonus: {
          hp: 10,
          str: 1,
          dex: 2,
          time: 0.7,
          dmg: 76,
        },
        set_bonus: [
          {
            dmg: 12,
            vit: 3
          },
          {
            dmg: 25,
            vit: 6,
            str: 5
          }
        ]
      },
      {
        url: 'iron_h',
        type: 'helm',
        name: 'Pistol of Serafim',
        set_name: 'serafim',
        rar: 'epic',
        is_weared: true,
        main_bonus: {
          hp: 10,
          str: 1,
          dex: 2,
          time: 0.7,
          dmg: 76,
        },
        set_bonus: [
          {
            dmg: 12,
            vit: 3
          },
          {
            dmg: 25,
            vit: 6,
            str: 5
          }
        ]
      },
      {
        url: 'serafim_a',
        type: 'armor',
        name: 'Pistol of Serafim',
        set_name: 'serafim',
        rar: 'epic',
        is_weared: true,
        main_bonus: {
          hp: 10,
          str: 1,
          dex: 2,
          time: 0.7,
          dmg: 76,
        },
        set_bonus: [
          {
            dmg: 12,
            vit: 3
          },
          {
            dmg: 25,
            vit: 6,
            str: 5
          }
        ]
      },
      {
        url: 'serafim_b',
        type: 'boots',
        name: 'Pistol of Serafim',
        set_name: 'serafim',
        rar: 'epic',
        is_weared: true,
        main_bonus: {
          hp: 10,
          str: 1,
          dex: 2,
          time: 0.7,
          dmg: 76,
        },
        set_bonus: [
          {
            dmg: 12,
            vit: 3
          },
          {
            dmg: 25,
            vit: 6,
            str: 5
          }
        ]
      },
      {
        url: 'serafim_g',
        type: 'gloves',
        name: 'Pistol of Serafim',
        set_name: 'serafim',
        rar: 'epic',
        is_weared: false,
        main_bonus: {
          hp: 10,
          str: 1,
          dex: 2,
          time: 0.7,
          dmg: 76,
        },
        set_bonus: [
          {
            dmg: 12,
            vit: 3
          },
          {
            dmg: 25,
            vit: 6,
            str: 5
          }
        ]
      }
    ]
  }

  const charData = {
    hp: 90,
    current_hp: 64,
    lvl: 3,
    str: 9,
    vit: 10,
    dex: 12,
    acc: 13,
    dmg: 84,
    exp: 250,
    bot_lvl: 5,
    current_exp: 175,
    basic_dmg: 30,
    freeStats: 5,
    nickname: "Sodiicc",
    bosses_defeated: 2,
    items:
      [
        {
          url: 'weapon_alt',
          type: 'weapon',
          name: 'Pistol of Serafim',
          set_name: 'serafim',
          rar: 'epic',
          is_weared: true,
          lvl: 5,
          main_bonus: {
            hp: 10,
            str: 1,
            dex: 2,
            time: 0.7,
            dmg: 76,
          },
          set_bonus: [
            {
              dmg: 12,
              vit: 3
            },
            {
              dmg: 25,
              vit: 6,
              str: 5
            }
          ]
        },
        {
          url: 'serafim_a',
          type: 'armor',
          name: 'Pistol of Serafim',
          set_name: 'serafim',
          rar: 'legendary',
          is_weared: false,
          lvl: 5,
          main_bonus: {
            hp: 10,
            str: 1,
            dex: 2,
            time: 0.7,
            dmg: 76,
          },
          set_bonus: [
            {
              dmg: 12,
              vit: 3
            },
            {
              dmg: 25,
              vit: 6,
              str: 5
            }
          ]
        },
        {
          url: 'serafim_b',
          type: 'boots',
          name: 'Pistol of Serafim',
          set_name: 'serafim',
          rar: 'magic',
          is_weared: true,
          lvl: 5,
          main_bonus: {
            hp: 10,
            str: 1,
            dex: 2,
            time: 0.7,
            dmg: 76,
          },
          set_bonus: [
            {
              dmg: 12,
              vit: 3
            },
            {
              dmg: 25,
              vit: 6,
              str: 5
            }
          ]
        },
        {
          url: 'serafim_g',
          type: 'gloves',
          name: 'Pistol of Serafim',
          set_name: 'serafim',
          rar: 'rare',
          is_weared: true,
          lvl: 5,
          main_bonus: {
            hp: 10,
            str: 1,
            dex: 2,
            time: 0.7,
            dmg: 76,
          },
          set_bonus: [
            {
              dmg: 12,
              vit: 3
            },
            {
              dmg: 25,
              vit: 6,
              str: 5
            }
          ]
        },
        {
          url: 'serafim_h',
          type: 'helm',
          name: 'Pistol of Serafim',
          set_name: 'serafim',
          rar: 'uncommon',
          is_weared: false,
          lvl: 5,
          main_bonus: {
            hp: 10,
            str: 1,
            dex: 2,
            time: 0.7,
            dmg: 76,
          },
          set_bonus: [
            {
              dmg: 12,
              vit: 3
            },
            {
              dmg: 25,
              vit: 6,
              str: 5
            }
          ]
        },
        {
          url: 'iron_h',
          type: 'helm',
          name: 'Iron Helmet',
          set_name: 'iron',
          rar: 'epic',
          is_weared: true,
          lvl: 5,
          main_bonus: {
            hp: 10,
            str: 1,
            dex: 2,
            time: 0.7,
            dmg: 76,
          },
          set_bonus: [
            {
              dmg: 12,
              vit: 3
            },
            {
              dmg: 25,
              vit: 6,
              str: 5
            }
          ]
        },
        {
          url: 'iron_w',
          type: 'weapon',
          name: 'Pistol of Iron God',
          set_name: 'iron',
          rar: 'rare',
          is_weared: true,
          lvl: 5,
          main_bonus: {
            hp: 10,
            str: 1,
            dex: 2,
            time: 0.7,
            dmg: 76,
          },
          set_bonus: [
            {
              dmg: 12,
              vit: 3
            },
            {
              dmg: 25,
              vit: 6,
              str: 5
            }
          ]
        },
      ]

  }

  const bossItem = count => {
    let elements = []
    for (let i = 1; i <= count; i++) {
      elements.push(
        <React.Fragment key={i}>
          <img className={`boss_${i} ${charData.bosses_defeated >= i ? 'defeated-boss' : null}`} src={Images.boss} alt={`boss_${i}`} />
          <div className={`area_${i} ${charData.bosses_defeated >= i ? 'defeated-area' : null}`} src={Images.boss}></div>
        </React.Fragment>)
    }
    return elements
  }

  const onBagClick = e => {
    setBagOpen(e)
  }

  const onDrop = e => {
    setDrop(e)
  }

  const changeBotLvl = sign => {
    if (sign === '+' && botLvl < charData.lvl + 5) setBotlvl(b => b + 1)
    else if(sign === '-' && botLvl > 1) setBotlvl(b => b - 1)
  }


  const itemsDescription = (item, description) => {
    return item ? `${item.name}<br />Set: ${item.set_name}<br />Rarity: ${item.rar}<br />Main Bonus: ${Object.keys(item.main_bonus).map(key => '<br/>' + key + ': ' + item.main_bonus[key])}<br />Bonus for 2 items: ${Object.keys(item.set_bonus[0]).map(key => '<br/>' + key + ': ' + item.set_bonus[0][key])}<br />Bonus for 5 items: ${Object.keys(item.set_bonus[1]).map(key => '<br/>' + key + ': ' + item.set_bonus[1][key])}` : "Find " + description
  }

  return (
    <StyledField>
      <ReactTooltip
        multiline={true}
        aria-haspopup="true"
        delayShow={200}
        className="tooltip"
      />
    <Header info={{lvl: charData.lvl, name: charData.nickname}} />
    <div className="container">
      <div className="game">

        {
          bagOpen ?
            <Inventory onBagClose={onBagClick} itemsDescription={itemsDescription} charData={charData} />
            :
            null
        }
        <div className="champs-wrapper">
          <CharCard onBagClick={onBagClick} itemsDescription={itemsDescription} charData={charData} />

          {
            isBattle ?
              <BattlePage onDrop={onDrop} enemyData={enemyData} time={10}/>
              :
              <div className="battles">
                <div className="duel">
                  <p>Duel</p>
                  <span onClick={() => setIsBattle(true)}><img src={Images.duel} alt="fight" /></span>
                </div>

                <div className="enemy">
                  <div className="bot easy">
                    <p>Easy</p>
                    <div className="bot-img">
                      <img src={Images.bot_1} alt="Bot" />
                    </div>
                    <span onClick={() => setIsBattle(true)}><button className="attack">attack</button></span>
                  </div>

                  <div className="bot normal">
                    <p>Normal</p>
                    <div className="bot-img">
                      <img src={Images.bot_1} alt="Bot" />
                    </div>
                    <span onClick={() => setIsBattle(true)}><button className="attack">attack</button></span>
                  </div>

                  <div className="bot hard">
                    <p>Hard</p>
                    <div className="bot-img">
                      <img src={Images.bot_1} alt="Bot" />
                    </div>
                    <span onClick={() => setIsBattle(true)}><button className="attack">attack</button></span>
                  </div>

                  <div className="bot extremal">
                    <p>Hell</p>
                    <div className="bot-img">
                      <img src={Images.bot_1} alt="Bot" />
                    </div>
                    <span onClick={() => setIsBattle(true)}><button className="attack">attack</button></span>
                  </div>
                </div>
              </div>

          }

        </div>

        <div className="bot-lvl">
          <span>Bot level</span>
          <button onClick={() => changeBotLvl('-')}>-</button>
          <span>{botLvl}</span>
          <button onClick={() => changeBotLvl('+')}>+</button>
        </div>
        <div className="moon" onClick={() => setIsBattle(false)}>
          {bossItem(6)}
        </div>
      </div>
      {
        drop ?
        <DropPage onDrop={onDrop} characterInfo={charData} itemsDescription={itemsDescription} />
        :
        null
      }
      </div>
    </StyledField>

  )
}

const StyledField = styled.div`
.game {
  position: relative;
}

.champs-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
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
  background: #dcdd90;
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

.char-item img {
  width: 50px;
  height: 50px;
}

.exp {
  position: relative;
  font-weight: normal;
  background-color: #555;
  height: 150px;
  border: 1px solid black;
  color: white;
}

.hp {
  position: relative;
  font-weight: normal;
  color: white;
  background-color: black;
  height: 150px;
  border: 1px solid black;
  color: yellow;
}

.hp>div {
  background-color: red;
  position: absolute;
  bottom: 0px;
  width: 48px;
}

.exp>div {
  background-color: blue;
  position: absolute;
  bottom: 0px;
  width: 48px;
}

.weapon {
  height: 100px;
  background-size: contain;
  flex: 1;
  border-right: black 1px solid;
}

.weapon>img {
  width: 150px;
  height: 100px;
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
  background: url(${Images.bag}) no-repeat;
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
  background: url(${Images.moon});
  background-size: 540px 540px;
  background-position: center;
  border-radius: 50%;
  overflow: hidden;
}

.battles {
  display: flex;
  justify-content: space-between;
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

.bot-img img {
  width: 150px;
  height: 250px;
  object-fit: cover;
  /* object-position: -11px -31px; */
}

.bot-img {
  position: relative;
  border-radius: 35px;
  overflow: hidden;
  height: 250px;
}

.bot-img::after {
  content: '';
  display: block;
  width: 150px;
  height: 250px;
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

.moon .available-area {
  background-color: rgba(0, 0, 0, 0.5);
}

.moon .defeated-area {
  background-color: rgba(0, 0, 0, 0.2);
}

.moon .available-boss {
  z-index: 1;
  width: 60px;
  height: 120px;
}

.moon .defeated-boss {
  z-index: 1;
  width: 60px;
  height: 120px;
}

.moon .area_1 {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  transform: rotate(30deg);
  height: 50%;
  width: 50%;
  top: -10px;
  left: 0px;
}

.moon .area_2 {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  transform: rotate(-7deg);
  height: 50%;
  width: 50%;
  top: -107px;
  left: 190px;
}

.moon .area_3 {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  transform: rotate(-17deg);
  height: 70%;
  width: 50%;
  top: 167px;
  left: -100px;
}

.moon .area_4 {
  clip-path: polygon(50% 0%, 100% 28%, 85% 83%, 14% 49%, 3% 35%);
  transform: rotate(-33deg);
  height: 139%;
  width: 97%;
  top: 10px;
  left: 369px;
}

.moon .area_5 {
  clip-path: polygon(0 0, 0% 100%, 100% 74%);
  transform: rotate(-5.3deg);
  height: 70%;
  width: 75%;
  top: 248px;
  left: 149px;
}

.moon .area_6 {
  clip-path: polygon(41% 16%, 93.5% 10%, 78% 96%, 2% 53%);
  transform: rotate(0deg);
  height: 60%;
  width: 60%;
  top: 105px;
  left: 128px;
}

.boss_1 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 70px;
  left: 100px;
  z-index: 1;
}

.boss_2 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 20px;
  left: 280px;
}

.boss_3 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 270px;
  left: 50px;
}

.boss_4 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 190px;
  left: 420px;
}

.boss_5 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 370px;
  left: 200px;
}

.boss_6 {
  width: 50px;
  height: 100px;
  position: absolute;
  top: 200px;
  left: 260px;
}

.tooltip {
  font-weight: 400;
  color: yellow;
}

.bot-lvl {
  margin-left: auto;
  width: 300px;
}

.bot-lvl > span {
  color: yellow;
  padding-right: 10px;
  padding-left: 10px;
  background-color: #999;
}

`