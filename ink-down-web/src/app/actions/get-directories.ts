"use server";

import { api } from "@/lib/api";
import type { AxiosError } from "axios";
import type { DirectoryDataType, NoteDataType } from "../@types/note-types";

export type DirectoryWithChildren = DirectoryDataType & {
	notes: NoteDataType[];
	childrens: DirectoryWithChildren[];
};

export async function getDirectories() {
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjliZjU2OC0zOTc0LTQ5ZDktOTE4MS1jNGI3MDIwMGNmMzUiLCJpYXQiOjE3NDk5MDU2MzYsImV4cCI6MTc0OTkxMjgzNn0.SjPINY2t3ET6Qygj1ZXCbnt4z86SdIYSQWUFnZQjyj8";

	try {
		const response = await api().get({
			token,
			uri: "directories/author",
			cacheTags: ["author-directories"],
		});

		if (response.ok) {
			const json = await response.json();

			console.log("JSON AQUI");

			console.log(json.directories);

			return json.directories;
		}
	} catch (e) {
		const axiosError = e as AxiosError;

		console.log(axiosError.message);
	}
}
