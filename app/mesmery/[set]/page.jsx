"use client";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function mesmerySet(context) {
  const title = context.params.set;
  const [isRunning, setIsRunning] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  async function animateCard() {
    setIsRunning(true);
    await sleep(1000);
    setIsRunning(false);
  }
  function sleep(ms /*: number*/) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  return (
    <>
      <div className="w-[100%] md:w-1/2 h-[95vh] flex flex-col gap-6 pt-10 px-2 items-center overflow-hidden">
        Welcome to mesmery!
        <div
          id={isRunning ? styles.mesmeryCard : ""}
          className="w-[50%] h-[20vh] flex flex-col justify-center items-center rounded-lg border border-slate-400/50"
          onClick={() => {
            animateCard();
          }}
        >
          {isRunning ? "" : "Term"}
        </div>
        <div
          id={isRunning ? styles.mesmeryCard2 : styles.mesmeryCard3}
          className="w-[50%] h-[20vh] flex flex-col justify-center items-center rounded-lg border border-slate-400/50"
        ></div>
      </div>
    </>
  );
}
