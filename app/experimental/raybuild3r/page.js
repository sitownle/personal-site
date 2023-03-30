"use client";
import { useState } from "react";
import RB3Canvas from "./raybuild3r-canvas";

const Raybuild3r = () => {
  const [model, setModel] = useState("Paraxial Lens");
  const [showInstanceDetails, setShowInstanceDetails] = useState(false);

  function HeaderButton({ title }) {
    return (
      <button
        className="text-slate-200 text-sm px-2 border border-slate-800 rounded-lg bg-gradient-to-l from-slate-800 to-black shadow-md hover:bg-gradient-to-r hover:from-slate-800 hover:to-black transition-colors"
        onClick={() => setModel(title)}
      >
        {title}
      </button>
    );
  }

  return (
    <>
      {/* <div className="min-h-[5vh] w-full bg-gradient-to-t from-slate-900 to-black text-slate-300 flex flex-row items-center gap-2">
          <Link
            href="/experimental"
            className="p-2 hover:shadow-md border-b hover:border-slate-400/50 border-slate-900 rounded-lg transition-colors hover:bg-gradient-to-t hover:from-slate-400/50 hover:to-black"
          >
            {"<< Projects Home"}{" "}
          </Link>
        </div> */}
      <div className="mt-6 md:w-full w-[90%] h-full md:h-[75vh] rounded flex flex-col gap-4 border border-slate-500">
        <div className="w-full flex flex-row bg-slate-500 h-[5vh] p-2 gap-2">
          <HeaderButton title="Paraxial Lens" />
          <HeaderButton title="Thick Lens" />
          <HeaderButton title="Aperture Stop" />
        </div>
        <RB3Canvas
          model={model}
          setShowInstanceDetails={setShowInstanceDetails}
        />
        {showInstanceDetails && (
          <div className="absolute top-[14vh] left-[1vh] z-1 bg-slate-700 w-[200px] border-b border-slate-400/50 rounded text-sm flex flex-col">
            <div className="flex flex-row justify-between p-2 border border-slate-400/50 rounded-t">
              <h1>Instance Details</h1>
              <button onClick={() => setShowInstanceDetails(false)}>X</button>
            </div>
            <div className="flex flex-row p-2 border-x border-slate-400/50 items-center">
              <h1 className="text-slate-400 pr-4 w-[60px]">Type</h1>
              <input
                className="bg-slate-600 rounded border border-slate-500/30 p-1 w-[100px]"
                defaultValue={model}
              />
            </div>
            <div className="flex flex-row p-2 pb-4 border-x border-slate-400/50 items-center">
              <h1 className="text-slate-400 pr-4 w-[60px]">Parent</h1>
              <div className="bg-slate-600 rounded border border-slate-500/30 p-1">
                {"None"}
              </div>
            </div>
            <h1 className="text-slate-400 pl-2 pb-1 border-x border-slate-400/50">
              Description
            </h1>
            <div className="border-x border-slate-400/50 px-2">
              <textarea className="bg-slate-600 rounded border border-slate-500/30 w-full p-2 text-slate-200/75 text-xs" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Raybuild3r;
