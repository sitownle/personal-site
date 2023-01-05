import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

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
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://github.com/sitownle/personal-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Simon Townley-Smith
            </a>
          </div>
          <div className="h-[30px] flex flex-row items-center">
            Powered by&nbsp;
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={60}
              height={37}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={21}
                priority
              />
            </div>
          </div>
        </div>

        <div className={styles.center}></div>

        <div className={styles.grid}>
          <a
            href="http://localhost:3000/musings"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Musings <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              My thoughts on transferable knowledge from my domains of interest:
              machine learning, software development, evolutionary biology, and
              more.
            </p>
          </a>

          <a
            href="http://localhost:3000/islands"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Thought Islands <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Less transferable thoughts from my hobbies, primarily sports.
            </p>
          </a>

          <a
            href="https://github.com/sitownle"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              My Github <span>-&gt;</span>
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
              rays.ai <span>-&gt;</span>
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
