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

  const updateStats = stat => {
    fetch('')
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
            <div data-tip="Strength affects the chance of crit and damage to you" data-type="info">strength: {data.str}{data.freeStats ? <button onClick={updateStats('srtn')} className="add_stats">+</button> : null}</div>
            <div data-tip="Vitality affects the power of crit and your HP" data-type="info">vitality: {data.vit}{data.freeStats ? <button onClick={updateStats('vit')} className="add_stats">+</button> : null}</div>
            <div data-tip="Dextirity affects the power of crit and the chance to dodge a blow" data-type="info">dextirity: {data.dex}{data.freeStats ? <button onClick={updateStats('dex')} className="add_stats">+</button> : null}</div>
            <div data-tip="Accuracy affects the chance of crit and the chance to hit the enemy" data-type="info">accuracy: {data.acc}{data.freeStats ? <button onClick={updateStats('acc')} className="add_stats">+</button> : null}</div>
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
  right: 75px;
  top: 220px;
  color: var(--secondary);
  font-size: 34px;
  animation: hide 5s forwards;
}

.crit-taken {
  position: absolute;
  right: 70px;
  top: 220px;
  color: red;
  font-size: 34px;
  animation: hideCrit 5s forwards;
}

.char img {
  width: 200px;
  height: 298px;
  object-fit: cover;
}

.add_stats {
  cursor: pointer;
  display: inline-block;
  width: 15px;
  font-weight: 700;
  transform: translate(4px, -2px);
  background-color: inherit;
  color: var(--secondary);

  &:hover {
    transform: translate(4px, -2px) scale(1.5);
  }
}


`