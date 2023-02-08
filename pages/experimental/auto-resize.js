import Head from "next/head";
import { useState, useRef } from "react";

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

  // TODO: Smooth out repositioning, prevent spam halfsize error, test in other layouts
  function useAutoResize(config) {
    const [isExpanded, setIsExpanded] = useState(true);
    const targ = useRef();
    const expandedW = useRef(0);
    const origPos = useRef(0);
    //console.log(targ);
    const dir = config.direction.toLowerCase();

    function toggle() {
      if (targ.current) {
        targ.current.style.transition = "all 0.25s linear";
        if (isExpanded) {
          expandedW.current = targ.current.offsetWidth;
          targ.current.style.width = 0;
          if (dir == "right")
            targ.current.style.left = expandedW.current.toString() + "px"; //"200px";
          setIsExpanded(false);
        } else {
          targ.current.style.width = expandedW.current.toString() + "px";
          if (dir == "right") targ.current.style.left = "0px";
          setIsExpanded(true);
        }
      }
      return;
    }

    function toggleVert() {
      if (targ.current) {
        targ.current.style.transition = "all 0.25s linear";
        if (isExpanded) {
          expandedW.current = targ.current.offsetHeight;
          targ.current.style.height = 0;
          origPos.current = targ.current.style.top;
          if (dir == "down") {
            let newH = parseFloat(targ.current.offsetTop) + expandedW.current;
            targ.current.style.top = newH.toString() + "px";
          }
          setIsExpanded(false);
        } else {
          targ.current.style.height = expandedW.current.toString() + "px";
          if (dir == "down") {
            targ.current.style.top = origPos.current;
          }
          setIsExpanded(true);
        }
      }
      return;
    }

    let o = config.orientation.toLowerCase();
    if (o == "width" || o == "horizontal") {
      return [toggle, targ];
    }
    if (o == "height" || o == "vertical") {
      return [toggleVert, targ];
    }

    throw new Error(
      "INVALID ORIENTATION ERROR: Orientation must be 'width', 'height', 'horizontal', or 'vertical', and direction must be 'up', 'down', 'left', or 'right'"
    );
  }

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
      <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200">
        {" "}
        {/*flex flex-row items-center">*/}
        <div
          id="TARGET"
          ref={targ}
          className="absolute top-[100px] w-[200px] h-[50px] flex flex-col gap-4 border border-slate-100 text-center overflow-hidden"
        >
          {"Resize me to the left!"}
        </div>
        <button onClick={toggle}>{"Toggle"}</button>
        <div
          ref={targRight}
          className="absolute top-[200px] w-[200px] h-[50px] flex flex-col gap-4 border border-slate-100 text-center overflow-hidden"
        >
          {"Resize me to the right!"}
        </div>
        <button onClick={toggleRight}>{"Toggle Right!"}</button>
        <div
          ref={targUp}
          className="absolute top-[300px] w-[200px] h-[50px] flex flex-col gap-4 border border-slate-100 text-center overflow-hidden"
        >
          {"Resize me to the top!"}
        </div>
        <button onClick={toggleUp}>{"Toggle Up!"}</button>
        <div
          ref={targDown}
          className="absolute top-[400px] w-[200px] h-[50px] flex flex-col gap-4 border border-slate-100 text-center overflow-hidden"
        >
          {"Resize me to the bottom!"}
        </div>
        <button onClick={toggleDown}>{"Toggle Down"}</button>
      </div>
    </>
  );
};

export default AutoResize;
