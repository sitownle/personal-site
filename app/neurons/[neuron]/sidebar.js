"use client";
import { useState } from "react";
import useAutoResize from "../../experimental/auto-resize/useAutoResize.js";

export default function NeuronSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [toggle, target] = useAutoResize({
    direction: "left"
  });

  return (
    <>
      {isOpen ? (
        <div
          className="md:hidden z-[100] rotate-[180deg] absolute top-[4.7vh] right-0 md:right-3/4 border-slate-500/50 hover:border-t px-2 py-1 rounded cursor-pointer hover:bg-gradient-to-b hover:from-slate-400/50 hover:to-slate-900/50 bg-gradient-to-t from-slate-900 to-slate-800 transition-all " //shadow-[-3px_-1px_0px_0px_rgba(100,116,139,0.5)]"
          onClick={() => {
            toggle();
            setIsOpen(false);
          }}
        >
          &#10132;
        </div>
      ) : (
        <div
          className="z-[100] absolute top-[4.7vh] left-0 hover:border-b border-slate-500/50 px-2 py-1 rounded-r cursor-pointer hover:bg-gradient-to-t hover:from-slate-400/50 hover:to-slate-900/50 bg-gradient-to-b from-slate-900 to-slate-800 transition-all " //shadow-[3px_1px_0px_0px_rgba(100,116,139,0.5)]"
          onClick={() => {
            toggle();
            setIsOpen(true);
          }}
        >
          &#10132;
        </div>
      )}
      <div
        className="h-[95vh] md:h-auto md:w-1/4 w-[90%] mx-[5%] md:mx-0 absolute md:static top-0 md:flex md:flex-col gap-4 mt-10 bg-gradient-to-t from-black to-slate-900 rounded-xl shadow-md shadow-slate-300/20"
        ref={target}
      >
        {children}
      </div>
    </>
  );
}
