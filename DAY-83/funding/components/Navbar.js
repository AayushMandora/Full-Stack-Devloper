"use client"
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {
    const { data: session } = useSession()
    if(session) {
        return <>
          Signed in as {session.user.email} <br/>
          <button onClick={() => signOut()}>Sign out</button>
        </>
    }

  return (
    <div className="flex justify-between p-3 items-center">
      <div className="text-xl font-bold flex items-center gap-3">
        <span class="material-symbols-outlined">crowdsource</span>Funding
      </div>
      <div>
        <Link href={'/login'}>
        <button className="px-4 p-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 font-bold">
          Log in
        </button></Link>
      </div>
    </div>
  );
};

export default Navbar;
