import Link from "next/link";
import { getSets } from "./db";
import { currentUser } from "@clerk/nextjs/app-beta";
import DeleteSetButton from "./deleteSetButton";

export default async function existingSets() {
  const user = await currentUser();
  const setList = await getSets(user.id);

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">
        {setList.length ? "Select an existing set:" : "No sets found!"}
        {setList.map((value, index) => (
          <div
            className="w-3/4 flex flex-row justify-center rounded-lg border border-slate-400/50 hover:bg-slate-400 hover:text-black transition-colors"
            key={index}
            href={`/mesmery/${user.id}/${value.id}`}
          >
            <Link
              className="w-full ml-auto cursor-pointer"
              href={`/mesmery/${user.id}/${value.id}`}
            >
              {value.name}
            </Link>
            <DeleteSetButton set={value} />
          </div>
        ))}
      </div>
      <div className="md:w-[98px] flex items-center justify-center text-center text-slate-400">
        {setList.length ? "- OR -" : ""}
      </div>
    </>
  );
}
