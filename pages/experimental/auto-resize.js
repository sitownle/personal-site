import Head from "next/head";
import { useState, useRef } from "react";
import useAutoResize from "../../components/useAutoResize.js";

const AutoResize = () => {
  const [toggle, targ] = useAutoResize({
    orientation: "width",
    direction: "left"
  });
  const [toggleRight, targRight] = useAutoResize({
    orientation: "width",
    direction: "right"
  });
  const [toggleDown, targDown] = useAutoResize({
    orientation: "height",
    direction: "down"
  });
  const [toggleUp, targUp] = useAutoResize({
    orientation: "height",
    direction: "up"
  });

  // function useAutoResize(config) {
  //   const [isExpanded, setIsExpanded] = useState(true);
  //   const targ = useRef();
  //   const expandedW = useRef(0);
  //   const dir = config.direction.toLowerCase();

  //   function toggle() {
  //     if (targ.current) {
  //       targ.current.style.transition = "all 0.25s linear";
  //       if (isExpanded) {
  //         expandedW.current =
  //           expandedW.current == 0
  //             ? targ.current.offsetWidth
  //             : expandedW.current;
  //         targ.current.style.width = 0;
  //         if (dir == "right") {
  //           let newW = parseFloat(targ.current.offsetLeft) + expandedW.current;
  //           targ.current.style.transform = `translateX(${newW}px)`;
  //         }
  //         targ.current.style.opacity = 0;
  //         setIsExpanded(false);
  //       } else {
  //         targ.current.style.width = expandedW.current.toString() + "px";
  //         if (dir == "right") targ.current.style.transform = "translateX(0px)";
  //         targ.current.style.opacity = 1;
  //         setIsExpanded(true);
  //       }
  //     }
  //     return;
  //   }

  //   function toggleVert() {
  //     if (targ.current) {
  //       targ.current.style.transition = "all 0.25s linear";
  //       if (isExpanded) {
  //         expandedW.current =
  //           expandedW.current == 0
  //             ? targ.current.offsetHeight
  //             : expandedW.current;
  //         targ.current.style.height = 0;
  //         if (dir == "down") {
  //           let newH = expandedW.current;
  //           targ.current.style.transform = `translateY(${newH}px)`;
  //         }
  //         targ.current.style.opacity = 0;
  //         setIsExpanded(false);
  //       } else {
  //         targ.current.style.height = expandedW.current.toString() + "px";
  //         if (dir == "down") {
  //           targ.current.style.transform = "translateY(0px)";
  //         }
  //         targ.current.style.opacity = 1;
  //         setIsExpanded(true);
  //       }
  //     }
  //     return;
  //   }

  //   let o = config.orientation.toLowerCase();
  //   if (o == "width" || o == "horizontal") {
  //     return [toggle, targ];
  //   }
  //   if (o == "height" || o == "vertical") {
  //     return [toggleVert, targ];
  //   }

  //   throw new Error(
  //     "INVALID ORIENTATION ERROR: Orientation must be 'width', 'height', 'horizontal', or 'vertical', and direction must be 'up', 'down', 'left', or 'right'"
  //   );
  // }

  return (
    <>
      <Head>
        <title>{"auto-resize animation hook"}</title>
        <meta
          name="description"
          content=" for eventual use in my projects/deployment to npm registry"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200 flex flex-col items-center gap-4">
        <div>
          <div
            id="TARGET"
            ref={targ}
            className="flex flex-col p-2 gap-4 border border-slate-100 rounded text-center overflow-hidden"
          >
            {"Resize me to the left!"}
          </div>
          <button onClick={toggle} className="border border-white rounded p-1">
            {"Toggle"}
          </button>
          <div
            ref={targRight}
            className="flex flex-col p-2 gap-4 border border-slate-100 rounded text-center overflow-hidden"
          >
            {"Resize me to the right!"}
          </div>
          <button
            onClick={toggleRight}
            className="border border-white rounded p-1"
          >
            {"Toggle Right!"}
          </button>
          <div
            ref={targUp}
            className="flex flex-col p-2 gap-4 border border-slate-100 rounded text-center overflow-hidden"
          >
            {"Resize me to the top!"}
          </div>
          <button
            onClick={toggleUp}
            className=" border border-white rounded p-1"
          >
            {"Toggle Up!"}
          </button>
          <div
            ref={targDown}
            className="flex flex-col p-2 gap-4 border border-slate-100 rounded text-center overflow-hidden"
          >
            {"Resize me to the bottom!"}
          </div>
          <button
            onClick={toggleDown}
            className=" border border-white rounded p-1"
          >
            {"Toggle Down"}
          </button>
        </div>
      </div>
      {/* <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200">
        <div
          id="TARGET"
          ref={targ}
          className="relative top-[100px] p-2 flex flex-col gap-4 border border-slate-100 rounded text-center overflow-hidden"
        >
          {"Resize me to the left!"}
        </div>
        <button
          onClick={toggle}
          className="absolute top-[110px] left-[210px] border border-white rounded p-1"
        >
          {"Toggle"}
        </button>
        <div
          ref={targRight}
          className="absolute top-[200px] w-[200px] h-[50px] flex flex-col gap-4 border border-slate-100 text-center overflow-hidden"
        >
          {"Resize me to the right!"}
        </div>
        <button
          onClick={toggleRight}
          className="absolute top-[210px] left-[210px] border border-white rounded p-1"
        >
          {"Toggle Right!"}
        </button>
        <div
          ref={targUp}
          className="absolute top-[300px] w-[200px] h-[50px] flex flex-col gap-4 border border-slate-100 text-center overflow-hidden"
        >
          {"Resize me to the top!"}
        </div>
        <button
          onClick={toggleUp}
          className="absolute top-[310px] left-[210px] border border-white rounded p-1"
        >
          {"Toggle Up!"}
        </button>
        <div
          ref={targDown}
          className="absolute top-[400px] w-[200px] h-[50px] flex flex-col gap-4 border border-slate-100 text-center overflow-hidden"
        >
          {"Resize me to the bottom!"}
        </div>
        <button
          onClick={toggleDown}
          className="absolute top-[410px] left-[210px] border border-white rounded p-1"
        >
          {"Toggle Down"}
        </button>
      </div> */}
    </>
  );
};

export default AutoResize;
