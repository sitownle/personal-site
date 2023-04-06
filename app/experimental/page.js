import Link from "next/link";

const projects = ["rays.ai", "auto-resize", "enchrome", "raybuild3r"];
const links = { "rays.ai": "https://rays.ai" };
const descriptions = {
  "auto-resize":
    "A small hook inspired by useAutoAnimate to simplify the animation I find myself reaching for often, but find more difficult to implement in my normal tailwind workflow",
  enchrome:
    "A password encryption chrome extension that provides an extra level of security for users at all levels of security consciousness",
  "rays.ai":
    "My first job! I built, deployed, and managed all parts of the website, the most significant of which was the graphical editor for optical design exploration with collaborative editing, unlimited undo/redo and a microservice written in golang for powering ray tracing computations",
  raybuild3r:
    "a 3D continuation of my work at rays.ai as a favor to my boss and to take my Three.js skills to the moon. If I can figure out how to make textures look good this might be worth pursuing in prod"
};

const ProjectIndex = () => {
  function changeCase(origStr) {
    return origStr ? origStr.replace(/-/g, " ") : "";
  }

  function Bridge({ project }) {
    function getLink(project) {
      if (links[project])
        return (
          <a
            href={links[project]}
            className="w-full group p-4 flex flex-col gap-4 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700 cursor-pointer transition-all border border-slate-900 hover:border-slate-500"
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
          className="w-full group p-4 flex flex-col gap-2 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700 cursor-pointer transition-all border border-slate-900 hover:border-slate-500"
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
      <div className="hidden md:flex w-full pl-24">
        <div className="flex">
          <span className="pl-4 w-[180px]">Explore My Projects</span>
          <p className="rotate-45 w-[10px]">&#10132;</p>
        </div>
      </div>
      <div className="w-[100%] md:w-1/2 flex flex-col gap-6 mt-10 px-2 items-center">
        {projects.map((key, value) => {
          return <Bridge project={key} key={value} />;
        })}
      </div>
    </>
  );
};

export default ProjectIndex;
