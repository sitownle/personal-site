import Head from "next/head";
import Link from "next/link";

const Enchrome = () => {
  return (
    <>
      <Head>
        <title>{"password encryption chrome extension"}</title>
        <meta
          name="description"
          content="for personal use and possibly publish as public chrome extension"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200 flex flex-row justify-center">
        <Link
          className="absolute top-0 left-0 text-slate-900 bg-slate-500 p-2 rounded-br"
          href="/experimental"
        >
          {"<< Projects Home"}
        </Link>
        <div className="pt-10 w-1/2 flex flex-col gap-4">
          <p>
            Enchrome is a password encryption extension that helps secure your
            passwords without storing them. By only storing the encryption
            method for a given site, Enchrome provides a second layer of
            security, forcing potential bad actors to gain access to both your
            starter password and the stored encryption. Because Enchrome
            generates a different encryption for every site, the user has the
            freedom to use unique complex passwords or reuse an easily
            remembered password without introducing the cross-site vulnerability
            to data breaches that the lax strategy ordinarily exposes; all
            without preventing more security conscious users from enjoying all
            the benefits of more varied and complex passwords.
          </p>
          <p>
            Passwords may not be the future of account security, but for the
            time being it can be difficult to navigate the internet without
            them. Why not do so safely?
          </p>
          <div>
            Download Enchrome{" "}
            <Link
              href="/"
              className="underline text-blue-500 hover:text-blue-700"
            >
              here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enchrome;
