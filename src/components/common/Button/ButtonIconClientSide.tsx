'use client'

import { forwardRef } from "react";
import { Slot, SlotProps } from '@radix-ui/react-slot';
import { BiLoaderAlt } from 'react-icons/bi';

import { w } from "@/utils/w";
import { ButtonIconProps } from "./ButtonIcon";
import { useButtonContext } from "./contexts/ButtonContext";

export const ButtonIconClientSide = forwardRef<HTMLElement, SlotProps>((
  { className, children, ...props }: Omit<ButtonIconProps, 'loader'>,
  ref,
) => {
  const { loading } = useButtonContext();
  
  if(!loading) {
    return null;
  }

  return (
    <Slot
      ref={ref}
      className={w(
        "w-5 h-5 animate-spin",
        className,
      )}
      {...props}
    >
      {children ?? <BiLoaderAlt />}
    </Slot>
  );
});

ButtonIconClientSide.displayName = 'ButtonIconClientSide';