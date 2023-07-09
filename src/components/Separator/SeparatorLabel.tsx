import { w } from "@/utils/w";
import { ComponentProps } from "react";

export interface SeparatorLabelProps extends ComponentProps<'span'> {}

export function SeparatorLabel({ className, ...props }: SeparatorLabelProps) {

  return (
    <span
      className={w(
        "inline-block whitespace-nowrap text-sm font-semibold text-zinc-600",
        className,
      )}
      {...props}
    />
  );
}