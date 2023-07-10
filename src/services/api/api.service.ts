import { APIError, ErrorResponse } from "@/shared/errors/APIError";
import { InternalServerError } from "@/shared/errors/InternalServerError";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.response.use(
  request => request,
  error => {
    if(error instanceof AxiosError) {
      if(error.response?.data) {
        const statusCode = error.response.status;
        const data = error.response.data;

        if(statusCode === 404 && typeof data === 'string' && data.includes('Cannot')) {
          throw new Error('Falha interna do servidor, entre em contato com o suporte.');
        }

        const {
          name: key, message, details, originalError,
        } = data as ErrorResponse;

        if(statusCode >= 500) {
          throw new InternalServerError(message, statusCode, key, details, originalError);
        } else {
          throw new APIError(key, message, statusCode, details);
        }
      }

      throw error;
    }

    throw error;
  }
);

export { api };