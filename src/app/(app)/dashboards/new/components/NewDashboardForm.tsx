'use client'

import { UserSession } from "@/@types/user.type";
import { Button } from "@/components/common/Button";
import { ErrorFeedback } from "@/components/common/ErrorFeedback";
import { FieldInput } from "@/components/common/forms/FieldInput";
import { Form } from "@/components/common/forms/Form";
import { dashboardService } from "@/services/api/dashboard.service";
import { APIError } from "@/shared/errors/APIError";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createDashboardSchema = z.object({
  name: z.string()
    .nonempty('Nome obrigatório'),
  description: z.string()
    .optional(),
});

type CreateDashboardFormData = z.infer<typeof createDashboardSchema>; 

export interface NewDashboardFormProps {
  user: UserSession,
}

export function NewDashboardForm({ user }: NewDashboardFormProps) {
  const { push } = useRouter();

  const [error, setError] = useState<string | null>(null);

  const newDashboardForm = useForm<CreateDashboardFormData>({
    resolver: zodResolver(createDashboardSchema)
  });

  const { formState: { isValid, isSubmitting: isLoading } } = newDashboardForm;

  async function createDashboard({ name, description }: CreateDashboardFormData) {
    try {
      const dashboard = await dashboardService.create({ name, description, userId: user.id });
  
      push(`/dashboards/view/${dashboard.id}`);
    } catch (err: APIError | any) {
      setError(err.message);
    }
  }

  return (
    <Form
      useForm={newDashboardForm}
      onSubmit={createDashboard}
      className="space-y-6"
    >
      <ErrorFeedback error={error} />

      <FieldInput.Root field="name">
        <FieldInput.Label>
          Nome *
        </FieldInput.Label>

        <FieldInput.Field
          type="text"
          placeholder="Meu Dashboard"
        />

        <FieldInput.Error />
      </FieldInput.Root>

      <FieldInput.Root field="description">
        <FieldInput.Label>
          Nome
        </FieldInput.Label>

        <FieldInput.Field
          type="text"
          placeholder="Meu Dashboard"
        />

        <FieldInput.Error />
      </FieldInput.Root>

      <footer className="mt-3 flex justify-end">
        <Button
          type="submit"
          loading={isLoading}
          disabled={!isValid}
          className="w-fit"
        >
          <Button.Icon loader />

          Criar Dashboard
        </Button>
      </footer>
    </Form>
  );
}