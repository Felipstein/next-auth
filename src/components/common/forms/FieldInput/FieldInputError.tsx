import { InputErrorProps } from "../../Input/InputError";
import { Input } from "../../Input";
import { useFormContext } from "react-hook-form";
import { useFieldInput } from "./contexts/FieldInputContext";

export interface FieldInputErrorProps extends Omit<InputErrorProps, 'children'> {}

export function FieldInputError(props: FieldInputErrorProps) {
  const { field } = useFieldInput();
  const { formState: { errors } } = useFormContext();

  const message = errors[field]?.message?.toString();

  return (
    <Input.Error
      {...props}
    >
      {message}
    </Input.Error>
  );
}