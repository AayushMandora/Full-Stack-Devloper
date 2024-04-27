import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const auth= NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
});

export {auth as GET,auth as POST}