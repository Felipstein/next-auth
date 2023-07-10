import { forwardRef } from "react";
import { SlotProps } from '@radix-ui/react-slot';
import { ButtonIconClientSide } from "./ButtonIconClientSide";
import { ButtonIconServerSide } from "./ButtonServerSideIcon";

export interface ButtonIconProps extends SlotProps {
  loader?: boolean,
}

export const ButtonIcon = forwardRef<HTMLElement, ButtonIconProps>((
  { loader, className, ...props },
  ref,
) => {
  
  if(loader) {
    return <ButtonIconClientSide ref={ref} className={className} {...props} />
  }
  
  return <ButtonIconServerSide ref={ref} className={className} {...props} />
});

ButtonIcon.displayName = 'ButtonIcon';