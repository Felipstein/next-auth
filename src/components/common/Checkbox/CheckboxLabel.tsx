import { w } from "@/utils/w";
import { ComponentProps } from "react";

export interface CheckboxLabelProps extends ComponentProps<'label'> {}

export function CheckboxLabel({ className, ...props }: CheckboxLabelProps) {

  return (
    <label
      className={w(
        "text-sm text-zinc-700 font-medium leading-none",
        className,
      )}
      {...props}
    />
  );
}