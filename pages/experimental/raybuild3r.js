import Head from "next/head";
import Link from "next/link";
import RB3Canvas from "../../components/raybuild3r-canvas";

const Raybuild3r = () => {
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
        <div className="pt-12 md:w-1/2 w-[90%] flex flex-col gap-4">
          <RB3Canvas />
        </div>
      </div>
    </>
  );
};

export default Raybuild3r;
