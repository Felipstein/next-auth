'use client'

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SocialButton } from "./SocialButton";

export function ContinueWithFooter() {

  return (
    <footer className="flex items-center gap-4">
      <SocialButton
        icon={FcGoogle}
        className="text-zinc-900 bg-white hover:bg-zinc-50 border border-zinc-200 shadow hover:shadow-md"
      >
        Google
      </SocialButton>

      <SocialButton
        icon={FaGithub}
        className="text-white bg-zinc-800 hover:bg-zinc-950 shadow hover:shadow-md"
      >
        GitHub
      </SocialButton>
    </footer>
  );
}