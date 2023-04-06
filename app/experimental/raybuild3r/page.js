"use client";
import { useState } from "react";
import RB3Canvas from "./raybuild3r-canvas";

const parameters = {
  "Paraxial Lens": { Diameter: 6, Power: 0 },
  "Aperture Stop": { Diameter: 4 },
  "Thick Lens": {
    Diameter: 6,
    R1: 4,
    R2: 4,
    CT: 4,
    Sag1: 0,
    Sag2: 0,
    Material: "None"
  },
  Mirror: { Diameter: 4 },
  "Beam Splitter": { Diameter: 4 }
};

const Raybuild3r = () => {
  const [model, setModel] = useState("Paraxial Lens");
  const [showInstanceDetails, setShowInstanceDetails] = useState(false);
  const [params, setParams] = useState(parameters);
  const [position, setPos] = useState([0, 0, 0]);

  function setPosition(rawPos) {
    const fixedPos = [
      rawPos[0].toFixed(3),
      rawPos[1].toFixed(3),
      rawPos[2].toFixed(3)
    ];
    setPos(fixedPos);
  }

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

  function InstanceDetails({}) {
    function ParameterLine({ param, val }) {
      function submit(e) {
        console.log("submitted!");
        setParams({
          ...params,
          [model]: { ...params[model], [param]: e.target.value }
        });
        //if (e) e.target.blur();
      }
      return (
        <div className="flex flex-row p-2 border-x border-slate-400/50 items-center">
          <h1 className="text-slate-400 pr-4 w-[70px]">{param}</h1>
          <input
            className="peer bg-slate-600 rounded border border-slate-500/30 p-1 w-[190px]"
            defaultValue={val}
            onBlur={e => submit(e)}
            onKeyDown={e => {
              if (e.key === "Enter") submit(e);
            }}
          />
          {/* <button
            className="ml-1 transition-colors text-slate-700 bg-slate-700 border-slate-700 peer-focus:text-slate-200 text-sm px-1 border peer-focus:border-slate-800 rounded peer-focus:bg-gradient-to-l from-slate-800 to-black peer-focus:shadow-md peer-focus:hover:bg-gradient-to-r hover:from-slate-800 hover:to-black"
            onClick={() => submit()}
          >
            &#x2713;
          </button> */}
        </div>
      );
    }

    return (
      <div className="absolute top-[14vh] left-[1vh] z-1 bg-slate-700 w-[280px] border-b border-slate-400/50 rounded text-sm flex flex-col">
        <div className="flex flex-row justify-between p-2 border border-slate-400/50 rounded-t">
          <h1>Instance Details</h1>
          <button onClick={() => setShowInstanceDetails(false)}>X</button>
        </div>
        <div className="flex flex-row p-2 border-x border-slate-400/50 items-center">
          <h1 className="text-slate-400 pr-4 w-[70px]">Type</h1>
          <input
            className="bg-slate-600 rounded border border-slate-500/30 p-1 w-[190px]"
            defaultValue={model}
          />
        </div>
        <div className="flex flex-row p-2 border-x border-slate-400/50 items-center">
          <h1 className="text-slate-400 pr-4 w-[60px]">Position</h1>
          <p className="text-slate-300">{"x"}</p>
          <input
            className="bg-slate-600 rounded border border-slate-500/30 p-1 ml-1 mr-2 w-[50px] text-xs"
            defaultValue={position[0]}
          />
          <p className="text-slate-300">{"y"}</p>
          <input
            className="bg-slate-600 rounded border border-slate-500/30 p-1 ml-1 mr-2 w-[50px] text-xs"
            defaultValue={position[1]}
          />
          <p className="text-slate-300">{"z"}</p>
          <input
            className="bg-slate-600 rounded border border-slate-500/30 p-1 ml-1 w-[50px] text-xs"
            defaultValue={position[2]}
          />
        </div>
        <div className="flex flex-row p-2 border-x border-slate-400/50 items-center">
          <h1 className="text-slate-400 pr-4 w-[60px]">Rotation</h1>
          <p className="text-slate-300 text-xs">{"x"}</p>
          <input
            className="bg-slate-600 text-xs rounded border border-slate-500/30 p-1 ml-1 mr-2 w-[50px]"
            defaultValue={"0"}
          />
          <p className="text-slate-300">{"y"}</p>
          <input
            className="bg-slate-600 text-xs rounded border border-slate-500/30 p-1 ml-1 mr-2 w-[50px]"
            defaultValue={"0"}
          />
          <p className="text-slate-300">{"z"}</p>
          <input
            className="bg-slate-600 text-xs rounded border border-slate-500/30 p-1 ml-1 w-[50px]"
            defaultValue={"0"}
          />
        </div>
        {Object.entries(params[model]).map(([key, value]) => {
          return <ParameterLine key={key} param={key} val={value} />;
        })}
        <div className="flex flex-row p-2 pb-4 border-x border-slate-400/50 items-center">
          <h1 className="text-slate-400 pr-4 w-[70px]">Parent</h1>
          <div className="bg-slate-600  w-[190px] rounded border border-slate-500/30 p-1">
            {"None"}
          </div>
        </div>
        <h1 className="text-slate-400 pl-2 pb-1 border-x border-slate-400/50">
          Notes
        </h1>
        <div className="border-x border-slate-400/50 px-2">
          <textarea className="bg-slate-600 rounded border border-slate-500/30 w-full p-2 text-slate-200/75 text-xs" />
        </div>
      </div>
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
      <div className="md:w-full w-[90%] h-full md:h-[95vh] rounded flex flex-col gap-4 border border-slate-500">
        <div className="w-full flex flex-row bg-slate-500 h-[5vh] p-2 gap-2">
          <HeaderButton title="Paraxial Lens" />
          <HeaderButton title="Thick Lens" />
          <HeaderButton title="Aperture Stop" />
          <HeaderButton title="Mirror" />
          <HeaderButton title="Beam Splitter" />
        </div>
        <RB3Canvas
          model={model}
          parameters={params}
          setShowInstanceDetails={setShowInstanceDetails}
          position={position}
          setPosition={setPosition}
        />
        {showInstanceDetails && (
          <InstanceDetails /*position={position} setPosition={setPosition}*/ />
        )}
      </div>
    </>
  );
};

export default Raybuild3r;
