import { ClerkProvider } from "@clerk/nextjs/app-beta";
import "../styles/globals.css";
import Header from "./header.jsx";

export const metadata = {
  title: {
    default: "Simon Townley-Smith",
    template: "%s | Simon Townley-Smith"
  },
  description: "Projects & Thoughts by Simon Townley-Smith",
  keywords: ["Simon Townley-Smith", "sitownle", "Full Stack Engineer"],
  authors: [{ name: "Simon Townley-Smith" }],
  colorScheme: "dark",
  creator: "Simon Townley-Smith",
  publisher: "Simon Townley-Smith",
  openGraph: {
    title: "Simon Townley-Smith",
    description: "Projects & Thoughts by Simon Townley-Smith",
    url: "https://sitownle.dev",
    siteName: "sitownle.dev",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600
      }
    ],
    locale: "en-US",
    type: "website",
    themeColor: "black"
  }
  //icon:
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
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
    </ClerkProvider>
  );
}
