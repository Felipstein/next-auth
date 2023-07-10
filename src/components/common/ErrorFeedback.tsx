import { PiWarningCircle } from "react-icons/pi";

export interface ErrorFeedbackProps {
  error: string | null,
}

export function ErrorFeedback({ error }: ErrorFeedbackProps) {

  if(!error) {
    return null;
  }

  return (
    <span className="text-red-500 font-medium text-sm flex items-center gap-1.5">
      <PiWarningCircle className="w-6 h-6" />

      {error}
    </span>
  )
}