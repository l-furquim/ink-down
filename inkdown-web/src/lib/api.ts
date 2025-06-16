import axios, { type AxiosInstance } from "axios";

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
	return Promise.reject(error);
})


export interface ApiResponse<TData = unknown> {
  data?: TData;
  errorMessage?: string;
  token?: string;
  statusCode?: number;
};