import { ReactNode } from "react";
import { ContinueWithFooter } from "./components/ContinueWithFooter";
import { Separator } from "@/components/Separator";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth-options";

export interface AuthLayoutProps {
  children: ReactNode,
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const data = await getServerSession(authOptions);

  if(data) {
    redirect('/');
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <main className="space-y-10 w-full mx-3 sm:max-w-sm">
        {children}

        <Separator label="Ou continuar com" />

        <ContinueWithFooter />
      </main>
    </div>
  );
}