import { api } from "@/lib/api";
import axios, { AxiosError } from "axios";

interface Response {
  token: boolean | null;
  errorMessage?: string;
}

interface ErrorMessage {
  message: string;
}

export async function sendAuthorCodeConfirmation({ email }: { email: string }): Promise<Response> {
  try {
    const response = await api.post("authors/code", { email });

    return { token: true };
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const axiosError = e as AxiosError<ErrorMessage>;

      return {
        token: null,
        errorMessage: axiosError.response?.data?.message ?? "Erro desconhecido",
      };
    }
    return {
      token: null,
      errorMessage: "Erro inesperado ao tentar enviar código de confirmação.",
    };
  }
}