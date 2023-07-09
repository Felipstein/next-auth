import { w } from "@/utils/w";
import { ComponentProps } from "react";
import { PiWarningCircle } from "react-icons/pi";

export interface InputErrorProps extends ComponentProps<'span'> {}

export function InputError({ className, children, ...props }: InputErrorProps) {

  if(!children) {
    return null;
  }

  return (
    <span
      className={w(
        "flex items-center gap-1 text-xs text-red-500 mt-1",
        className,
      )}
      {...props}
    >
      <PiWarningCircle className="w-4 h-4" />

      {children}
    </span>
  );
}