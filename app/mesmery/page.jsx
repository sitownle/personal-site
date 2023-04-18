import Link from "next/link";
import { getSets, getTerms } from "./db.ts";
import SetInput from "./setInput.tsx";
import ExistingSets from "./existingSets";

export default function mesmery() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 w-full h-[90vh]">
      <ExistingSets />
      <div className="w-full flex flex-col items-center gap-4">
        <SetInput />
      </div>
    </div>
  );
}
