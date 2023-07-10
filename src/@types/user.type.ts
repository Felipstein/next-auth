export interface User {
  id: string,
  name: string,
  email: string,
}

export type UserSession = User & {
  sub: string,
  jti: string,
  iat: number,
  exp: number,
};