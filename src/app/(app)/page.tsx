import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { LuLayoutDashboard } from 'react-icons/lu';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  const { user } = session!;

  return (
    <div className="flex items-center justify-center flex-1">
      <div className="bg-zinc-50 border border-zinc-100 shadow rounded-lg p-6 flex flex-col gap-4">
        <Input.Root className="flex-row items-center justify-between gap-2">
          <Input.Label className="text-xs text-zinc-400 whitespace-nowrap">ID</Input.Label>

          <Input.Field
            type="text"
            readOnly
            defaultValue={user.id}
            className="w-fit bg-transparent border-zinc-200 shadow-none"
          />
        </Input.Root>

        <Input.Root className="flex-row items-center justify-between gap-2">
          <Input.Label className="text-xs text-zinc-400 whitespace-nowrap">Nome</Input.Label>

          <Input.Field
            type="text"
            readOnly
            defaultValue={user.name}
            className="w-fit bg-transparent border-zinc-200 shadow-none"
          />
        </Input.Root>

        <Input.Root className="flex-row items-center justify-between gap-2">
          <Input.Label className="text-xs text-zinc-400 whitespace-nowrap">E-mail</Input.Label>

          <Input.Field
            type="email"
            readOnly
            defaultValue={user.email}
            className="w-fit bg-transparent border-zinc-200 shadow-none"
          />
        </Input.Root>

        <footer className="mt-2 w-full flex justify-end">
          <Button
            className="w-fit"
            asChild
          >
            <Link href="/dashboards">
              Ver Dashboards

              <Button.Icon>
                <LuLayoutDashboard />
              </Button.Icon>
            </Link>
          </Button>
        </footer>
      </div>
    </div> 
  );
}