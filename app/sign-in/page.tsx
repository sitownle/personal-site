import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div className="md:pt-[10vh]">
      <SignIn
        //routing="path"
        //path="/sign-in"
        signUpUrl="/sign-up"
        afterSignInUrl="/mesmery"
        //redirectUrl={"#redir" /*`${process.env.BASE_PATH}/mesmery`*/}
        appearance={{
          elements: {
            card: "bg-slate-300 text-slate-950",
            headerTitle: "text-slate-950",
            headerSubtitle: "text-slate-950",
            formFieldInput: "text-black",
            formButtonPrimary:
              "text-slate-200 text-sm px-2 border border-slate-800 rounded-lg bg-gradient-to-l from-slate-700 to-black shadow-md hover:bg-gradient-to-r hover:from-slate-700 hover:to-black hover:text-slate-400 transition-colors duration-300"
          }
        }}
      />
    </div>
  );
}
