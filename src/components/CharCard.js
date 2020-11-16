import React from 'react'
import styled from 'styled-components'

import main_img from "../assets/img/main.png"
import weapon_img from "../assets/img/weapon.png"
import armor_img from "../assets/img/armor.png"
import boots_img from "../assets/img/boots.png"
import helm_img from "../assets/img/helm.png"
import gloves_img from "../assets/img/gloves.png"

export default function CharCard(props) {

  return (
    <StyledField>

      <div className="character">

        <div className="char-middle">
          <div className="char-left">
            <div data-tip="Your Helm" data-type="info" className="helm char-item">
              <img src={helm_img} alt='img'/>
            </div>
            <div data-tip="Your Boots" data-type="info" className="boots char-item">
              <img src={boots_img} alt='img'/>
            </div>
            <div data-tip="Your Exp" data-type="info" className="exp">exp</div>
          </div>

          <div data-tip="Its you - a handsome UFO )))" data-type="info" className="icon char">
            <img src={main_img} alt='img'/>
          </div>

          <div className="char-right">
            <div data-tip="Your Armor" data-type="info" className="armor char-item">
              <img src={armor_img} alt='img'/>
            </div>
            <div data-tip="Your Gloves" data-type="info" className="gloves char-item">
              <img src={gloves_img} alt='img'/>
            </div>
            <div data-tip="Char HP" data-type="info" className="hp">100</div>
          </div>
        </div>

        <div className="char-bottom">
          <div data-tip="Your Weapon" data-type="info" className="weapon">
            <img src={weapon_img}  alt='img'/>
          </div>

          <div className="stats">
            <div data-tip="Your Strenght" data-type="info">strength: 10</div>
            <div data-tip="Your Vitality" data-type="info">vitality: 12</div>
            <div data-tip="Your Dextirity" data-type="info">dextirity: 8</div>
            <div data-tip="Your Accuracy" data-type="info">accuracy: 7</div>
            <div data-tip="Your Dmg" data-type="info">weapon dmg: 10</div>
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