import Skeleton from "../skeleton";
//import { useState } from "react";
//import RB3Canvas from "../../components/raybuild3r-canvas";

export default function Raybuild3r() {
  //const [model, setModel] = useState("Paraxial Lens");
  function HeaderButton({ title }) {
    return (
      <button
        className="text-slate-200 text-sm px-2 border border-slate-800 rounded-lg bg-gradient-to-l from-slate-800 to-black shadow-md"
        onClick={() => setModel(title)}
      >
        {title}
      </button>
    );
  }

  return (
    <>
      <Skeleton>
        {/* <div className="mt-6 md:w-full w-[90%] h-full md:h-[75vh] rounded flex flex-col gap-4 border border-slate-500">
          <div className="w-full flex flex-row bg-slate-500 h-[5vh] p-2 gap-2">
            <HeaderButton title="Paraxial Lens" />
            <HeaderButton title="Thick Lens" />
            <HeaderButton title="Aperture Stop" />
          </div>
          <RB3Canvas model={"" model} />
        </div> */}
        <div> eggz</div>
      </Skeleton>
    </>
  );
}
