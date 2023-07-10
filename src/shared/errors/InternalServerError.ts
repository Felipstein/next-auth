import { APIError } from "./APIError";

export class InternalServerError<TOriginalError extends Error> extends APIError {

  constructor(
    message = 'Ocorreu um erro interno do servidor, tente novamente mais tarde.',
    statusCode: number,
    key: string,
    details?: string[],
    readonly originalError?: TOriginalError,
  ) {
    super(key, message, statusCode, details);
  }

}