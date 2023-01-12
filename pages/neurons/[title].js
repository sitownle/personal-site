import Head from "next/head";
import { useRouter } from "next/router";

const neurons = {
  "Software-Development": (
    <>
      <p className="leading-[1.6em] text-[18px]">
        As my primary discipline, software development made the majority of the
        connections made in these posts clear to me. As such, much of the
        content here may feel like walking a tightrope starting from the
        software end. Mind the gap :)
      </p>
      <p className="leading-[1.6em] text-[18px]">
        Given that machine learning and software development obviously and
        directly depend on good coding practice, I don't feel this connection
        warrants a deep dive in this section. For a more in-depth discussion of
        coding practices see the Government section of this page where I believe
        the transferability of the insight is less obvious. More interestingly,
        much of software engineering can be viewed as iterative policies that
        could be trained as machine learning networks themselves. This overlap
        is made evident by converging practices such as making small and
        frequent code commits and machine learning techniques like Gradient
        Clipping. The conclusion is clear: large updates to an evolving policy
        are unstable, while finer updates allow for better exploration of the
        shape of the policy space.
      </p>
      <p className="leading-[1.6em] text-[18px]">
        Given the previous section, the view of genetic material as an evolving
        set of instructions like a codebase is a manageable leap. However, the
        most relevant insights from the biological side relate to the success of
        a population rather than the success of an individual agent. In this
        vein, biodiversity can be viewed as analogous to redundancy and
        diversity techniques in software development. Some of the greatest
        benefits of the paradigm shift to cloud computing were the abstraction
        of the single points of failure typical of on-premises servers.
        Deployment of software to different availability zones or providers
        provides similar resistance to tail-risk events as diversity does to
        biological lineages.
      </p>
      <p className="leading-[1.6em] text-[18px]">
        As the most abstract of all topics covered on this site, Probability and
        Statistics could be viewed as the fundamental unifying principles of all
        complex systems. Modern software often consists of extremely large
        numbers of users, interactions, and even developers, all of which are
        governed by math. With such high throughput, software must concerned
        with tail risks and worst case analysis without disregarding the average
        case due the law of large numbers.{" "}
      </p>
      <p className="leading-[1.6em] text-[18px]">
        Government is the area in which I think the transferable knowledge
        detailed here is the least utilized. This severe underutilization
        largely inspired me to organize these thoughts so that I might actually
        be able to communicate them to nontechnical people. A topic often
        discussed in politics is the excessive length and complexity of many of
        our new bills or established policies like the tax code. These flaws
        seem to be result of failing to apply good practice for collaborative
        policy evolution that is commonplace in software development. When
        making changes to software, changes are made one at a time, allowing
        easy failure and success attribution. Furthermore, these incremental
        changes are also specifically designed to avoid side-effects, which
        results in the classic spaghetti code. In the current iteration of our
        politics, these massive policy updates are usually intentionally packed
        with side effects due to poor separation of responsibilities and
        overcentralization. The separation of responsibilities enforced by
        software architectures like Microservices is inherently present in human
        populations, but our systems actively work to suppress it via
        centralization of power in progressively more abstract levels of
        government. When making decisions, power should be attributed to the
        people whom the decision will affect, proportional to the magnitude of
        the effect.
      </p>
    </>
  ),
  "Machine-Learning": (
    <>
      <p className="leading-[1.6em] text-[18px]"></p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  "Evolutionary-Biology": (
    <>
      <p className="leading-[1.6em] text-[18px]"></p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  "Probability-&-Statistics": (
    <>
      <p className="leading-[1.6em] text-[18px]"></p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  Government: (
    <>
      <p className="leading-[1.6em] text-[18px]"></p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  )
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
          {content}
          {/* <p className="leading-[1.6em] text-[18px]">{content}</p> */}
        </div>
      </div>
    </>
  );
};

export default Musing;
