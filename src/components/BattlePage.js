import React, { useState, useEffect, useRef } from "react";
import useSound from "use-sound";
import ReactTooltip from "react-tooltip";

import shot from "../assets/audio/shot.mp3";
import EnemyCard from "./EnemyCard";

export default function BattlePage(props) {
  const [isAttack, setIsAttack] = useState(false);
  const [answer, setAnswer] = useState("");
  const [timeWidth, setTimeWidth] = useState(100);
  const [timer, setTimer] = useState(null);

  const task = useRef(null);

  const [playShot] = useSound(shot);

  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const changeAnswer = (event) => {
    setAnswer(answer + event.target.innerText);
  };

  useEffect(() => {
    if (answer.length > 1) {
      window.onkeyup = null;
      props.onDrop(true);
      setIsAttack(false);
      setAnswer("");
      playShot();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, playShot]);

  useEffect(() => {
    if (isAttack) {
      startTime(10);
    } else {
      clearInterval(timer);
      setTimeWidth(100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAttack]);

  const startTime = (time) => {
    console.log("time", time);
    setTimer(
      setInterval(() => {
        if (timeWidth > 0) setTimeWidth((t) => t - 0.5);
      }, (time / 200) * 1000)
    );
  };

  const onStartFight = () => {
    setIsAttack(true);
    window.onkeyup = writeAnswer;
    task.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const writeAnswer = (e) => {
    if (e.key.match(/[0-9]/)) {
      setAnswer((a) => a + e.key);
    }
  };

  return (
    <>
      <ReactTooltip
        multiline={true}
        aria-haspopup="true"
        delayShow={200}
        className="tooltip"
        id="battleField"
      />
      <div className="task-field" ref={task}>
        {isAttack ? (
          <div className="task">
            <p>12 - x + 6 - 4 + 7 = 5</p>
            <p className="ask-answer">x = ?</p>
            <p className="answer">{answer}</p>
            <div className="timelane">
              <div
                style={{
                  width: `${timeWidth}%`,
                  backgroundColor: `rgb(${155 + (100 - timeWidth)}, ${
                    (255 * timeWidth) / 100
                  }, 0)`,
                }}
              ></div>
            </div>
            <div className="keyboard">
              {digits.map((digit) => (
                <span key={digit} onClick={changeAnswer}>
                  {digit}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div>Are you ready</div>
            <div>for questions?</div>
            <button onClick={onStartFight} className="start-fight">
              Start Fight
            </button>
          </div>
        )}
      </div>
      <EnemyCard enemyData={props.enemyData} />
    </>
  );
}
