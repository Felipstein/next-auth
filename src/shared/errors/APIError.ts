export interface ErrorResponse<TOriginalError extends Error = Error> {
  name: string
  message: string
  details?: string[]
  originalError?: TOriginalError
}

export class APIError extends Error {

  constructor(
    readonly key: string,
    message: string,
    readonly statusCode: number,
    readonly details?: string[],
  ) {
    super(message);
  }

}