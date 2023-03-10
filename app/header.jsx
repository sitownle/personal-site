import Link from "next/link";

export default function Header() {
  return (
    <div className="min-h-[5vh] w-full bg-gradient-to-t from-slate-900 to-black text-slate-300 flex flex-row items-center gap-2">
      <Link
        href="/"
        className="p-2 hover:shadow-md border-b hover:border-slate-400/50 border-slate-900 rounded-lg transition-colors hover:bg-gradient-to-t hover:from-slate-400/50 hover:to-black"
      >
        {"<< Home"}
      </Link>
    </div>
  );
}
