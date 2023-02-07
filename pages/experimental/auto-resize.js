import Head from "next/head";
import { useState, useRef } from "react";

const AutoResize = () => {
  const [toggle, targ] = useAutoResize("width");

  function useAutoResize(orientation) {
    const [isExpanded, setIsExpanded] = useState(true);
    const targ = useRef();
    const expandedW = useRef(0);
    //console.log(targ);

    function toggle() {
      if (targ.current) {
        targ.current.style.transition = "all 0.25s linear";
        if (isExpanded) {
          console.log(targ.current.offsetWidth);
          expandedW.current = targ.current.offsetWidth;
          targ.current.style.width = 0;
          //targ.current.style.left = expandedW.current.toString() + "px"; //"200px";
          setIsExpanded(false);
        } else {
          //console.log(expandedW.current);
          targ.current.style.width = expandedW.current.toString() + "px";
          //targ.current.style.left = "0px";
          setIsExpanded(true);
        }
      }
      return;
    }

    let o = orientation.toLowerCase();
    if (o == "width" || o == "horizontal") {
      return [toggle, targ];
    }
    if (o == "height" || o == "vertical") {
      return [toggle, targ];
    }

    throw new Error(
      "INVALID ORIENTATION ERROR: Orientation must be 'width', 'height', 'horizontal', or 'vertical'"
    );
  }

  return (
    <>
      <Head>
        <title>{"auto-resize antimation hook"}</title>
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
          //style={{ transition: "width 0.25s linear" }}
          className="absolute top-[100px] w-[200px] h-[50px] flex flex-col gap-4 border border-slate-100 text-center overflow-hidden"
        >
          {"Example text to test resizing animation"}
        </div>
        <button onClick={toggle}>{"Toggle"}</button>
      </div>
    </>
  );
};

export default AutoResize;
