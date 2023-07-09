import { w } from "@/utils/w";
import { ComponentProps } from "react";

export interface InputRootProps extends ComponentProps<'div'> {}

export function InputRoot({ className, ...props }: InputRootProps) {

  return (
    <div className={w(
        "flex flex-col items-start",
        className,
      )}
      {...props}
    />
  );
}