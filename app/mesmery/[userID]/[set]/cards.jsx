"use client";
import { useState } from "react";
import styles from "../../../../styles/Home.module.css";

export default function Cards(/*context, */ { title, terms }) {
  //const title = context.params.set;
  const [isRunning, setIsRunning] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [remaining, setRemaining] = useState(terms);
  const [learned, setLearned] = useState([]);

  async function animateCard() {
    const prelearned = learned;
    const preremain = remaining;
    const correctAnswer = preremain.shift();
    prelearned.push(correctAnswer);
    setRemaining(preremain);
    setLearned(prelearned);
    //setLearned(learned + 1);
    setIsRunning(true);
    await sleep(1000);
    setIsRunning(false);
  }

  function sleep(ms /*: number*/) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function checkAnswer(answer) {
    const correct = remaining[0].definition;
    console.log("CHECK: ", correct);
    if (answer.toLowerCase() !== correct.toLowerCase()) {
      console.log("WRONG");
      const preremain = remaining;
      const correctAnswer = preremain.shift();
      preremain.push(correctAnswer);
      setRemaining(preremain);
      setIsWrong(true);
      await sleep(1000);
      setIsWrong(false);
    } else {
      console.log("RIGHT");
      animateCard();
    }
  }

  function resetSet() {
    setRemaining(learned);
    setLearned([]);
  }

  return (
    <>
      <div className="w-[100%] md:w-1/2 h-[95vh] flex flex-col gap-6 pt-10 px-2 items-center overflow-hidden">
        <h1 className="text-4xl">{title}</h1>
        {remaining.length ? (
          <>
            <div
              id={
                isRunning
                  ? styles.mesmeryCard
                  : isWrong
                  ? styles.mesmeryCardWrong
                  : ""
              }
              className="w-[50%] h-[20vh] flex flex-col justify-center items-center rounded-lg border border-slate-400/50 transition-all"
            >
              {isRunning ? "" : isWrong ? "" : remaining[0].term}
            </div>
            <input
              className="px-2 py-[5px] rounded bg-slate-300 text-black"
              placeholder="definition"
              onKeyDown={e => {
                if (e.key === "Enter") {
                  checkAnswer(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <div className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-500">{`learned: ${learned.length}`}</div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">{`unlearned: ${remaining.length}`}</div>
            <div
              id={isRunning ? styles.mesmeryCard2 : styles.mesmeryCard3}
              className="w-[50%] h-[20vh] flex flex-col justify-center items-center rounded-lg border border-slate-400/50"
            />
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
            {`Congratulations! You've finished ${title}! Would you like to start over?`}
            <button
              onClick={() => {
                resetSet();
              }}
              className="w-1/2 text-center text-slate-200 text-sm px-2 py-[5px] border border-slate-800 rounded-lg bg-gradient-to-l from-slate-700 to-black shadow-md hover:bg-gradient-to-r hover:from-slate-700 hover:to-black hover:text-slate-400 transition-colors duration-300"
            >
              <span className="w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-200 hover:bg-gradient-to-l">{`RESET ${title}`}</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
