import React from 'react'
import styled from 'styled-components'

import moon_img from "./img/moon.png"
import armor_img from "./img/armor.png"
import bag_img from "./img/bag.png"
import boots_img from "./img/boots.png"
import helm_img from "./img/helm.png"
import gloves_img from "./img/gloves.png"
import main_img from "./img/main.png"
import weapon_img from "./img/weapon.png"
import weapon1_img from "./img/weapon1.png"
import main2_img from "./img/main2.png"

export default function BattlePage() {
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

                    <div className="task-field">
                        <div className="is-ready">Are you ready to questions?</div>
                        <div className="task">
                            <p>12 - x + 6 = 5</p>
                            <p className="ask-answer">x = ?</p>
                            <p className="answer"></p>
                            <div className="keyboard">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="attack">Start Fight</div>
                    </div>
                    <div className="character">

                        <div className="char-middle">
                            <div className="char-left">
                                <div className="helm char-item"></div>
                                <div className="boots char-item"></div>
                                <div className="hp">80</div>
                            </div>

                            <div className="icon enemy"></div>

                            <div className="char-right">
                                <div className="armor char-item"></div>
                                <div className="gloves char-item"></div>
                                <div className="exp">easy</div>
                            </div>
                        </div>

                        <div className="char-bottom">
                            <div className="weapon enemy"></div>

                            <div className="stats">
                                <div>strength: 10</div>
                                <div>vitality: 12</div>
                                <div>dextirity: 8</div>
                                <div>accuracy: 7</div>
                                <div>weapon dmg: 10</div>
                            </div>
                        </div>

                    </div>
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
    background: url(${main_img}) no-repeat;
    background-size: cover;
    border: 1px solid black;
  }
  
  .character .icon.enemy {
    background: url(${main2_img}) no-repeat;
    background-size: cover;
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
    border-right: 1px solid black;
  }
  
  .weapon.enemy {
    background: url(${weapon1_img});
    background-size: contain;
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
    margin: 0 auto;
    width: 500px;
    height: 500px;
    background: url(${moon_img});
  }
  
  .enemy {
    text-align: center;
  }
  
  .enemy .bot {
    display: inline-block;
    width: 250px;
    background-size: cover;
    margin-left: 20px;
  }
  
  .bot-img {
    position: relative;
    border-radius: 35px;
    overflow: hidden;
    height: 400px;
    position: relative;
  }
  
  .bot-img::after {
    content: '';
    display: block;
    width: 250px;
    height: 400px;
    background-color: rgb(76, 255, 22);
    position: absolute;
    top: 0;
    opacity: 0.3;
  }
  
  .enemy img {
    width: 250px;
    height: 400px;
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
  
  .attack {
    background-color: rgb(62, 62, 62);
    text-align: center;
    width: 80px;
    height: 20px;
    color: yellow;
    outline: none;
    border: none;
    border-radius: 2px;
    margin: 10px 0;
    transition: 0.2s;
    box-shadow: -3px 3px 6px rgb(107, 107, 107);
    padding: 3px 6px;
    display: inline-block;
  }
  
  .attack:hover {
    color: rgb(57, 223, 57);
    cursor: pointer;
    box-shadow: -1px 1px 3px rgb(62, 62, 62);
    background-color: rgb(7, 7, 7);
  }
  
  .task-field {
    text-align: center;
  }
  
  .ask-answer {
    font-size: 28px;
    color: brown;
  }
  
  .answer {
    font-size: 36px;
    color: limegreen;
    height: 36px;
  }
  
  .task {
    height: 170px;
    visibility: hidden;
  }
  
  .keyboard {
    width: 200px;
  }
  
  .keyboard span {
    font-size: 38px;
    margin: 5px;
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: rgb(245, 205, 166);
    cursor: pointer;
  }
  
  .keyboard span:active {
    color: rgb(0, 146, 73);
    transform: scale(1.05);
  }`