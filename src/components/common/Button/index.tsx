import { w } from "@/utils/w";
import { ComponentProps } from "react";
import { ButtonIcon } from "./ButtonIcon";

export interface ButtonProps extends ComponentProps<'button'> {
  defaultShadow?: boolean,
}

export function Button({ defaultShadow = true, className, ...props }: ButtonProps) {

  return (
    <button
      className={w(
        "w-full flex gap-2 items-center justify-center font-medium text-sm text-white bg-sky-500 hover:bg-sky-600 rounded-md px-4 py-2.5",
        {
          "shadow shadow-sky-100 hover:shadow-sky-200": defaultShadow,
          "pointer-events-none opacity-20 bg-zinc-700 text-zinc-300": props.disabled, 
        },
        className,
      )}
      {...props}
    />
  );
}

Button.Icon = ButtonIcon;