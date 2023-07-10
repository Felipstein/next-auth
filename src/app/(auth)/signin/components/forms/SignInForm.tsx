'use client'

import { Button } from "@/components/common/Button";
import { Checkbox } from "@/components/common/Checkbox";
import { LinkText } from "@/components/common/LinkText";
import { PasswordInputField } from "@/components/common/PasswordInput";
import { FieldInput } from "@/components/common/forms/FieldInput";
import { Form } from "@/components/common/forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PiWarningCircle } from "react-icons/pi";
import { ErrorFeedback } from "@/components/common/ErrorFeedback";
import { BiDownArrowCircle } from "react-icons/bi";

const signInSchema = z.object({
  email: z.string()
    .email('E-mail inválido.')
    .nonempty('E-mail obrigatório.'),
  password: z.string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres.')
    .nonempty('Senha obrigatória'),
  remember: z.boolean(),
});

type SignInFormData = z.infer<typeof signInSchema>;

export function SignInForm() {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const {
    register,
    formState: { isValid }
  } = signInForm;

  async function signInRequest({ email, password }: SignInFormData) {
    setIsLoading(true);
    
    const response = await signIn('credentials', { email, password, redirect: false });

    if(response?.error) {
      setError(response.error);
    } else {
      let finalUrl = '/';

      if(response?.url) {
        const url = new URL(response.url);
        const callbackUrl = url.searchParams.get('callbackUrl');

        if(callbackUrl) {
          finalUrl = new URL(callbackUrl).pathname;
        }
      }

      push(finalUrl);
      setError(null);
    }
    
    setIsLoading(false);
  }

  return (
    <Form
      useForm={signInForm}
      onSubmit={signInRequest}
      className="space-y-6"
    >
      <ErrorFeedback error={error} />

      <div className="space-y-5">
        <FieldInput.Root field="email">
          <FieldInput.Label>
            E-mail *
          </FieldInput.Label>

          <FieldInput.Field
            type="email"
            placeholder="exemplo@gmail.com"
          />

          <FieldInput.Error />
        </FieldInput.Root>

        <FieldInput.Root field="password">
          <FieldInput.Label>
            Senha *
          </FieldInput.Label>

          <PasswordInputField
            placeholder="@!$_exemplo213"
          />

          <FieldInput.Error />
        </FieldInput.Root>
      </div>

      <div className="w-full flex justify-between items-center">
        <Checkbox.Root>
          <Checkbox.Input
            id="remember"
            {...register('remember')}
          />

          <Checkbox.Label htmlFor="remember">
            Lembrar de mim
          </Checkbox.Label>
        </Checkbox.Root>

        <LinkText
          href="/signup"
        >
          Não tenho uma conta
        </LinkText>
      </div>

      <Button
        type="submit"
        disabled={!isValid}
        loading={isLoading}
      >
        <Button.Icon loader />

        Fazer Login
      </Button>
    </Form>
  );
}