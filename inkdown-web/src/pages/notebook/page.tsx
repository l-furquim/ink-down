"use client";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function NotebookPage() {
	const markDown = "# Ola";
	const [editingTitle, setEditingTitle] = useState(true);
	const [searchParams] = useSearchParams();
	const note = searchParams.get("note") ?? "";
	const id = searchParams.get("id");

	const [noteTitle, setNoteTitle] = useState(note);
	// validar aqui se a nota existe para o usuario logado se nao redirecionar

	return (
		<div className="w-full h-full flex flex-col">
			{note === "" ? (
				<h1>Nenhuma nota selecionada</h1>
			) : (
				<div className="pl-12 flex flex-col space-y-5">
					<input
						value={noteTitle}
						onChange={(e) => setNoteTitle(e.currentTarget.value)}
					/>
				</div>
			)}
		</div>
	);
}
