import { ComponentProps } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, UseFormReturn } from "react-hook-form";

export interface FormProps<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined> extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  useForm: UseFormReturn<TFieldValues, TContext, TTransformedValues>,
  onSubmit: TTransformedValues extends FieldValues ? SubmitHandler<TTransformedValues> : SubmitHandler<TFieldValues>,
  onInvalidSubmit?: SubmitErrorHandler<TFieldValues>,
}

export function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends undefined = undefined
>({ useForm, onSubmit, onInvalidSubmit, noValidate = true, ...props }: FormProps<TFieldValues, TContext, TTransformedValues>) {
  
  return (
    <FormProvider {...useForm}>
      <form
        noValidate={noValidate}
        onSubmit={useForm.handleSubmit(onSubmit, onInvalidSubmit)}
        {...props}
      />
    </FormProvider>
  );
}