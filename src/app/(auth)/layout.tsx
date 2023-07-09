import { Separator } from "@/components/Separator";
import { ContinueWithFooter } from "./components/ContinueWithFooter";
import { ReactNode } from "react";

export interface AuthLayoutProps {
  children: ReactNode,
}

export default function AuthLayout({ children }: AuthLayoutProps) {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="space-y-10 w-full mx-3 sm:max-w-sm">
        {children}

        <Separator label="Ou continue com" />

        <ContinueWithFooter />
      </main>
    </div>
  );
}