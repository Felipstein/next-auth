import { w } from "@/utils/w";
import { ComponentProps } from "react";

export interface SeparatorRootProps extends ComponentProps<'div'> {}

export function SeparatorRoot({ className, ...props }: SeparatorRootProps) {

  return (
    <div
      className={w(
        "flex items-center gap-3",
        className,
      )}
      {...props}
    />
  );
}