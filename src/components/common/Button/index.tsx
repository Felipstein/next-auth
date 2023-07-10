import { ComponentProps } from "react";
import { ButtonClientSide } from "./ButtonClientSide";
import { ButtonServerSide } from "./ButtonServerSide";
import { ButtonIcon } from "./ButtonIcon";

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'main' | 'no-bg',
  loading?: boolean,
  defaultShadow?: boolean,
  asChild?: boolean,
}

export function Button({
  loading = false,
  variant = 'main',
  ...props
}: ButtonProps) {
  if(loading) {
    return <ButtonClientSide loading={loading} variant={variant} {...props} />;
  }

  return <ButtonServerSide variant={variant} {...props} />
}

Button.Icon = ButtonIcon;