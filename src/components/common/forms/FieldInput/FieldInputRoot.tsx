import { Input } from "../../Input";
import { InputRootProps } from "../../Input/InputRoot";
import { FieldInputProvider } from "./contexts/FieldInputContext";

export interface FieldInputRootProps extends InputRootProps {
  field: string,
}

export function FieldInputRoot({ field, ...props }: FieldInputRootProps) {
  return (
    <FieldInputProvider field={field}>
      <Input.Root {...props} />
    </FieldInputProvider>
  );
}