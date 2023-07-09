import { w } from "@/utils/w";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface LinkTextProps extends LinkProps {
  className?: string,
  children?: ReactNode,
}

export function LinkText({ className, ...props }: LinkTextProps) {

  return (
    <Link
      className={w(
        "text-sky-500 font-medium text-sm",
        className,
      )}
      {...props}
    />
  );
}