import React, {useState} from 'react'
import styled from 'styled-components'
import Images from './Images'

export default function EnemyCard(props) {
  const data = props.enemyData
  const weapon = data.items.filter(item => item.type === 'weapon' && item.is_weared)[0]
  const armor = data.items.filter(item => item.type === 'armor' && item.is_weared)[0]
  const helm = data.items.filter(item => item.type === 'helm' && item.is_weared)[0]
  const boots = data.items.filter(item => item.type === 'boots' && item.is_weared)[0]
  const gloves = data.items.filter(item => item.type === 'gloves' && item.is_weared)[0]

  const [isCrit, setIsCrit] = useState(false)

  const itemsDescription = item => {
    return item ? `${item.name}<br />Set: ${item.set_name}<br />Rarity: ${item.rar}<br />Main Bonus: ${Object.keys(item.main_bonus).map(key => '<br/>' + key + ': ' + item.main_bonus[key])}<br />Bonus for 2 items: ${Object.keys(item.set_bonus[0]).map(key => '<br/>' + key + ': ' + item.set_bonus[0][key])}<br />Bonus for 5 items: ${Object.keys(item.set_bonus[1]).map(key => '<br/>' + key + ': ' + item.set_bonus[1][key])}` : "Empty slot"
  }

  const returnItem = (item, description) => {
    return (<div data-tip={itemsDescription(item)} data-type="info" data-for="battleField" className={description + " char-item"}>
      <img src={item ? Images[item.url] : Images['default_' + description]} alt={description} />
    </div>)
  }

  return (
    <StyledField>

      <div className="character">
      {
          isCrit ?
            <div className="crit-taken">63</div> :
            <div className="dmg-taken">29</div>
        }
        <div className="char-middle">
          <div className="char-left">
            {returnItem(helm, "helm")}
            {returnItem(boots, "boots")}

            <div data-tip="Enemy HP" data-type="info" data-for="battleField" className="hp">{data.current_hp}
              <div style={{ height: `${data.current_hp / data.hp * 150}px` }}></div>
            </div>
          </div>

          <div data-tip="Enemy FACE" data-type="info" data-for="battleField" className="icon enemy_char">
            <img onClick={() => setIsCrit(!isCrit)} src={Images.enemy} alt='img' />
          </div>

          <div className="char-right">
            {returnItem(armor, "armor")}
            {returnItem(gloves, "gloves")}
            <div data-tip="Enemy Difficulty" data-type="info" data-for="battleField" className="exp">easy</div>
          </div>
        </div>

        <div className="char-bottom">
          {returnItem(weapon, "weapon")}

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

.dmg-taken {
  position: absolute;
  left: 75px;
  top: 220px;
  color: var(--secondary);
  font-size: 34px;
  animation: hide 5s forwards;
  z-index: 1;
}

.crit-taken {
  position: absolute;
  left: 70px;
  top: 220px;
  color: red;
  font-size: 34px;
  animation: hideCrit 5s forwards;
  z-index: 1;
}

.enemy_task_wrapper {
  display: flex;
  width: 750px;
}

.enemy_char img {
  width: 200px;
  height: 298px;
  object-fit: cover;
  transform: rotateY(180deg);
}

.weapon>img {
  transform: rotateY(180deg);
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