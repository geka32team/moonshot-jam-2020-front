import React from 'react'
import styled from 'styled-components'

import main_img from "../assets/img/main.png"
import weapon_img from "../assets/img/weapon.png"
import armor_img from "../assets/img/armor.png"
import boots_img from "../assets/img/boots.png"
import helm_img from "../assets/img/helm.png"
import gloves_img from "../assets/img/gloves.png"
import default_armor_img from "../assets/img/default_armor.png"
import default_weapon_img from "../assets/img/default_weapon.png"
import default_gloves_img from "../assets/img/default_gloves.png"
import default_helm_img from "../assets/img/default_helm.png"
import default_boots_img from "../assets/img/default_boots.png"

export default function CharCard(props) {

  const data = props.charData
  const weap = data.items.filter(item => item.type === 'weapon' && item.isWear)[0]
  const arm = data.items.filter(item => item.type === 'armor' && item.isWear)[0]
  const helm = data.items.filter(item => item.type === 'helm' && item.isWear)[0]
  const boots = data.items.filter(item => item.type === 'boots' && item.isWear)[0]
  const glo = data.items.filter(item => item.type === 'gloves' && item.isWear)[0]

  const itemsDescription = (item, description) => {
    return item ? `${item.name}<br />Set: ${item.set_name}<br />Rarity: ${item.rar}<br />Main Bonus: ${Object.keys(item.main_bonus).map(key => '<br/>' + key + ': ' + item.main_bonus[key])}<br />Bonus for 2 items: ${Object.keys(item.set_bonus[0]).map(key => '<br/>' + key + ': ' + item.set_bonus[0][key])}<br />Bonus for 5 items: ${Object.keys(item.set_bonus[1]).map(key => '<br/>' + key + ': ' + item.set_bonus[1][key])}` : "Find " + description
  }

  return (
    <StyledField>

      <div className="character">

        <div className="char-middle">
          <div className="char-left">
            <div data-tip={itemsDescription(helm, "Helm")} data-type="info" className="helm char-item">
              <img src={helm ? helm_img : default_helm_img} alt='img' />
            </div>
            <div data-tip={itemsDescription(boots, "Boots")} data-type="info" className="boots char-item">
              <img src={boots ? boots_img : default_boots_img} alt='img' />
            </div>
            <div data-tip="Your Exp" data-type="info" className="exp">{data.exp}</div>
          </div>

          <div data-tip="Its you - a handsome UFO )))" data-type="info" className="icon char">
            <img src={main_img} alt='img' />
          </div>

          <div className="char-right">
                <div data-tip={itemsDescription(arm, "Armor")} data-type="info" className="armor char-item">
                  <img src={arm ? armor_img : default_armor_img} alt='img' />
                </div>
            <div data-tip={itemsDescription(glo, "Gloves")} data-type="info" className="gloves char-item">
              <img src={glo ? gloves_img : default_gloves_img} alt='img' />
            </div>
            <div data-tip="Char HP" data-type="info" className="hp">{data.hp}</div>
          </div>
        </div>

        <div className="char-bottom">

              <div data-tip={itemsDescription(weap, 'Weapon')} data-type="info" className="weapon">
                <img src={weap ? weapon_img : default_weapon_img} alt='img' />
              </div>

          <div className="stats">
            <div data-tip="Your Strenght" data-type="info">strength: {data.str}</div>
            <div data-tip="Your Vitality" data-type="info">vitality: {data.vit}</div>
            <div data-tip="Your Dextirity" data-type="info">dextirity: {data.dex}</div>
            <div data-tip="Your Accuracy" data-type="info">accuracy: {data.acc}</div>
            <div data-tip="Your Dmg" data-type="info">weapon dmg: {data.dmg}</div>
          </div>
        </div>

        <div data-tip="Your inventory" data-type="info" className="bag" onClick={() => props.onBagClick(true)}></div>

      </div>

    </StyledField>
  )
}


const StyledField = styled.div`

.char img {
  width: 200px;
  height: 300px;
  object-fit: cover;
}


`