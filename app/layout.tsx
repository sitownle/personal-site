import "../styles/globals.css";
import Header from "./header.jsx";

const metadata = {
  title: {
    default: "Sitownle",
    template: "%s | Sitownle"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        {/* <Head>
        <title>{"3D optical component editor"}</title>
        <meta
          name="description"
          content="exploration of react-three-fiber and optics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
        <div className="min-h-[100vh] w-full bg-gradient-to-b from-slate-900 to-black text-slate-200 flex flex-col items-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
