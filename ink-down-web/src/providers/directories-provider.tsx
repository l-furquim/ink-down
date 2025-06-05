"use client";

import type { DirectoryDataType } from "@/app/@types/note-types";
import { useDirectoriesActions } from "@/hooks/use-directories";
import { createContext, useContext } from "react";

type DirectoryContextType = {
	directories: DirectoryDataType[];
	handleNewDirectory: (name: string, parentId: number | null) => void;
	handleRenameDirectory: (newName: string, id: number) => void;
	handleDeleteDirectory: (id: number) => void;
	startEditing: (id: number) => void;
	stopEditing: () => void;
	editingId: number | null;
};

const DirectoriesContext = createContext<DirectoryContextType | undefined>(
	undefined,
);

export const DirectoryProvider = ({
	initialDirectories,
	children,
}: {
	initialDirectories: DirectoryDataType[];
	children: React.ReactNode;
}) => {
	const {
		directories,
		handleDeleteDirectory,
		handleNewDirectory,
		handleRenameDirectory,
		editingId,
		startEditing,
		stopEditing,
	} = useDirectoriesActions(initialDirectories);

	return (
		<DirectoriesContext.Provider
			value={{
				directories,
				handleDeleteDirectory,
				handleNewDirectory,
				handleRenameDirectory,
				startEditing,
				stopEditing,
				editingId,
			}}
		>
			{children}
		</DirectoriesContext.Provider>
	);
};

export const useDirectoriesContext = () => {
	const ctx = useContext(DirectoriesContext);
	if (!ctx)
		throw new Error(
			"useDirectoriesContext needs to be used inside of a provider",
		);
	return ctx;
};
