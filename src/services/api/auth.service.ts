import { AxiosInstance } from "axios";
import { AuthResponse, SignInRequest, SignUpRequest } from "./auth.dto";
import { api } from "./api.service";

export default class AuthService {

  constructor(private readonly api: AxiosInstance) {}

  async signIn({ email, password }: SignInRequest): Promise<AuthResponse> {
    const response = await this.api.post('/auth/signin', { email, password });

    return response.data;
  }

  async signUp({ name, email, password, confirmPassword }: SignUpRequest): Promise<AuthResponse> {
    const response = await this.api.post('/auth/signup', { name, email, password, confirmPassword });

    return response.data;
  }

}

export const authService = new AuthService(api);