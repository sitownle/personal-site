import Head from "next/head";
import { useRouter } from "next/router";

const neurons = {
  "Software-Development":
    "As my primary discipline, software development made the majority of the connections made in these posts clear to me. As such, much of the content here may feel like walking a tightrope starting from the software end. Mind the gap. :)",
  "Machine-Learning": "",
  "Evolutionary-Biology": "",
  "Probability-&-Statistics": "",
  Government: ""
};

const synapses = {
  "Software-Development": {
    "Machine-Learning": "Coding, Policy Evolution",
    "Evolutionary-Biology": "Biodiversity",
    "Probability-&-Statistics": "Law of Large Numbers, Antifragility",
    Government:
      "Collaborative Policy Evolution (good coding practices), Microservices"
  },
  "Machine-Learning": {
    "Software-Development": "Coding, Policy Evolution",
    "Evolutionary-Biology": "",
    "Probability-&-Statistics": "",
    Government: ""
  },
  "Evolutionary-Biology": {
    "Software-Development": "Biodiversity",
    "Machine-Learning": "",
    "Probability-&-Statistics": "",
    Government: ""
  },
  "Probability-&-Statistics": {
    "Software-Development": "",
    "Machine-Learning": "",
    "Evolutionary-Biology": "Antifragility",
    Government: ""
  },
  Government: {
    "Software-Development": "",
    "Machine-Learning": "",
    "Evolutionary-Biology": "",
    "Probability-&-Statistics": ""
  }
};

const Musing = () => {
  const router = useRouter();
  const { title } = router.query;
  const content = neurons[title];

  function Synapse({ neuron }) {
    return title ? (
      <a
        href={`/neurons/${neuron}`}
        className="h-[20vh] p-4 flex flex-col gap-4 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700 cursor-pointer transition-all border border-slate-900 hover:border-slate-500"
      >
        <p>{neuron} -&gt;</p>
        <p>Connecting Concepts: {synapses[title][neuron]}</p>
      </a>
    ) : null;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Thoughts by Simon Townley-Smith" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200 flex flex-row">
        <div className="w-1/4 flex flex-col gap-4">
          <a
            href="/"
            className="bg-slate-500 text-slate-100 w-1/6 text-center rounded-sm ml-6 mt-4"
          >
            Home
          </a>
          <span className="pl-4">Explore Connected Neurons &#10132;</span>
          {Object.entries(neurons).map((key, value) => {
            if (key[0] == title) return null;
            return <Synapse neuron={key[0]} key={value} />;
          })}
        </div>
        <div className="w-1/2 flex flex-col gap-6 mt-6 px-2">
          <h1 className="text-3xl text-center">{title}</h1>
          <p className="leading-[1.6em] text-[18px]">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Musing;
