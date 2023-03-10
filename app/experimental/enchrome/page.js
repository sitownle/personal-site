import Link from "next/link";

const Enchrome = () => {
  return (
    <>
      {/* <div className="min-h-[100vh] w-full bg-gradient-to-b from-slate-900 to-black text-slate-200 flex flex-row justify-center"> */}
      <h2 className="text-3xl">Enchrome</h2>
      <div className="pt-12 md:w-1/2 w-[90%] flex flex-col gap-4">
        <p>
          Enchrome is a password encryption extension that helps secure your
          passwords without storing them. By only storing the encryption method
          for a given site, Enchrome provides a second layer of security,
          forcing potential bad actors to gain access to both your starter
          password and the stored encryption. Because Enchrome generates a
          different encryption for every site, the user has the freedom to use
          unique complex passwords or reuse an easily remembered password
          without introducing the cross-site vulnerability to data breaches that
          the lax strategy ordinarily exposes; all without preventing more
          security conscious users from enjoying all the benefits of more varied
          and complex passwords.
        </p>
        <p>
          Passwords may not be the future of account security, but for the time
          being it can be difficult to navigate the internet without them. Why
          not do so safely?
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
        <p>
          Now that you have Enchrome, you can test it on the password input
          below.
        </p>
        <input
          type="password"
          className="w-1/2 rounded shadow-inner shadow-slate-900 p-1 self-center"
          placeholder="test Enchrome on me!"
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default Enchrome;
