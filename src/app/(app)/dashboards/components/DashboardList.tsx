import { dashboardService } from "@/services/api/dashboard.service";
import { EmptyDashboards } from "./EmptyDashboards";
import { Button } from "@/components/common/Button";
import { BiTrash } from "react-icons/bi";
import Link from "next/link";

export async function DashboardList() {
  const dashboards = await dashboardService.listAll();

  return (
    <div>
      {dashboards.length === 0 && (
        <EmptyDashboards />
      )}

      {dashboards.length > 0 && (
        <ul className="rounded-md shadow-sm border border-zinc-200 divide-y divide-zinc-200">
          {dashboards.map(dashboard => (
            <li key={dashboard.id}>
              <Link
                href={`/dashboards/view/${dashboard.id}`}
                className="w-full px-5 py-4 flex justify-between gap-12 items-center hover:bg-sky-50/50 active:scale-95 transition-transform"
              >
                <div className="flex flex-col justify-between items-start">
                  <header className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-zinc-700">{dashboard.name}</h3>

                    <span className="text-[10px] italic text-zinc-300">
                      {dashboard.id}
                    </span>
                  </header>

                  {dashboard.description && (
                    <span className="text-sm text-zinc-400">
                      {dashboard.description}
                    </span>
                  )}

                  {!dashboard.description && (
                    <span className="text-sm text-zinc-300 italic">
                      Sem descrição
                    </span>
                  )}
                </div>

                <div>
                  <Button
                    variant="no-bg"
                    className="text-red-500 hover:text-red-400"
                  >
                    <Button.Icon>
                      <BiTrash />
                    </Button.Icon>
                  </Button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}