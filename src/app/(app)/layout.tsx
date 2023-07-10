import { Header } from "@/components/containers/Header";
import { ReactNode } from "react";

export interface AppLayoutProps {
  children: ReactNode,
}

export default function AppLayout({ children }: AppLayoutProps) {

  return (
    <div className="flex flex-col flex-1">
      <Header />

      <main className="mx-auto my-4 md:my-6 px-3.5 flex-1 w-full max-w-[1360px] flex flex-col">
        {children}
      </main>
    </div>
  );
}