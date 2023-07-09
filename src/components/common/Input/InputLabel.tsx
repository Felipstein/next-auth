import { w } from "@/utils/w";
import { ComponentProps } from "react";

export interface InputLabelProps extends ComponentProps<'label'> {}

export function InputLabel({ className, children, ...props }: InputLabelProps) {

  return (
    <label
      className={w(
        "text-zinc-600 text-sm font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}