'use client'

import { Button } from "@/components/common/Button";
import { LinkText } from "@/components/common/LinkText";
import { PasswordInputField } from "@/components/common/PasswordInput";
import { FieldInput } from "@/components/common/forms/FieldInput";
import { Form } from "@/components/common/forms/Form";
import { authService } from "@/services/api/auth.service";
import { APIError } from "@/shared/errors/APIError";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiWarningCircle } from "react-icons/pi";
import { z } from "zod";

const signUpSchema = z.object({
  name: z.string()
    .nonempty('Nome obrigatório.'),
  email: z.string()
    .email('E-mail inválido.')
    .nonempty('E-mail obrigatório.'),
  password: z.string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres.')
    .nonempty('Senha obrigatória'),
  confirmPassword: z.string()
    .nonempty('Senha obrigatória'),
})
  .refine(
    ({ password, confirmPassword }) => password === confirmPassword,
    {
      path: ['confirmPassword'],
      message: 'Senhas não coincidem.',
    },
  );

type SignUpFormData = z.infer<typeof signUpSchema>;

export function SignUpForm() {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    formState: { isValid }
  } = signUpForm;

  async function signUpRequest({ name, email, password, confirmPassword }: SignUpFormData) {
    setIsLoading(true);

    try {
      await authService.signUp({ name, email, password, confirmPassword, });

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
    } catch (err : APIError | any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
    
  }

  return (
    <Form
      useForm={signUpForm}
      onSubmit={signUpRequest}
      className="space-y-6"
    >
      {error && (
        <span className="text-red-500 font-medium text-sm flex items-center gap-1.5">
          <PiWarningCircle className="w-6 h-6" />

          {error}
        </span>
      )}

      <div className="space-y-5">
        <FieldInput.Root field="name">
          <FieldInput.Label>
            Name *
          </FieldInput.Label>

          <FieldInput.Field
            type="name"
            placeholder="Seu nome"
          />

          <FieldInput.Error />
        </FieldInput.Root>

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

        <FieldInput.Root field="confirmPassword">
          <FieldInput.Label>
            Confirmar senha *
          </FieldInput.Label>

          <PasswordInputField
            placeholder="@!$_exemplo213"
          />

          <FieldInput.Error />
        </FieldInput.Root>
      </div>

      <div className="w-full flex justify-end items-center">
        <LinkText
          href="/signin"
        >
          Já tenho uma conta
        </LinkText>
      </div>

      <Button
        type="submit"
        disabled={!isValid}
        loading={isLoading}
      >
        <Button.Icon loader />

        Cadastrar
      </Button>
    </Form>
  );
}