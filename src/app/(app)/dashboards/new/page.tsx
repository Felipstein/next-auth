import { getServerSession } from "next-auth";
import { NewDashboardForm } from "./components/NewDashboardForm";
import { authOptions } from "@/lib/auth-options";
import { Button } from "@/components/common/Button";
import { BiArrowBack } from 'react-icons/bi';
import Link from "next/link";

export default async function NewDashboadPage() {
  const session = await getServerSession(authOptions);

  const { user } = session!;

  return (
    <div className="space-y-12 max-w-lg m-auto">
      <header className="flex items-center gap-3">
        <Button
          asChild
          variant="no-bg"
          className="w-fit"
        >
          <Link href="/dashboards">
            <Button.Icon>
              <BiArrowBack />
            </Button.Icon>

            Voltar
          </Link>
        </Button>

        <h3 className="text-xl font-semibold text-zinc-800">Criar novo Dashboard</h3>
      </header>

      <main>
        <NewDashboardForm user={user} />
      </main>
    </div>
  );
}