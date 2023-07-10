import { authService } from "@/services/api/auth.service";
import Credentials from "next-auth/providers/credentials";

export default Credentials({
  credentials: {
    email: { type: 'email', label: 'E-mail' },
    password: { type: 'password', label: 'Senha' },
  },

  async authorize(credentials) {
    if(!credentials?.email || !credentials?.password) {
      throw new Error('Credenciais obrigatórias.');
    }

    const authResponse = await authService.signIn({ email: credentials.email, password: credentials.password });

    return authResponse.user;
  },
});