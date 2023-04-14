import Link from "next/link";
import { getSets } from "./db";
import { currentUser } from "@clerk/nextjs/app-beta";
import DeleteSetButton from "./deleteSetButton";

export default async function existingSets() {
  const user = await currentUser();
  console.log(user.id);
  const setList = await getSets(user.id); //["Mandarin", "Korean", "Spanish"];
  console.log(setList);
  //const insertedSet = await insertSet();
  //console.log(insertedSet);
  //   function DeleteSetButton({ set }) {
  //     return (
  //       <button
  //         className="rounded-r-lg hover:bg-red-400 px-2 ml-auto"
  //         onClick={() => deleteSet(set)}
  //       >
  //         &#128465;
  //       </button>
  //     );
  //   }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {setList.length ? "Select an existing set:" : "No sets found!"}
      {setList.map((value, index) => (
        <div
          className="w-3/4 flex flex-row justify-center rounded-lg border border-slate-400/50 hover:bg-slate-400 hover:text-black transition-colors"
          key={index}
          href={`/mesmery/${user.id}/${value.name}`}
        >
          <Link
            className="w-full ml-auto cursor-pointer"
            href={`/mesmery/${user.id}/${value.name}`}
          >
            {value.name}
          </Link>
          <DeleteSetButton set={value} />
        </div>
      ))}
    </div>
  );
}
