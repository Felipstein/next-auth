'use client'

import { Button, ButtonProps } from "@/components/common/Button";

export interface SocialButtonProps extends Omit<ButtonProps, 'defaultShadow'> {
  icon: React.FC,
}

export function SocialButton({ icon: Icon, children, ...props }: SocialButtonProps) {
  
  return (
    <Button
      defaultShadow={false}
      {...props}
    >
      <Button.Icon>
        <Icon />
      </Button.Icon>

      <span className="hidden sm:inline-block">
        {children}
      </span>
    </Button>
  );
}