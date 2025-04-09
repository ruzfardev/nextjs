import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  const handleLogin = async () => {
    "use server";
    await signIn("github");
  };
  const handleLogout = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="./next.svg" alt="logo" width={100} height={100} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form action={handleLogout}>
                <button
                  className="bg-black text-white px-3 py-2 rounded-md"
                  type="submit"
                >
                  Logout
                </button>
              </form>
              <Link href={`/user/${session?.user.id}`}>
                <span>
                  {session?.user.name ? session.user.name : "Profile"}
                </span>
              </Link>
            </>
          ) : (
            <form action={handleLogin}>
              <button
                className="bg-black text-white px-3 py-2 rounded-md"
                type="submit"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
