import axios from "axios";

interface ApiProps {
	token?: string;
	uri: string;
	cacheTags?: string[];
}

/* export const api = () => {
	const get = async ({ token, uri, cacheTags }: ApiProps) => {
		const response = await fetch(`http://localhost:3333/${uri}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			cache: "force-cache",
			next: {
				tags: cacheTags,
			},
		});
		return response;
	};

	const post = async ({ uri, token, cacheTags }: ApiProps) => {
		const response = await fetch(`http://localhost:3333/${uri}`, {
			method: "POST",
		});

		return response;
	};

	return {
		get,
		post,
	};
};
 */

export const api = axios.create({
	baseURL: "http://localhost:3333/",
	headers: {
		"Content-Type": "application/json"
	},
})