"use client";

import type { DirectoryDataType } from "@/app/@types/note-types";
import { useState, useCallback } from "react";

export const useDirectoriesActions = (
	initialDirectories: DirectoryDataType[],
) => {
	const [directories, setDirectories] = useState(initialDirectories);

	const [editingId, setEditingId] = useState<number | null>(null);

	const startEditing = (id: number) => setEditingId(id);
	const stopEditing = () => setEditingId(null);

	const handleNewDirectory = useCallback(
		(name: string, parentId: number | null) => {
			const newDir: DirectoryDataType = {
				id: Date.now(),
				name,
				notes: [],
				childrens: [],
				parentId,
			};

			setDirectories((prevDirs) => [...prevDirs, newDir]);
		},
		[],
	);

	const handleRenameDirectory = useCallback((newName: string, id: number) => {
		setDirectories((prev) =>
			prev.map((dic) => (dic.id === id ? { ...dic, name: newName } : dic)),
		);
	}, []);

	const handleDeleteDirectory = useCallback((id: number) => {
		setDirectories((prev) => prev.filter((dir) => dir.id !== id));
	}, []);

	return {
		directories,
		handleNewDirectory,
		handleRenameDirectory,
		handleDeleteDirectory,
		editingId,
		startEditing,
		stopEditing,
	};
};
