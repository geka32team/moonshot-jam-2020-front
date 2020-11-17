import React from 'react'
import styled from 'styled-components'
import Images from './Images'

export default function EnemyCard(props) {
  const data = props.enemyData
  const weap = data.items.weapon
  const arm = data.items.armor
  const helm = data.items.helm
  const boots = data.items.boots
  const glo = data.items.gloves

  const itemsDescription = item => {
    return item ? `${item.name}<br />Set: ${item.set_name}<br />Rarity: ${item.rar}<br />Main Bonus: ${Object.keys(item.main_bonus).map(key => '<br/>' + key + ': ' + item.main_bonus[key])}<br />Bonus for 2 items: ${Object.keys(item.set_bonus[0]).map(key => '<br/>' + key + ': ' + item.set_bonus[0][key])}<br />Bonus for 5 items: ${Object.keys(item.set_bonus[1]).map(key => '<br/>' + key + ': ' + item.set_bonus[1][key])}` : "Empty slot"
  }

  return (
    <StyledField>

      <div className="character">

        <div className="char-middle">
          <div className="char-left">
            <div data-tip={itemsDescription(helm)} data-type="info" data-for="battleField" className="helm char-item">
              <img src={helm ? Images.serafim_h : Images.default_helm} alt='img' />
            </div>
            <div data-tip={itemsDescription(boots)} data-type="info" data-for="battleField" className="boots char-item">
              <img src={boots ? Images.serafim_b : Images.default_boots} alt='img' />
            </div>
            <div data-tip="Enemy HP" data-type="info" data-for="battleField" className="hp">{data.hp}</div>
          </div>

          <div data-tip="Enemy FACE" data-type="info" data-for="battleField" className="icon enemy_char">
            <img src={Images.enemy} alt='img' />
          </div>

          <div className="char-right">
            <div data-tip={itemsDescription(arm)} data-type="info" data-for="battleField" className="armor char-item">
              <img src={arm ? Images.serafim_a : Images.default_armor} alt='img' />
            </div>
            <div data-tip={itemsDescription(glo)} data-type="info" data-for="battleField" className="gloves char-item">
              <img src={glo ? Images.serafim_g : Images.default_gloves} alt='img' />
            </div>
            <div data-tip="Enemy Difficulty" data-type="info" data-for="battleField" className="exp">easy</div>
          </div>
        </div>

        <div className="char-bottom">
          <div data-tip={itemsDescription(weap)} data-type="info" data-for="battleField" className="weapon">
            <img src={Images.weapon_alt} alt='img' />
          </div>

          <div className="stats">
            <div data-tip="Enemy Strength" data-type="info" data-for="battleField">strength: {data.str}</div>
            <div data-tip="Enemy Vetality" data-type="info" data-for="battleField">vitality: {data.vit}</div>
            <div data-tip="Enemy Dextirity" data-type="info" data-for="battleField">dextirity: {data.dex}</div>
            <div data-tip="Enemy Accuracy" data-type="info" data-for="battleField">accuracy: {data.acc}</div>
            <div data-tip="Enemy Damage" data-type="info" data-for="battleField">weapon dmg: {data.dmg}</div>
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