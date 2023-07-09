import { SignInForm } from "./components/forms/SignInForm";

export default function SignInPage() {

  return (
    <>
      <header>
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Faça login em sua conta
        </h2>
      </header>

      <SignInForm />
    </>
  );
}