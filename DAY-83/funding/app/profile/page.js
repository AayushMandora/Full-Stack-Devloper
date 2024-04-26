"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const profile = () => {
  const { data: session } = useSession();
  if (!session) {
    const router = useRouter();
    router.push("/login");
  }
  return <div>profile</div>;
};

export default profile;
