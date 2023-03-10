"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useAutoResize from "../../experimental/auto-resize/useAutoResize.js";

const neurons = {
  "Software-Development": (
    <>
      <p className="leading-[1.6em] text-[18px]">
        As my primary discipline, software development made the majority of the
        connections made in these posts clear to me. As such, much of the
        content here may feel like walking a tightrope starting from the
        software end. Mind the gap :)
      </p>
    </>
  ),
  "Machine-Learning": (
    <>
      <p className="leading-[1.6em] text-[18px]">
        Given that machine learning and software development obviously and
        directly depend on good coding practice, I don't feel this connection
        warrants a deep dive in this section. For a more in-depth discussion of
        coding practices see the Government section of this page where I believe
        the transferability of the insight is more useful. More interestingly,
        much of software engineering can be viewed as iterative policies that
        could be trained as machine learning networks themselves. This overlap
        is made evident by converging practices such as making small and
        frequent code commits and machine learning techniques like Gradient
        Clipping. The conclusion is clear: large updates to an evolving policy
        are unstable, while finer updates allow for better exploration of the
        shape of the policy space.
      </p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  "Evolutionary-Biology": (
    <>
      <p className="leading-[1.6em] text-[18px]">
        Much like the machine learning section, the view of genetic material as
        an evolving set of instructions like a codebase is a manageable leap.
        However, the most relevant insights from the biological side relate to
        the success of a population rather than the success of an individual
        agent. In this vein, biodiversity can be viewed as analogous to
        redundancy and diversity techniques in software development. Some of the
        greatest benefits of the paradigm shift to cloud computing were the
        abstraction of the single points of failure typical of on-premises
        servers. Deployment of software to different availability zones or
        providers provides similar resistance to tail-risk events as diversity
        does to biological lineages.
      </p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  "Probability-&-Statistics": (
    <>
      <p className="leading-[1.6em] text-[18px]">
        As the most abstract of all topics covered on this site, Probability and
        Statistics could be viewed as the fundamental unifying principles of all
        complex systems. Modern software often consists of extremely large
        numbers of users, interactions, and even developers, all of which are
        governed by math. With such high throughput, software must concerned
        with tail risks and worst case analysis without disregarding the average
        case due the law of large numbers.{" "}
      </p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  Government: (
    <>
      <p className="leading-[1.6em] text-[18px]">
        Government is the area in which I think the transferable knowledge
        detailed here is the least utilized. This severe underutilization
        largely inspired me to organize these thoughts so that I might actually
        be able to communicate them to nontechnical people. A topic often
        discussed in politics is the excessive length and complexity both of new
        bills and established policies like the tax code. These flaws seem to be
        result of failing to apply good practice for collaborative policy
        evolution that is commonplace in software development. When making
        changes to software, changes are made one at a time, allowing easy
        failure and success attribution. Furthermore, these incremental changes
        are also specifically designed to avoid side-effects, which results in
        the trope colloquially known as "spaghetti code," which is extremely
        difficult to modify without side-effects. In the current iteration of
        our politics, these massive policy updates are usually intentionally
        packed with side effects due to poor separation of responsibilities and
        overcentralization. The separation of responsibilities enforced by
        software architectures like Microservices is inherently present in human
        populations, but our systems actively work to suppress it via
        centralization of power in progressively more abstract levels of
        government. Unlike software, humans naturally exist as individual
        entities capable of acting in their own self interest, with their
        influence on others almost entirely limited to a relatively small web of
        social connections that fades in strength and density over multiple axes
        such as time and and physical distance. For most of human history, this
        reality was necessarily reflected in the power structures until
        technological advancement produced massive and ornate guns with which we
        promptly shot ourselves in the feet. When making decisions, power should
        be attributed to the people whom the decision will affect,
        proportionally to the magnitude of the effect. However, our fancy
        footguns have allowed a monolithic power structure to control our
        naturally decentralized nation.
      </p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  )
};

const synapses = {
  "Software-Development": {
    "Machine-Learning": "Coding, Policy Evolution, Gradient Clipping",
    "Evolutionary-Biology": "Biodiversity",
    "Probability-&-Statistics": "Law of Large Numbers, Antifragility",
    Government:
      "Collaborative Policy Evolution (good coding practices), Microservices"
  },
  "Machine-Learning": {
    "Software-Development": "Coding, Policy Evolution, Gradient Clipping",
    "Evolutionary-Biology":
      "Policy Evolution, Multi-Agent Systems, Convergent/Divergent Evolution",
    "Probability-&-Statistics":
      "Antifragility, Mathematical Optimization, Unsupervised Learning",
    Government: "Gradient Clipping"
  },
  "Evolutionary-Biology": {
    "Software-Development": "Biodiversity",
    "Machine-Learning":
      "Policy Evolution, Multi-Agent Systems, Convergent/Divergent Evolution",
    "Probability-&-Statistics": "Antifragility",
    Government: "Macroevolution"
  },
  "Probability-&-Statistics": {
    "Software-Development": "Law of Large Numbers, Antifragility",
    "Machine-Learning":
      "Antifragility, Mathematical Optimization, Unsupervised Learning",
    "Evolutionary-Biology": "Antifragility",
    Government: "Antifragility"
  },
  Government: {
    "Software-Development":
      "Collaborative Policy Evolution (good coding practices), Microservices",
    "Machine-Learning": "Gradient Clipping",
    "Evolutionary-Biology": "Macroevolution",
    "Probability-&-Statistics": "Antifragility"
  }
};

const Musing = () => {
  const title = usePathname().substring(9);
  const content = neurons[title];
  const [isOpen, setIsOpen] = useState(true);
  const [toggle, target] = useAutoResize({
    direction: "left"
  });

  function changeCase(origStr) {
    return origStr.replace(/-/g, " ");
  }

  function Synapse({ neuron }) {
    return title ? (
      <Link
        href={`/neurons/${neuron}`}
        className="group h-[20vh] p-4 flex flex-col gap-4 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700 cursor-pointer transition-all border border-slate-900 hover:border-slate-500"
      >
        <div className="flex gap-[4px]">
          <p>{changeCase(neuron)}</p>
          <p className="group-hover:translate-x-[4px]">&#10132;</p>
        </div>
        <p>Connecting Concepts: {synapses[title][neuron]}</p>
      </Link>
    ) : null;
  }

  return (
    <>
      <div className="min-h-[100vh] w-full flex flex-col-reverse items-center md:items-start md:flex-row gap-4">
        {isOpen ? (
          <div
            className="rotate-[180deg] absolute top-0 left-1/4 border-l border-t border-slate-500/50 px-2 py-1 rounded-l cursor-pointer hover:bg-slate-500 hover:text-slate-900 transition-all shadow-[-3px_-1px_0px_0px_rgba(100,116,139,0.5)]"
            onClick={() => {
              toggle();
              setIsOpen(false);
            }}
          >
            &#10132;
          </div>
        ) : (
          <div
            className="absolute top-0 left-0 border-r border-b border-slate-500/50 px-2 py-1 rounded-l cursor-pointer hover:bg-slate-500 hover:text-slate-900 transition-all shadow-[3px_1px_0px_0px_rgba(100,116,139,0.5)]"
            onClick={() => {
              toggle();
              setIsOpen(true);
            }}
          >
            &#10132;
          </div>
        )}
        <div
          className="md:w-1/4 w-[90%] flex flex-col gap-4 pt-10"
          ref={target}
        >
          <div className="flex">
            <span className="pl-4 w-[250px] text-lg">
              Explore Connected Neurons{" "}
            </span>
            <p className="rotate-90 w-[10px]">&#10132;</p>
          </div>
          {Object.entries(neurons).map((key, value) => {
            if (key[0] == title) return null;
            return <Synapse neuron={key[0]} key={value} />;
          })}
        </div>
        <div className="w-[90%] md:w-2/3 flex flex-col gap-6 mt-6 px-2 mx-auto md:mx-0">
          <h1 className="text-3xl text-center">
            {title ? changeCase(title) : null}
          </h1>
          {content}
          {/* <p className="leading-[1.6em] text-[18px]">{content}</p> */}
        </div>
      </div>
    </>
  );
};

export default Musing;
