import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import User from "@/models/user";
import connectDB from "@/models/mongoDb";

export const auth = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDB();
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
          });
          await newUser.save();
          user.name=newUser.email;
        }
      }
      return true;
    },
    async session({ session, token, user }) {
      const dbuser=await User.findOne({email: session.user.email});
      session.user.name=dbuser.username;
      return session
    }
  },
});

export { auth as GET, auth as POST };
