import { forwardRef } from "react";
import { Slot, SlotProps } from '@radix-ui/react-slot';
import { w } from "@/utils/w";
import { ButtonIconProps } from "./ButtonIcon";

export const ButtonIconServerSide = forwardRef<HTMLElement, SlotProps>((
  { className, ...props }: Omit<ButtonIconProps, 'loader'>,
  ref,
) => {

  return (
    <Slot
      ref={ref}
      className={w(
        "w-5 h-5",
        className,
      )}
      {...props}
    />
  );
});

ButtonIconServerSide.displayName = 'ButtonIconServerSide';