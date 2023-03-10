import Head from "next/head";
import Link from "next/link";
import useAutoResize from "@sitownle/use-auto-resize";
//import useAutoResize from "../../components/useAutoResize.js";

const AutoResize = () => {
  const [toggle, targ] = useAutoResize({
    direction: "left",
    opacity: true
  });
  const [toggleRight, targRight] = useAutoResize({
    direction: "right"
  });
  const [toggleDown, targDown] = useAutoResize({
    direction: "bottom"
  });
  const [toggleUp, targUp] = useAutoResize({
    direction: "top"
  });

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
      <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200 text-center">
        <Link
          className="absolute top-0 left-0 text-slate-900 bg-slate-500 p-2 rounded-br"
          href="/experimental"
        >
          {"<< Projects Home"}
        </Link>
        <div className="">
          <p className="pt-10 mb-4 text-center px-4">
            Click any of the buttons to see useAutoResize in action!
          </p>
          <div
            ref={targ}
            className="bg-gradient-to-l from-slate-900 to-green-900 mb-4 flex flex-col p-2 gap-4 border border-green-200 text-green-200 rounded text-center overflow-hidden cursor-default"
          >
            <p className="rotate-180">&#10132;</p>
          </div>
          <button
            onClick={toggle}
            className="shadow-md shadow-slate-600 hover:bg-gradient-to-l hover:from-slate-900 hover:to-green-900 bg-gradient-to-l from-slate-200 to-green-200 border hover:border-green-200 hover:text-green-100 bg-green-200 border-green-900 text-green-900 transition-all rounded p-1 mb-10 hover:translate-x-[-4px]"
          >
            {"Toggle Left!"}
          </button>
          <div
            ref={targRight}
            className="bg-gradient-to-r from-slate-900 to-blue-900 mb-4 flex flex-col p-2 gap-4 border border-blue-200 text-blue-200 rounded text-center overflow-hidden cursor-default"
          >
            <p>&#10132;</p>
          </div>
          <button
            onClick={toggleRight}
            className="shadow-md shadow-slate-600 hover:bg-gradient-to-r hover:from-slate-900 hover:to-blue-900 bg-gradient-to-r from-slate-200 to-blue-200 mb-10 border border-blue-200 text-blue-900 hover:bg-blue-200 hover:border-blue-200 hover:text-blue-200 transition-all rounded p-1 hover:translate-x-[4px]"
          >
            {"Toggle Right!"}
          </button>
          <div
            ref={targUp}
            className="bg-gradient-to-t from-slate-900 to-indigo-900 mb-4 flex flex-col p-2 gap-4 border border-indigo-200 text-indigo-200 rounded text-center overflow-hidden cursor-default"
          >
            <p className="rotate-[-90deg]">&#10132;</p>
          </div>
          <button
            onClick={toggleUp}
            className="shadow-md shadow-slate-600 hover:bg-gradient-to-t hover:from-slate-900 hover:to-indigo-900 bg-gradient-to-t from-slate-200 to-indigo-200 mb-10 border border-indigo-200 text-indigo-900 hover:border-indigo-200 hover:text-indigo-100 transition-all rounded p-1 hover:translate-y-[-4px]"
          >
            {"Toggle Up!"}
          </button>
          <div
            ref={targDown}
            className="bg-gradient-to-b from-slate-900 to-violet-900 mb-4 flex flex-col p-2 gap-4 border border-indigo-200 text-indigo-200 rounded text-center overflow-hidden cursor-default"
          >
            <p className="rotate-90">&#10132;</p>
          </div>
          <button
            onClick={toggleDown}
            className="shadow-md shadow-slate-600 hover:bg-gradient-to-b hover:from-slate-900 hover:to-violet-900 bg-gradient-to-b from-slate-200 to-violet-200 mb-10 border border-violet-300 text-violet-900 hover:border-violet-300 hover:text-violet-200 transition-all rounded p-1 hover:border-slate-900 hover:text-slate-900 hover:bg-slate-200 transition-all hover:translate-y-[4px]"
          >
            {"Toggle Down!"}
          </button>
        </div>
        <h2 className="w-[90%] md:w-1/2 mx-auto pb-4 text-slate-300 text-xl underline">
          So how does it work?{" "}
        </h2>
        <p className="w-[90%] md:w-1/2 mx-auto pb-4 text-slate-300">
          Here's the code for the first demo (minus all the unnecessary styles).
          Simply replace "left" with "right", "top", or "bottom" to achieve the
          behavior of the other demos.
        </p>
        <pre className="bg-black p-4 text-slate-200 text-sm w-[90%] md:w-1/2 mx-auto rounded-lg text-left whitespace-pre-wrap">
          {
            'import {useState, useRef} from "react"; \nimport useAutoResize from "@sitownle/use-auto-resize";\n\nconst AutoResize = () => {\n  const [toggle, target] = useAutoResize({ direction: "left" });\n  <div\n    ref={target}\n    className="text-green-200"  \n  >\n    <p className="rotate-180">&#10132;</p>\n  </div>\n  <button\n   onClick={toggle}\n   className="text-green-900"\n  >\n   {"Toggle Left!"}\n  </button>\n}'
          }
        </pre>
        <p className="w-[90%] md:w-1/2 mx-auto py-4 text-slate-300">
          By returning the toggle function, useAutoResize gives you the freedom
          to delegate control of your targets resize animation to any element in
          your project without worrying about colocating state or drilling props
          - resulting in 0 mental state management overhead for the developer.
        </p>
      </div>
    </>
  );
};

export default AutoResize;
