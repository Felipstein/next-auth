import { Button } from "@/components/common/Button";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { DashboardList } from "./components/DashboardList";

export default function DashboardsPage() {

  return (
    <div className="flex items-center justify-center flex-1">
      <div className="flex flex-col">
        <header className="mb-12 flex items-center gap-6">
          <Button
            variant="no-bg"
            className="w-fit"
            asChild
          >
            <Link href="/">
              <Button.Icon>
                <BiArrowBack />
              </Button.Icon>

              Voltar
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-zinc-900">Dashboards</h1>
        </header>

        <main>
          <DashboardList />
        </main>
      </div>
    </div> 
  );
}