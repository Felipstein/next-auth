import { useFormContext } from "react-hook-form";
import { Input } from "../../Input";
import { InputRootProps } from "../../Input/InputRoot";
import { FieldInputProvider } from "./contexts/FieldInputContext";

export interface FieldInputRootProps extends InputRootProps {
  field: string,
}

export function FieldInputRoot({ field, ...props }: FieldInputRootProps) {
  const { formState: { isSubmitting } } = useFormContext();

  return (
    <FieldInputProvider field={field}>
      <Input.Root
        data-submitting={isSubmitting}
        className="data-[submitting=true]:opacity-40 data-[submitting=true]:pointer-events-none"
        {...props}
      />
    </FieldInputProvider>
  );
}