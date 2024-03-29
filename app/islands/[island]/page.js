import Link from "next/link";
import NeuronSidebar from "../../neurons/[neuron]/sidebar.js";

const islands = {
  Volleyball: (
    <>
      <p className="leading-[1.6em] text-[18px]">
        Volleyball is highly unique among sports for several reasons, primarily
        owing to its focus on explosive power while preventing physical contact.
        Many sports, such as Basketball and Soccer, reward explosive power but
        leave physical contact up to interpretation, introducing a grey area of
        dissatisfaction in which games may be decided by the officials rather
        than the players. Others, such as American Football and Rugby, place
        almost no limits on physical contact, allowing the focus on explosive
        power to result in devastating injuries. Most simliar to volleyball in
        this regard are racket sports like Tennis, but Tennis still lacks the
        emphasis on explosive power that volleyball provides. Volleyball's
        explosivesness far supersedes that of Tennis for two main reasons - team
        size and the allowance of multiple contacts per possession. This
        combination frees particular players from the positioning and cardio
        elements of single contact sports, allowing them to devote their entire
        careers to delivering the ultimate full-body explosion known as the
        spike.
      </p>
    </>
  ),
  Pickleball: (
    <>
      <p className="leading-[1.6em] text-[18px]">
        Pickleball is an interesting sport to analyze in the context of Tennis,
        as it rewards power and positioning in very different ways to its
        popular predecessor.
      </p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  "Game-Development": (
    <>
      <p className="leading-[1.6em] text-[18px]">
        Game development represents an intersection of my interests in software
        and analysis of sports as is done on some of the other islands here. At
        the moment, this is the only island with the potential to become a
        neuron.
      </p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  "Strength-Training": (
    <>
      <p className="leading-[1.6em] text-[18px]"></p>
      Strength training is one of my core hobbies. Its practice intrigues and
      perplexes me as it exists as a strange interaction of empirical
      "bro-science," actual research papers, and the impossible puzzle of
      individual variability.
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  ),
  Nutrition: (
    <>
      <p className="leading-[1.6em] text-[18px]">
        Nutrition is a core part of Strength Training that suffers many of the
        same obstacles to defining an optimal practice.
      </p>
      <p className="leading-[1.6em] text-[18px]"></p>
    </>
  )
};

export default function Island(context) {
  const title = context.params.island;
  const content = islands[title];

  function changeCase(origStr) {
    return origStr.replace(/-/g, " ");
  }

  function Bridge({ island }) {
    return title ? (
      <Link
        href={`/islands/${island}`}
        className="group h-[20vh] p-4 flex flex-col gap-4 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700 cursor-pointer transition-all border border-slate-900 hover:border-slate-500"
      >
        <div className="flex gap-[4px]">
          <p>{changeCase(island)}</p>
          <p className="group-hover:translate-x-[4px]">&#10132;</p>
        </div>
      </Link>
    ) : null;
  }

  function getBridges() {
    return (
      <>
        <div className="flex">
          <span className="pl-4 text-lg w-[270px]">
            Explore Thought Islands{" "}
          </span>
          <p className="rotate-90 w-[10px]">&#10132;</p>
        </div>
        {Object.entries(islands).map((key, value) => {
          if (key[0] == title) return null;
          return <Bridge island={key[0]} key={value} />;
        })}
      </>
    );
  }

  return (
    <>
      <div className="min-h-[95vh] w-full md:flex items-center md:items-start md:flex-row gap-4">
        <NeuronSidebar>{getBridges()}</NeuronSidebar>
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
}
