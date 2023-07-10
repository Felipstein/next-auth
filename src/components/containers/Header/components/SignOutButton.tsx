'use client'

import { Button } from "@/components/common/Button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";

export function SignOutButton() {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSignOut() {
    setIsLoading(true);

    await signOut({ redirect: false });
    push('/signin');

    setIsLoading(false);
  }

  return (
    <Button
      defaultShadow={false}
      className='w-fit bg-transparent font-bold text-zinc-600 hover:text-zinc-900 hover:bg-transparent'
      onClick={handleSignOut}
      loading={isLoading}
    >
      <Button.Icon loader />

      Sair

      <Button.Icon>
        <FiLogOut />
      </Button.Icon>
    </Button>
  );
}