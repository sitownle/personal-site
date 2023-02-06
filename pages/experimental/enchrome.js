import Head from "next/head";

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
      <div className="min-h-[100vh] w-full bg-slate-900 text-slate-200 flex flex-row">
        <div className="w-1/4 flex flex-col gap-4">
          <p>
            Enchrome is a password encryption extension that helps secure your
            passwords without storing them. By only storing the encryption
            method for a given site, Enchrome provides a second layer of
            security, forcing potential bad actors to have to secure both your
            starter password and the stored encryption. Because Enchrome
            generates a different encryption for every site, the user has the
            freedom to use unique complex passwords or reuse an easily
            remembered password without introducing the cross-site vulnerability
            to data breaches that the lax strategy usually exposes; all without
            preventing more security conscious users from enjoying all the
            benefits of more varied and complex passwords.
          </p>
          <p>
            Passwords may not be the future of account security, but for the
            time being it can be difficult to navigate the internet without
            them. Why not do so safely?
          </p>
        </div>
      </div>
    </>
  );
};

export default Enchrome;
