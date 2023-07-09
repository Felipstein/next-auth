import { w } from "@/utils/w";
import { ComponentProps } from "react";

export interface SeparatorHrProps extends ComponentProps<'hr'> {}

export function SeparatorHr({ className, ...props }: SeparatorHrProps) {

  return (
    <hr
      className={w(
        "w-full border-t border-zinc-300 rounded-full",
        className,
      )}
      {...props}
    />
  );
}