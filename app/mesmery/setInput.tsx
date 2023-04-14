"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
//import { insertSet, insertTerms } from "./db";

export default function SetInput({}) {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const setRef = useRef<HTMLTextAreaElement>(null);
  const [parseSetting, setParseSetting] = useState("\t");

  async function importSet(title: string, value: string) {
    const cards = value.split("\n");
    console.log(cards);
    const terms = [];
    for (let i = 0; i < cards.length; i++) {
      terms.push([...cards[i].split(parseSetting)]);
    }
    console.log(title);
    console.log(terms);
    console.log(user.id);
    const insertedSet = await fetch("/api/sets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: title, owner: user.id })
    }); //insertSet({ name: title, owner: user.id });
    console.log(insertedSet);
    router.push(`/mesmery/${isSignedIn ? user.id : "404"}/${title}`);
  }
  return (
    <>
      <div>Import a new set:</div>
      <input
        ref={titleRef}
        className="w-3/4 bg-slate-600 rounded-lg border border-slate-500/30 px-2 py-[1px] text-slate-200/75"
        placeholder="Set Title"
      />
      <div className="w-full text-left">
        <p className="ml-[12.5%]">Separate on:</p>
      </div>
      <div className="flex flex-row gap-2 w-full">
        <input
          type="radio"
          id="tab"
          className="ml-[12.5%]"
          checked={parseSetting === "\t" ? true : false}
          onChange={() => setParseSetting("\t")}
        />
        <label htmlFor="tab">Tab </label>
      </div>
      <div className="flex flex-row gap-2 w-full">
        <input
          type="radio"
          id="comma"
          className="ml-[12.5%]"
          checked={parseSetting === "," ? true : false}
          onChange={() => setParseSetting(",")}
        />
        <label htmlFor="comma">Comma </label>
      </div>
      <textarea
        ref={setRef}
        placeholder={"Paste Quizlet export here"}
        spellCheck={false}
        className="w-3/4 bg-slate-600 rounded-lg border border-slate-500/30 p-2 text-slate-200/75 text-xs"
      />
      <button
        className="w-1/2 text-slate-200 text-sm px-2 border border-slate-800 rounded bg-gradient-to-l from-slate-700 to-black shadow-md hover:bg-gradient-to-r hover:from-slate-700 hover:to-black hover:text-slate-400 transition-colors"
        onClick={() => {
          importSet(
            titleRef.current ? titleRef.current.value : "",
            setRef.current ? setRef.current.value : ""
          );
        }}
      >
        Import
      </button>
    </>
  );
}
