'use client'

import { useMemo, useState } from "react";
import { FieldInput } from "../forms/FieldInput";
import { FieldInputFieldProps } from "../forms/FieldInput/FieldInputField";
import { w } from "@/utils/w";
import { PiEye, PiEyeSlash } from "react-icons/pi";

export interface PasswordInputFieldProps extends Omit<FieldInputFieldProps, 'type'> {}

export function PasswordInputField({ placeholder: originalPlaceholder, className, ...props }: PasswordInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const placeholder: string | undefined = useMemo(() => {
    if(!originalPlaceholder) {
      return undefined;
    }

    return showPassword ? originalPlaceholder : '*'.repeat(originalPlaceholder.length);
  }, [originalPlaceholder, showPassword]);

  const Icon = showPassword ? PiEye : PiEyeSlash;

  return (
    <div className="relative w-full">
      <FieldInput.Field
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        className={w(
          "pr-10",
          className,
        )}
        {...props}
      />

      <button
        type="button"
        onClick={() => setShowPassword(prevState => !prevState)}
        className="absolute top-1/2 -translate-y-1/2 right-2"
      >
        <Icon className="w-6 h-6 text-zinc-600" />
      </button>
    </div>
  );
}