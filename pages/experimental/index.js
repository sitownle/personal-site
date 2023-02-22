import Head from "next/head";
import Link from "next/link";

const projects = ["rays.ai", "auto-resize", "enchrome"];
const links = { "rays.ai": "https://rays.ai" };
const descriptions = {
  "auto-resize":
    "A small hook inspired by useAutoAnimate to simplify the animation I find myself reaching for often, but find more difficult to implement in my normal tailwind workflow",
  enchrome:
    "A password encryption chrome extension that provides an extra level of security for users at all levels of security consciousness",
  "rays.ai":
    "My first job! I built, deployed, and managed all parts of the website, the most significant of which was the graphical editor for optical design exploration with collaborative editing, unlimited undo/redo and a microservice written in golang for powering ray tracing computations"
};

const ProjectIndex = () => {
  function changeCase(origStr) {
    return origStr ? origStr.replace(/-/g, " ") : "";
  }

  function Bridge({ project }) {
    function getLink(project) {
      console.log(project);
      if (links[project])
        return (
          <a
            href={links[project]}
            className="group p-4 flex flex-col gap-4 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700 cursor-pointer transition-all border border-slate-900 hover:border-slate-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-[4px]">
              <p>{project}</p>
              <p className="group-hover:translate-x-[4px]">&#10132;</p>
            </div>
            <p className="text-sm pl-10">{descriptions[project]}</p>
          </a>
        );
      return (
        <Link
          href={`/experimental/${project}`}
          className="group p-4 flex flex-col gap-2 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700 cursor-pointer transition-all border border-slate-900 hover:border-slate-500"
        >
          <div className="flex gap-[4px]">
            <p>{project}</p>
            <p className="group-hover:translate-x-[4px]">&#10132;</p>
          </div>
          <p className="text-sm pl-10">{descriptions[project]}</p>
        </Link>
      );
    }

    return project ? getLink(project) : null;
  }

  return (
    <>
      <Head>
        <title>{"Project Index"}</title>
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
            <span className="pl-4 w-[180px]">Explore My Projects</span>
            <p className="rotate-45 w-[10px]">&#10132;</p>
          </div>
          {/* {projects.map((key, value) => {
            return <Bridge project={key} key={value} />;
          })} */}
        </div>
        <div className="w-1/2 flex flex-col gap-6 mt-24 px-2">
          {projects.map((key, value) => {
            return <Bridge project={key} key={value} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectIndex;
