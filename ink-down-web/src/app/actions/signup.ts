import { api } from "@/lib/api";
import type { AxiosError } from "axios";

interface SignUpData {
	name: string;
	email: string;
	password: string;
	accountType: string
	imageUrl: string
};

export async function signUp({ name, email, password,accountType, imageUrl }: SignUpData) {
	try {

		const response = await api.post("/authors/create", JSON.stringify({
			alias: name,
			email,
			accountType,
			imageUrl,
			password
		}));

		console.log(response.data);

	} catch(e) {
		const axiosError = e as AxiosError;
		console.log(axiosError);
	}
}
