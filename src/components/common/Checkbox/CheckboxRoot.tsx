import { w } from "@/utils/w";
import { ComponentProps } from "react";

export interface CheckboxRootProps extends ComponentProps<'div'> {}

export function CheckboxRoot({ className, ...props }: CheckboxRootProps) {

  return (
    <div
      className={w(
        "group flex gap-1.5 sm:gap-2.5 items-center",
        className,
      )}
      {...props}
    />
  );
}