import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import weapon1_img from "../assets/img/weapon1.png"
import enemy_img from "../assets/img/main2.png"
import armor_img from "../assets/img/armor.png"
import boots_img from "../assets/img/boots.png"
import helm_img from "../assets/img/helm.png"
import gloves_img from "../assets/img/gloves.png"

export default function EnemyCard(props) {
  const data = props.enemyData
  const weap = data.items.weapon
  return (
    <StyledField>

      <div className="character">
        <ReactTooltip
          multiline={true}
          aria-haspopup="true"
          delayShow={200}
          textColor='yellow'
        />

        <div className="char-middle">
          <div className="char-left">
            <div data-tip="Enemy Helm" data-type="info" className="helm char-item">
              <img src={helm_img} alt='img' />
            </div>
            <div data-tip="Enemy Boots" data-type="info" className="boots char-item">
              <img src={boots_img} alt='img' />
            </div>
            <div data-tip="Enemy HP" data-type="info" className="hp">{data.hp}</div>
          </div>

          <div data-tip="Enemy FACE" data-type="info" className="icon enemy_char">
            <img src={enemy_img} alt='img' />
          </div>

          <div className="char-right">
            <div data-tip="Enemy Armor" data-type="info" className="armor char-item">
              <img src={armor_img} alt='img' />
            </div>
            <div data-tip="Enemy Gloves" data-type="info" className="gloves char-item">
              <img src={gloves_img} alt='img' />
            </div>
            <div data-tip="Enemy Difficulty" data-type="info" className="exp">easy</div>
          </div>
        </div>

        <div className="char-bottom">
  <div data-tip={`${weap.name}<br />Set: ${weap.set_name}<br />Rarity: ${weap.rar}<br />Damage: ${weap.damage}<br />Hp: ${weap.hp}<br />Str: ${weap.str}<br />Vit: ${weap.vit}<br />Dex: ${weap.dex}<br />Acc: ${weap.acc}<br />Bonus Dmg: ${weap.dmg}<br />Bonus Time: ${weap.time}<br />Bonus for 2 items: ${weap.set_bonus[0].map(item => item)}<br />Bonus for 5 items: ${weap.set_bonus[1].map(item => item)}`} data-type="info" className="weapon">
            <img src={weapon1_img} alt='img' />
          </div>

          <div className="stats">
            <div data-tip="Enemy Strength" data-type="info">strength: {data.str}</div>
            <div data-tip="Enemy Vetality" data-type="info">vitality: {data.vit}</div>
            <div data-tip="Enemy Dextirity" data-type="info">dextirity: {data.dex}</div>
            <div data-tip="Enemy Accuracy" data-type="info">accuracy: {data.acc}</div>
            <div data-tip="Enemy Damage" data-type="info">weapon dmg: {data.dmg}</div>
          </div>
        </div>

      </div>

    </StyledField>
  )
}


const StyledField = styled.div`

.enemy_task_wrapper {
  display: flex;
  width: 750px;
}

.enemy_char img {
  width: 200px;
  height: 300px;
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


`