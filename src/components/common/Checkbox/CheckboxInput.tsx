import { w } from "@/utils/w";
import { ComponentProps, forwardRef } from "react";

export interface CheckboxInputProps extends Omit<ComponentProps<'input'>, 'type'> {}

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(({ className, ...props }, ref) => {

  return (
    <input
      ref={ref}
      type="checkbox"
      className={w(
        "focus:ring-sky-600 text-sky-500 w-4 h-4 rounded border border-zinc-300",
        className,
      )}
      {...props}
    />
  );
});

CheckboxInput.displayName = 'CheckboxInput';