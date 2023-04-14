import Link from "next/link";
import { getSets, getTerms } from "./db.ts";
import SetInput from "./setInput.tsx";
import ExistingSets from "./existingSets";

export default function mesmery() {
  const setList = ["Mandarin", "Korean", "Spanish"];
  function getSets() {}

  async function sets({}) {
    const setList = await getSets();
    return (
      <>
        {setList.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 w-full h-[90vh]">
      <ExistingSets />
      {/* <div className="w-full flex flex-col items-center gap-4">
        {setList.length ? "Select an existing set:" : "No sets found!"}
        {setList.map((value, index) => (
          <Link
            className="w-3/4 rounded-lg border border-slate-400/50 hover:bg-slate-400 hover:text-black transition-colors"
            key={index}
            href={`/mesmery/${value}`}
          >
            {value}
          </Link>
        ))}
      </div> */}
      <div className="md:w-[98px] flex items-center justify-center text-center text-slate-400">
        {setList.length ? "- OR -" : ""}
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <SetInput />
        {/* <div>Import a new set:</div>
        <textarea className="w-3/4 bg-slate-600 rounded border border-slate-500/30 p-2 text-slate-200/75 text-xs" />
        <button className="w-1/2 text-slate-200 text-sm px-2 border border-slate-800 rounded bg-gradient-to-l from-slate-700 to-black shadow-md hover:bg-gradient-to-r hover:from-slate-700 hover:to-black hover:text-slate-400 transition-colors">
          Import
        </button> */}
      </div>
    </div>
  );
}
