"use client";

import { SidebarGroupContent } from "@/components/ui/sidebar";
import { useNotesContext } from "@/providers/note-provider";
import { useDirectoriesContext } from "@/providers/directories-provider";
import { DirectoriesList } from "../directories/directories-list";
import { Note } from "./note";

export const NotesList = () => {
	const { notes } = useNotesContext();
	const { directories } = useDirectoriesContext();

	const rootDirectories = directories.filter(dir => !dir.parentId);
	
	const notesWithoutDir = notes.filter((n) => n.directoryId === null);

	return (
		<SidebarGroupContent className="space-y-3 rounded-md pl-3">
			<DirectoriesList directories={rootDirectories} />
			{notesWithoutDir.map((note) => (
				<Note withoutDir={true} key={note.id} note={note} />
			))}
		</SidebarGroupContent>
	);
};