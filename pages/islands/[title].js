import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

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

const bridges = [
  "Volleyball",
  "Pickleball",
  "Game-Development",
  "Strength-Training",
  "Nutrition"
];

const Island = () => {
  const router = useRouter();
  const { title } = router.query;
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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Thoughts by Simon Townley-Smith" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200 flex flex-row gap-4">
        <div className="w-1/4 flex flex-col gap-4">
          <Link
            href="/"
            className="group bg-slate-500 text-slate-100 hover:bg-slate-100 hover:text-slate-500 transition-colors w-[200px] text-center rounded-sm ml-4 mt-4 px-2 flex pl-16"
          >
            <p className="rotate-180 w-[10px] text-slate-500 group-hover:translate-x-[-4px]">
              &#10132;
            </p>
            Home
          </Link>
          <div className="flex">
            <span className="pl-4 w-[200px]">Explore Thought Islands </span>
            <p className="rotate-90 w-[10px]">&#10132;</p>
          </div>
          {Object.entries(islands).map((key, value) => {
            if (key[0] == title) return null;
            return <Bridge island={key[0]} key={value} />;
          })}
        </div>
        <div className="w-1/2 flex flex-col gap-6 mt-6 px-2">
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

export default Island;
