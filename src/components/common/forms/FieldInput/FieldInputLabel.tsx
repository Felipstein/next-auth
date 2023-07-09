import { InputLabelProps } from "../../Input/InputLabel";
import { Input } from "../../Input";
import { useFieldInput } from "./contexts/FieldInputContext";
import { useFormContext } from "react-hook-form";
import { w } from "@/utils/w";

export interface FieldInputLabelProps extends Omit<InputLabelProps, 'htmlFor'> {}

export function FieldInputLabel({ className, ...props }: FieldInputLabelProps) {
  const { field } = useFieldInput();
  const { formState: { errors } } = useFormContext();

  const hasError = !!errors[field]?.message?.toString();

  return (
    <Input.Label
      htmlFor={field}
      data-error={hasError}
      className={w(
        "data-[error=true]:text-red-500",
        className,
      )}
      {...props}
    />
  );
}