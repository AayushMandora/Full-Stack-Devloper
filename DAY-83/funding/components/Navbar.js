"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  const [showdrop, setshowdrop] = useState(false);
  // if(session) {
  //     return <>
  //       Signed in as {session.user.email} <br/>
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  // }

  return (
    <div className="flex justify-between p-3 items-center">
      <Link href={"/"}>
      <div className="text-xl font-bold flex items-center gap-3 cursor-pointer">
        <span className="material-symbols-outlined">crowdsource</span>Funding
      </div></Link>
      <div className="flex gap-4">
        {session && (
          <div className="flex flex-col relative">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none text-sm py-2.5 text-center inline-flex items-center px-4 p-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 font-bold" 
              type="button"
              onClick={() => {
                setshowdrop(!showdrop);
              }}
            >
              Welcome {" "}{session.user.email}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={` z-10 ${
                showdrop ? "" : "hidden"
              } absolute top-11 right-0  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`
            }
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Page
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => signOut()}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {session && (
          <button
            className="px-4 p-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 font-bold"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
        {!session && (
          <Link href={"/login"}>
            <button className="px-4 p-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-700 font-bold">
              Log in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
