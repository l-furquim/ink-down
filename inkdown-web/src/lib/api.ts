import axios, { type AxiosError, type AxiosInstance } from "axios";
import { redirect } from "react-router-dom";

export const api: AxiosInstance = axios.create({
	baseURL: "http://localhost:3333/",
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.response.use(
	(response) => {
	
	console.log(response);

	return Promise.resolve(response);
}, (error) => {
	const axiosError = error as AxiosError;

	console.log(axiosError);

	if(axiosError.response) {
		if(axiosError.response.status === 403) {
			window.location.href = "/login";
		};

		if(axiosError.status === 404) {
			const { message } = axiosError.response.data as ApiErrorResponse;

			window.location.href = `/notfound?message=${message}`;
		}
	};

	return Promise.reject(error);
})


export interface ApiResponse<TData = unknown> {
  data?: TData;
  errorMessage?: string;
  token?: string;
  statusCode?: number;
};

export interface ApiErrorResponse {
	message: string,
}