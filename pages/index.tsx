import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Graph from "../components/graph.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Simon Townley-Smith</title>
        <meta name="description" content="Thoughts by Simon Townley-Smith" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between items-center p-24 min-h-screen">
        <div className="flex justify-between items-center text-sm max-w-[1100px] w-full z-2 font-mono">
          <div /*className="sm:flex sm:justify-center sm:fixed sm:w-full sm:items-end sm:pointer-events-none sm: sm:p-8 sm:h-[200px] sm:inset-x-0 sm:top-auto sm:bottom-0 sm:z-1 sm:bg-gradient-to-b sm:from-transparent sm:to-white sm:bg-repeat-y"*/
          >
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
            className="h-[30px] flex flex-row items-center sm:p-4"
            href="https://nextjs.org/"
          >
            Powered by&nbsp;
            <Image
              className={/*styles.logo*/ "relative invert drop-shadow-md"}
              src="/next.svg"
              alt="Next.js Logo"
              width={60}
              height={37}
            />
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

        {/* <div >className={styles.center}> */}
        <div className="h-[400px] w-[600px] ">
          <Graph />
        </div>

        <div
          className={
            /*styles.grid*/ "grid grid-cols-4 w-[1100px] max-w-[100%] "
          }
        >
          <Link
            href="/neurons/Software-Development"
            className={
              /*styles.card*/ "group py-4 px-[1.2rem] rounded-xl bg-[rgb(180, 185, 188)] border border-black hover:border-slate-300/20 hover:bg-slate-700/20"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={/*inter.className*/ "font-semibold mb-[0.7rem]"}>
              Neurons
              <span className=" ml-[6px] inline-block transition-all group-hover:translate-x-[4px]">
                &#10132;
                {/*-&gt;*/}
              </span>
            </h2>
            <p
              className={
                /*inter.className*/ "m-0 text-sm leading-6 opacity-60 max-w-[30ch]"
              }
            >
              My thoughts on transferable knowledge from my domains of interest:
              machine learning, software development, evolutionary biology, and
              more.
            </p>
          </Link>

          <Link
            href="/islands/Volleyball"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Thought Islands <span>&#10132;</span>
            </h2>
            <p className={inter.className}>
              Less transferable thoughts from my hobbies, primarily sports.
            </p>
          </Link>

          <a
            href="https://github.com/sitownle"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              My Github <span>&#10132;</span>
            </h2>
            <p className={inter.className}>
              Explore this and other projects inspired by my work at rays.ai.
            </p>
          </a>

          <a
            href="https://rays.ai"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              rays.ai <span>&#10132;</span>
            </h2>
            <p className={inter.className}>
              If they ever allow public accounts check out what I built over
              there!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
