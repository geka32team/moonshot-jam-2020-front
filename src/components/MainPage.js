import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import CharCard from "./CharCard";
import Inventory from "./Inventory";
import BattlePage from "./BattlePage";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";

import Images from "./Images";
import DropPage from "./DropPage";
// import io from "socket.io-client";
import { postNoData, get_char_info, get_bot_info } from "./_api/Requests";

require("dotenv").config();

// const url = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000/api";

export default function MainPage(props) {
  const character = useSelector((state) => state.character);
  const lvl = useSelector((state) => state.character.lvl);
  const nickname = useSelector((state) => state.character.nickname);
  const dispatch = useDispatch();

  const [bagOpen, setBagOpen] = useState(false);
  const [isBattle, setIsBattle] = useState(false);
  const [drop, setDrop] = useState(false);
  const [botLvl, setBotLvl] = useState(1);
  const [botDiff, setBotDiff] = useState(1);

  // const socket = io(url);

  useEffect(() => {
    getCharacterInfo();
  }, []);

  const getCharacterInfo = () => {
    get_char_info(character.nickname).then((data) => {
      dispatch({ type: "SET_CHARACTER", payload: data[0] });
    });
  };

  const getBotInfo = () => {
    get_bot_info(character.nickname).then((data) => {
      dispatch({ type: "SET_BOT", payload: data[0] });
    });
  };

  const onBattleStart = (diff) => {
    setBotDiff(diff);
    setIsBattle(true);
    getCharacterInfo();
    getBotInfo()
  };

  const bossItem = (count) => {
    let elements = [];
    for (let i = 1; i <= count; i++) {
      elements.push(
        <React.Fragment key={i}>
          <img
            data-tip="If you lose the fight vs boss you have a chance 5% to drop a wearing item. Exp and drop increased"
            className={`boss_${i} ${
              character.bosses_defeated >= i ? "defeated-boss" : null
            }`}
            src={Images[`boss_${(i % 2) + 1}`]}
            alt={`boss_${i}`}
          />
          <div
            className={`area_${i} ${
              character.bosses_defeated >= i ? "defeated-area" : null
            }`}
          ></div>
        </React.Fragment>
      );
    }
    return elements;
  };

  const onBagClick = (e) => {
    setBagOpen(e);
  };

  const onDrop = (e) => {
    setDrop(e);
    window.scrollTo(0, 0);
  };

  const changeBotLvl = (sign) => {
    if (sign === "+" && botLvl < character.lvl + 5) setBotLvl((b) => b + 1);
    else if (sign === "-" && botLvl > 1) setBotLvl((b) => b - 1);
  };

  const itemsDescription = (item, description) => {
    return item
      ? `${item.name}<br />Set: ${item.set_name}<br />Rarity: ${
          item.rar
        }<br />Main Bonus: ${Object.keys(item.main_bonus).map(
          (key) => "<br/>" + key + ": " + item.main_bonus[key]
        )}<br />Bonus for 2 items: ${Object.keys(item.set_bonus[0]).map(
          (key) => "<br/>" + key + ": " + item.set_bonus[0][key]
        )}<br />Bonus for 5 items: ${Object.keys(item.set_bonus[1]).map(
          (key) => "<br/>" + key + ": " + item.set_bonus[1][key]
        )}`
      : "Find " + description;
  };

  const logoutHandler = () => {
    postNoData("/signout").then((res) => {
      if (res.status === 200) {
        dispatch({ type: "SET_LOGIN", payload: false });
        props.history.push("/");
      }
    });
  };

  return (
    <StyledField>
      <ReactTooltip
        multiline={true}
        aria-haspopup="true"
        delayShow={200}
        className="tooltip"
      />
      <Header logoutHandler={logoutHandler} charInfo={{ lvl, nickname }} />
      <div className="container">
        <div className="game">
          {bagOpen ? (
            <Inventory
              onBagClose={onBagClick}
              itemsDescription={itemsDescription}
              charData={character}
            />
          ) : null}
          <div className="champs-wrapper">
            <CharCard
              onBagClick={onBagClick}
              itemsDescription={itemsDescription}
              defaultDmg={false}
              getCharacterInfo={getCharacterInfo}
            />

            {isBattle ? (
              <BattlePage
                setIsBattle={setIsBattle}
                getCharacterInfo={getCharacterInfo}
                getBotInfo={getBotInfo}
                onDrop={onDrop}
                time={10}
                botLvl={botLvl}
                botDiff={botDiff}
              />
            ) : (
              <div className="battles">
                <div className="duel">
                  <p>Duel</p>
                  <span onClick={() => onBattleStart(0)}>
                    <img src={Images.duel} alt="fight" />
                  </span>
                </div>

                <div className="enemy">
                  <div className="bot easy">
                    <p>Easy</p>
                    <div data-tip="exp 100%" className="bot-img">
                      <img src={Images.bot_1} alt="Bot" />
                    </div>
                    <span onClick={() => onBattleStart(0)}>
                      <button className="attack">attack</button>
                    </span>
                  </div>

                  <div className="bot normal">
                    <p>Normal</p>
                    <div data-tip="exp 120%" className="bot-img">
                      <img src={Images.bot_1} alt="Bot" />
                    </div>
                    <span onClick={() => onBattleStart(1)}>
                      <button className="attack">attack</button>
                    </span>
                  </div>

                  <div className="bot hard">
                    <p>Hard</p>
                    <div data-tip="exp 150%" className="bot-img">
                      <img src={Images.bot_1} alt="Bot" />
                    </div>
                    <span onClick={() => onBattleStart(2)}>
                      <button className="attack">attack</button>
                    </span>
                  </div>

                  <div className="bot extremal">
                    <p>Hell</p>
                    <div data-tip="exp 250%" className="bot-img">
                      <img src={Images.bot_1} alt="Bot" />
                    </div>
                    <span onClick={() => onBattleStart(3)}>
                      <button className="attack">attack</button>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {isBattle ? null : (
            <div
              data-tip="If bot level is lower than your - the expiriance will decreased"
              className="bot-lvl"
            >
              <span className="text-shadow">Bot level</span>
              <button onClick={() => changeBotLvl("-")}>-</button>
              <span className="text-shadow">{botLvl}</span>
              <button onClick={() => changeBotLvl("+")}>+</button>
            </div>
          )}
          <div className="moon" onClick={() => setIsBattle(false)}>
            {bossItem(6)}
          </div>
        </div>
        {drop ? (
          <DropPage
            onDrop={onDrop}
            characterInfo={character}
            itemsDescription={itemsDescription}
          />
        ) : null}
      </div>
    </StyledField>
  );
}

const StyledField = styled.div`
  .game {
    position: relative;
  }

  .champs-wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
  }

  .character {
    width: 312px;
    text-align: center;
    position: relative;
    border: 5px solid var(--secondary);
    background-size: contain;
    margin-top: 5px;
  }

  .character .icon {
    width: 202px;
    height: 300px;
    background: #dcdd90;
    background-size: cover;
    border: 1px solid var(--secondary);
  }

  .char-middle {
    display: flex;
  }

  .char-left,
  .char-right {
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
    background-color: var(--common);
    height: 150px;
    border: 1px solid var(--secondary);
    color: var(--main);
  }

  .hp {
    position: relative;
    font-weight: normal;
    color: var(--main);
    background-color: var(--common);
    height: 150px;
    border: 1px solid var(--secondary);
    color: var(--secondary);
  }

  .hp > div {
    background-color: var(--warning);
    position: absolute;
    bottom: 0px;
    width: 48px;
  }

  .exp > div {
    background-color: var(--magic);
    position: absolute;
    bottom: 0px;
    width: 48px;
  }

  .weapon {
    height: 100px;
    background-size: contain;
    flex: 1;
    border-right: var(--secondary) 1px solid;
  }

  .weapon > img {
    width: 151px;
    height: 100px;
  }

  .stats {
    height: 100px;
    background-color: var(--main);
    flex: 1;
  }

  .stats > div {
    height: 20px;
  }

  .bag {
    position: absolute;
    right: 60px;
    top: 10px;
    background: url(${Images.bag}) no-repeat;
    background-size: 30px 30px;
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

  .enemy p,
  .duel p {
    color: var(--main);
    font-size: 20px;
    background-color: rgb(10, 60, 82, 0.6);
    /* border: 2px solid var(--main); */
    margin-top: 10px;
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
    content: "";
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
    background-color: var(--secondary);
    width: 80px;
    color: var(--main);
    outline: none;
    border: none;
    border-radius: 2px;
    margin: 10px 0;
    transition: 0.2s;
    box-shadow: -3px 3px 6px var(--secondary);
  }

  .attack:hover {
    color: var(--secondary);
    cursor: pointer;
    box-shadow: -1px 1px 3px black;
    background-color: var(--main);
  }

  .duel {
    text-align: center;
    height: 80px;
    margin: 0 5px;
  }

  .duel img {
    border: 3px solid var(--warning);
    border-radius: 5px;
    height: 80px;
    width: 80px;
    transition: 0.2s;
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
    width: 80px;
    height: 100px;
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

  .moon img {
    width: 70px;
    height: 90px;
    position: absolute;
  }

  .boss_1 {
    top: 70px;
    left: 100px;
    /* z-index: 1; */
  }

  .boss_2 {
    top: 20px;
    left: 280px;
  }

  .boss_3 {
    top: 270px;
    left: 50px;
  }

  .boss_4 {
    top: 190px;
    left: 420px;
  }

  .boss_5 {
    top: 370px;
    left: 200px;
  }

  .boss_6 {
    top: 200px;
    left: 260px;
  }

  .tooltip {
    font-weight: 400;
    color: var(--main);
  }

  .bot-lvl {
    margin-left: auto;
    width: 300px;

    & > span {
      color: var(--main);
      padding: 4px 10px;
      background-color: #999;
    }
  }

  .start-fight {
    background-color: var(--secondary);
    text-align: center;
    width: 120px;
    color: var(--main);
    outline: none;
    border: none;
    border-radius: 2px;
    margin: 10px 0;
    transition: 0.2s;
    box-shadow: 0 0 6px var(--main);
    padding: 3px 6px;
    display: inline-block;
    font-size: 20px;
    margin-top: 100px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 6px var(--secondary);
      background-color: var(--main);
      color: var(--secondary);
    }
  }

  .task-field {
    display: inline-block;
    text-align: center;
    font-weight: 400;
    font-size: 28px;
    color: var(--main);
    text-shadow: -2px 2px 3px #000;
  }

  .ask-answer {
    color: limegreen;
  }

  .answer {
    font-size: 36px;
    color: limegreen;
    height: 36px;
  }

  .task {
    background-color: rgba(10, 60, 82, 0.8);
    margin-top: 5px;
  }

  .keyboard {
    width: 200px;
    margin: auto;

    & span {
      font-size: 38px;
      margin: 5px;
      display: inline-block;
      width: 50px;
      background-color: rgb(138, 162, 80);
      cursor: pointer;
      &:active {
        color: limegreen;
        transform: scale(1.05);
      }
    }
  }

  .timelane {
    height: 10px;
    background-color: gray;
    & > div {
      height: 10px;
      margin-left: auto;
    }
  }

  @media (max-width: 960px) {
    .champs-wrapper {
      flex-direction: column;
      align-items: center;
    }

    .moon {
      width: 300px;
      height: 300px;

      & .area_2 {
        top: -69px;
        left: 114px;
      }
      & .area_6 {
        top: 59px;
        left: 77px;
      }
      & .area_5 {
        top: 144px;
        left: 88px;
      }
      & .area_4 {
        top: 2px;
        left: 222px;
      }
      & .area_3 {
        top: 96px;
        left: -61px;
      }
      & > img {
        width: 40px;
        height: 50px;
      }
      & .defeated-boss {
        width: 50px;
        height: 65px;
      }
      & .boss_1 {
        top: 50px;
        left: 60px;
      }
      & .boss_2 {
        top: 7px;
        left: 157px;
      }
      & .boss_3 {
        top: 165px;
        left: 28px;
      }
      & .boss_4 {
        top: 131px;
        left: 249px;
      }
      & .boss_5 {
        top: 221px;
        left: 125px;
      }
      & .boss_6 {
        top: 122px;
        left: 154px;
      }
    }
  }
`;
