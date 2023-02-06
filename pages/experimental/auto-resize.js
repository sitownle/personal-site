import Head from "next/head";

const AutoResize = () => {
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
      <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200 flex flex-row">
        <div className="w-1/4 flex flex-col gap-4">
          {"Example text to test resizing animation"}
        </div>
      </div>
    </>
  );
};

export default AutoResize;
