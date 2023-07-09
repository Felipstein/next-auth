import { forwardRef } from "react";
import { Slot, SlotProps } from '@radix-ui/react-slot';
import { w } from "@/utils/w";

export interface ButtonIconProps extends SlotProps {}

export const ButtonIcon = forwardRef<HTMLElement, SlotProps>((
  { className, ...props }: ButtonIconProps,
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

ButtonIcon.displayName = 'ButtonIcon';