import { AuthOptions } from "next-auth";
import credentialsProvider from "./credentials.provider";
import githubProvider from "./github.provider";
import { UserSession } from "@/@types/user.type";

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/signin',
  },

  providers: [
    credentialsProvider,
    githubProvider,
  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if(trigger === 'update') {
        return { ...session, ...token };
      }

      const finalUser = { ...user, ...token } as UserSession;

      return finalUser;
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },

  jwt: {
    maxAge: Number(process.env.JWT_MAX_AGE),
  },

  session: {
    strategy: 'jwt',

    maxAge: Number(process.env.JWT_MAX_AGE),
  },

  secret: process.env.NEXTAUTH_SECRET,
};