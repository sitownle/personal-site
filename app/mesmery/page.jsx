import { getSets, getTerms } from "./db.ts";

export default function mesmery() {
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
    <>
      <div className="text-center">
        <div>Select an existing set:</div>
        <div>Mandarin</div>
        <div>Korean</div>
        <div>Spanish</div>
      </div>
      <div>- OR -</div>
      <div>Import a new set:</div>
      <textarea className="bg-slate-600 rounded border border-slate-500/30 p-2 text-slate-200/75 text-xs" />
      <button className="text-slate-200 text-sm px-2 border border-slate-800 rounded bg-gradient-to-l from-slate-700 to-black shadow-md hover:bg-gradient-to-r hover:from-slate-700 hover:to-black transition-colors">
        Import
      </button>
    </>
  );
}
