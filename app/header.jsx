import Link from "next/link";
import { UserButton } from "@clerk/nextjs/app-beta";

export default function Header() {
  return (
    <div className="min-h-[5vh] w-full bg-gradient-to-t from-slate-900 to-black text-slate-300 flex flex-row items-center">
      <Link
        href="/"
        className="py-2 px-4 hover:shadow-md border-b hover:border-slate-400/50 border-slate-900 rounded-lg transition-colors hover:bg-gradient-to-t hover:from-slate-400/50 hover:to-black"
      >
        {"Home"}
      </Link>
      <Link
        href="/experimental"
        className="py-2 px-4 hover:shadow-md border-b hover:border-slate-400/50 border-slate-900 rounded-lg transition-colors hover:bg-gradient-to-t hover:from-slate-400/50 hover:to-black"
      >
        {"Projects"}
      </Link>
      <UserButton
        showName
        signInUrl={"/sign-in"}
        userProfileMode={"modal"}
        afterSignOutUrl={"/"}
        appearance={{
          elements: {
            rootBox: "ml-auto pr-4",
            userButtonOuterIdentifier: "text-slate-300",
            //userButtonTrigger: "shadow-slate-300",
            userButtonPopoverCard: "text-slate-950 bg-slate-400",
            userButtonPopoverFooter: "text-slate-200"
          }
        }}
      />
    </div>
  );
}
