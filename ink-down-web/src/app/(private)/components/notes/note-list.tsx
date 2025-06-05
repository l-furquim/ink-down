"use client";

import { Note } from "./note";
import { SidebarGroupContent } from "@/components/ui/sidebar";
import { useNotesContext } from "@/providers/note-provider";
import { DirectoriesList } from "../directories/directories-list";

export const NotesList = () => {
	const { notes } = useNotesContext();

	return (
		<SidebarGroupContent className="space-y-3 rounded-md pl-3">
			<DirectoriesList />
			{notes.map((note) => (
				<Note withoutDir={true} key={note.id} note={note} />
			))}
		</SidebarGroupContent>
	);
};
