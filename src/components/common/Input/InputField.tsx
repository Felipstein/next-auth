import { w } from "@/utils/w";
import { ComponentProps, forwardRef } from "react";

export interface InputFieldProps extends ComponentProps<'input'> {}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ className, ...props }, ref) => {

  return (
    <input 
      ref={ref}
      className={w(
        "min-h-10 w-full border border-zinc-300 rounded-md shadow-sm px-3 py-2 text-zinc-800 text-sm placeholder:text-sm placeholder:text-zinc-400",
        className,
      )}
      {...props}
    />
  );
});

InputField.displayName = 'InputField';