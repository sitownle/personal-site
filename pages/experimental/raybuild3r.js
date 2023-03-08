import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import RB3Canvas from "../../components/raybuild3r-canvas";

const Raybuild3r = () => {
  const [model, setModel] = useState("Paraxial Lens");
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
      <Head>
        <title>{"3D optical component editor"}</title>
        <meta
          name="description"
          content="exploration of react-three-fiber and optics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[100vh] w-full bg-gradient-to-b from-slate-900 to-black text-slate-200 flex flex-row justify-center">
        <Link
          className="absolute top-0 left-0 text-slate-900 bg-slate-500 p-2 rounded-br"
          href="/experimental"
        >
          {"<< Projects Home"}
        </Link>
        <div className="mt-12 md:w-full w-[90%] h-full md:h-[75vh] rounded flex flex-col gap-4 border border-slate-500">
          <div className="w-full flex flex-row bg-slate-500 h-[5vh] p-2 gap-2">
            <HeaderButton title="Paraxial Lens" />
            <HeaderButton title="Thick Lens" />
            <HeaderButton title="Aperture Stop" />
          </div>
          <RB3Canvas model={model} />
        </div>
      </div>
    </>
  );
};

export default Raybuild3r;
