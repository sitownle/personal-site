import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import GraphWrapper from "./graph-wrapper.jsx";
// for when three/postprocessing is fixed without dynamic
import Graph from "./graph.jsx";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center py-24 px-12 min-h-[95vh] bg-gradient-to-b from-slate-900 to-black">
      <div className="flex justify-center md:justify-between items-center text-sm max-w-[1100px] w-full z-2 font-mono">
        <div>
          <a
            href="https://github.com/sitownle/personal-site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center sm:p-4"
          >
            By Simon Townley-Smith
          </a>
        </div>
        <a
          className="h-[30px] flex flex-row items-center sm:p-4 hidden md:flex"
          href="https://nextjs.org/"
        >
          Powered by&nbsp;
          <div className="relative w-[65px] h-[14px]">
            <Image
              className="relative invert drop-shadow-md"
              src="/next.svg"
              alt="Next.js Logo"
              fill={true}
            />
          </div>
          <div
            className={
              styles.thirteen //"relative flex justify-center items-center w-[30px] h-[30px] p-[8px] ml-[10px] overflow-hidden shadow-md shadow-[#0000001a] rounded-xl before:absolute before:z-[-1] after-absolute after:z-[-1] before:w-[200%] before:h-[200%] before:animate-[spin_6s_infinite] before:bg-gradient-to-r before: from-[#00000010] before:to-[#00000010] before:via-[#00000080] after:bg-gradient-to-br after:from-[rgb(239, 245, 249)] after:to-[rgb(228, 232, 233)]" /*"sm:flex sm:justify-center sm:fixed sm:w-full"*/
            }
          >
            <Image
              src="/thirteen.svg"
              alt="13"
              className="invert drop-shadow-md"
              width={40}
              height={21}
            />
          </div>
        </a>
      </div>

      <div className="md:h-[400px] md:w-[600px] h-[210px] w-[350px]">
        <Suspense
          fallback={
            <div className="animate-fill w-[200px] bg-gradient-to-l from-cyan-400 to-black border-r border-cyan-400 h-[50px] ml-[20%] mt-[30%] shadow-[11px_0px_6px_5px_cyan-400] shadow-cyan-400" />
          }
        >
          <Graph />
        </Suspense>
        {/* <GraphWrapper /> */}
      </div>

      <div
        className={
          "md:flex-row md:w-[100%] flex flex-col items-center md:items-start justify-center w-[100%] max-w-[100vw] self-center"
        }
      >
        <Link
          href="/neurons/Software-Development"
          className={
            "min-w-[190px] group py-4 px-[1.2rem] rounded-xl bg-[rgb(180, 185, 188)] border border-black hover:border-slate-300/20 hover:bg-slate-700/20"
          }
        >
          <h2 className="font-semibold mb-[0.7rem]">
            Neurons
            <span className="ml-[6px] inline-block transition-all group-hover:translate-x-[4px]">
              &#10132;
            </span>
          </h2>
          <p className="m-0 text-sm leading-6 opacity-60 max-w-[30ch]">
            My thoughts on transferable knowledge from my domains of interest:
            machine learning, software development, evolutionary biology, and
            more.
          </p>
        </Link>

        <Link
          href="/islands/Volleyball"
          className={
            "min-w-[190px] group py-4 px-[1.2rem] rounded-xl bg-[rgb(180, 185, 188)] border border-black hover:border-slate-300/20 hover:bg-slate-700/20"
          }
        >
          <h2 className="font-semibold mb-[0.7rem]">
            Thought Islands
            <span className="ml-[6px] inline-block transition-all group-hover:translate-x-[4px]">
              &#10132;
            </span>
          </h2>
          <p className="m-0 text-sm leading-6 opacity-60 max-w-[30ch]">
            Less transferable thoughts from my hobbies, primarily sports.
          </p>
        </Link>

        <a
          href="https://github.com/sitownle"
          className={
            "min-w-[190px] group py-4 px-[1.2rem] rounded-xl bg-[rgb(180, 185, 188)] border border-black hover:border-slate-300/20 hover:bg-slate-700/20"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="font-semibold mb-[0.7rem]">
            My Github{" "}
            <span className="ml-[6px] inline-block transition-all group-hover:translate-x-[4px]">
              &#10132;
            </span>
          </h2>
          <p className="m-0 text-sm leading-6 opacity-60 max-w-[30ch]">
            Explore this and other projects inspired by my work at rays.ai.
          </p>
        </a>

        <Link
          href="/experimental"
          className={
            "min-w-[190px] group py-4 px-[1.2rem] rounded-xl bg-[rgb(180, 185, 188)] border border-black hover:border-slate-300/20 hover:bg-slate-700/20"
          }
        >
          <h2 className="font-semibold mb-[0.7rem]">
            My Projects{" "}
            <span className="ml-[6px] inline-block transition-all group-hover:translate-x-[4px]">
              &#10132;
            </span>
          </h2>
          <p className="m-0 text-sm leading-6 opacity-60 max-w-[30ch]">
            Check out my past work and current projects in action.
          </p>
        </Link>
      </div>
    </main>
  );
}
