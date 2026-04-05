import { PrismaAdapter } from "@auth/prisma-adapter"
import { getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
import prisma from "./connect"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
}

export const getAuthSession = () => getServerSession(authOptions)