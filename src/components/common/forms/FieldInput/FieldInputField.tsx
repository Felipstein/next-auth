import { InputFieldProps } from "../../Input/InputField";
import { Input } from "../../Input";
import { useFormContext } from "react-hook-form";
import { useFieldInput } from "./contexts/FieldInputContext";
import { w } from "@/utils/w";

export interface FieldInputFieldProps extends Omit<InputFieldProps, 'name' | 'id'> {}

export function FieldInputField({ className, ...props }: FieldInputFieldProps) {
  const { field } = useFieldInput();
  const { register, formState: { errors } } = useFormContext();

  const hasError = !!errors[field]?.message?.toString();

  return (
    <Input.Field
      id={field}
      data-error={hasError}
      className={w(
        "data-[error=true]:border-red-500 data-[error=true]:ring-red-500",
        className,
      )}
      {...props}
      {...register(field)}
    />
  );
}