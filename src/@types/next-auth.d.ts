import NextAuth from "next-auth/next";
import { UserSession } from "./user.type";

declare module "next-auth" {
  interface Session {
    user: UserSession,
  }
}