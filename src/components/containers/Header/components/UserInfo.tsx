import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";

export async function UserInfo() {
  const session = await getServerSession(authOptions);
  
  const { user } = session!;

  return (
    <div className="max-w-[120px] truncate">
      <span className="text-sm text-zinc-600">
        {user.name}
      </span>
    </div>
  );
}