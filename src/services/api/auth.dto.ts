import { User } from "@/@types/user.type";

export interface SignInRequest {
  email: string,
  password: string,
}

export interface SignUpRequest {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export interface AuthResponse {
  user: User,
}