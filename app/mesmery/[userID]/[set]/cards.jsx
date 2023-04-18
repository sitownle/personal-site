"use client";
import { useState } from "react";
import styles from "../../../../styles/Home.module.css";

export default function Cards(/*context, */ { title, terms }) {
  //const title = context.params.set;
  const [isRunning, setIsRunning] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [learned, setLearned] = useState(0);
  async function animateCard() {
    setLearned(learned + 1);
    setIsRunning(true);
    await sleep(1000);
    setIsRunning(false);
  }
  function sleep(ms /*: number*/) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function checkAnswer(answer) {
    const correct = searchParams.get("def");
    if (answer.toLowerCase() !== correct.toLowerCase()) {
      console.log("WRONG");
      setIsWrong(true);
      await sleep(1000);
      setIsWrong(false);
    } else {
      console.log("RIGHT");
      animateCard();
    }
  }
  return (
    <>
      <div className="w-[100%] md:w-1/2 h-[95vh] flex flex-col gap-6 pt-10 px-2 items-center overflow-hidden">
        <h1 className="text-4xl">{title}</h1>
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
          {isRunning ? "" : isWrong ? "" : title}
        </div>
        <input
          className="px-2 py-[5px] rounded bg-slate-300 text-black"
          placeholder="definition"
          onKeyDown={e => {
            if (e.key === "Enter") checkAnswer(e.target.value);
          }}
        />
        <div>{`learned: ${learned}   unlearned: ${1 - learned}`}</div>
        <div
          id={isRunning ? styles.mesmeryCard2 : styles.mesmeryCard3}
          className="w-[50%] h-[20vh] flex flex-col justify-center items-center rounded-lg border border-slate-400/50"
        ></div>
      </div>
    </>
  );
}
