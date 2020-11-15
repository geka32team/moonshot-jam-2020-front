import React from 'react'
import ReactTooltip from 'react-tooltip'

export default function EnemyCard() {

  return (
    <div className="character">
      <ReactTooltip
        multiline={true}
        aria-haspopup="true"
        delayShow={200}
      />

      <div className="char-middle">
        <div className="char-left">
          <div data-tip="Enemy Helm" data-type="info" className="helm char-item"></div>
          <div data-tip="Enemy Boots" data-type="info" className="boots char-item"></div>
          <div data-tip="Enemy HP" data-type="info" className="hp">80</div>
        </div>

        <div data-tip="Enemy FACE" data-type="info" className="icon enemy"></div>

        <div className="char-right">
          <div data-tip="Enemy Armor" data-type="info" className="armor char-item"></div>
          <div data-tip="Enemy Gloves" data-type="info" className="gloves char-item"></div>
          <div data-tip="Enemy Difficulty" data-type="info" className="exp">easy</div>
        </div>
      </div>

      <div className="char-bottom">
        <div data-tip="Enemy Weapon" data-type="info" className="weapon enemy"></div>

        <div className="stats">
          <div data-tip="Enemy Strength" data-type="info">strength: 10</div>
          <div data-tip="Enemy Vetality" data-type="info">vitality: 12</div>
          <div data-tip="Enemy Dextirity" data-type="info">dextirity: 8</div>
          <div data-tip="Enemy Accuracy" data-type="info">accuracy: 7</div>
          <div data-tip="Enemy Damage" data-type="info">weapon dmg: 10</div>
        </div>
      </div>

    </div>

  )
}