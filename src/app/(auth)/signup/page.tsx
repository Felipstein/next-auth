import { SignUpForm } from "./components/forms/SignUpForm";

export default function SignUpPage() {

  return (
    <>
      <header>
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Cadastre sua conta
        </h2>
      </header>

      <SignUpForm />
    </>
  );
}