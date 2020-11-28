import React, { useState } from 'react'
import styled from 'styled-components'

import Images from './Images'

export default function CharCard(props) {

  const data = props.charData
  const weapon = data.items.filter(item => item.type === 'weapon' && item.is_weared)[0]
  const armor = data.items.filter(item => item.type === 'armor' && item.is_weared)[0]
  const helm = data.items.filter(item => item.type === 'helm' && item.is_weared)[0]
  const boots = data.items.filter(item => item.type === 'boots' && item.is_weared)[0]
  const gloves = data.items.filter(item => item.type === 'gloves' && item.is_weared)[0]

  const [isCrit, setIsCrit] = useState(false)

  const returnItem = (item, description) => {
    return (<div data-tip={props.itemsDescription(item, description)} data-type="info" className={description + " char-item"}>
      <img src={item ? Images[item.url] : Images['default_' + description]} alt={description} />
    </div>)
  }

  return (
    <StyledField>

      <div className="character">
        {
          isCrit ?
            <div className="crit-taken">57</div> :
            <div className="dmg-taken">26</div>
        }
        <div className="char-middle">
          <div className="char-left">
            {returnItem(helm, "helm")}
            {returnItem(boots, "boots")}
            <div data-tip="Your Exp" data-type="info" className="exp">{data.current_exp}
              <div style={{ height: `${data.current_exp / data.exp * 150}px` }}></div>
            </div>
          </div>

          <div data-tip="Its you - a handsome UFO )))" data-type="info" className="icon char">
            <img onClick={() => setIsCrit(!isCrit)} src={Images.char} alt='img' />
          </div>

          <div className="char-right">
            {returnItem(armor, "armor")}
            {returnItem(gloves, "gloves")}
            <div data-tip="Char HP" data-type="info" className="hp">{data.current_hp}
              <div style={{ height: `${data.current_hp / data.hp * 150}px` }}></div>
            </div>
          </div>
        </div>

        <div className="char-bottom">
          {returnItem(weapon, "weapon")}

          <div className="stats">
            <div data-tip="Your Strenght" data-type="info">strength: {data.str}{data.freeStats ? <span className="add_stats">+</span> : null}</div>
            <div data-tip="Your Vitality" data-type="info">vitality: {data.vit}{data.freeStats ? <span className="add_stats">+</span> : null}</div>
            <div data-tip="Your Dextirity" data-type="info">dextirity: {data.dex}{data.freeStats ? <span className="add_stats">+</span> : null}</div>
            <div data-tip="Your Accuracy" data-type="info">accuracy: {data.acc}{data.freeStats ? <span className="add_stats">+</span> : null}</div>
            <div data-tip="Your Dmg" data-type="info">weapon dmg: {data.dmg}</div>
          </div>
        </div>

        <div data-tip="Your inventory" data-type="info" className="bag" onClick={() => props.onBagClick(true)}></div>

      </div>

    </StyledField>
  )
}


const StyledField = styled.div`

.dmg-taken {
  position: absolute;
  right: -70px;
  top: 200px;
  color: yellow;
  font-size: 34px;
  animation: hide 5s forwards;
}

.crit-taken {
  position: absolute;
  right: -70px;
  top: 200px;
  color: red;
  font-size: 34px;
  animation: hideCrit 5s forwards;
}

.char img {
  width: 200px;
  height: 300px;
  object-fit: cover;
}

.add_stats {
  border: 1px solid black;
  cursor: pointer;
  display: inline-block;
  width: 15px;
}


`