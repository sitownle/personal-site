"use client";
import dynamic from "next/dynamic";
const Graph = dynamic(() => import("./graph.jsx"), {
  loading: () => (
    <div className="animate-fill w-[200px] bg-gradient-to-l from-cyan-400 to-black border-r border-cyan-400 h-[50px] ml-[20%] mt-[30%] shadow-[11px_0px_6px_5px_cyan-400] shadow-cyan-400" />
  ),
  ssr: false
});

export default function GraphWrapper() {
  return (
    <>
      <Graph />
    </>
  );
}
