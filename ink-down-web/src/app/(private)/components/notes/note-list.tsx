import type { DirectoryDataType, NoteDataType } from "@/app/@types/note-types";
import { Note } from "./note";
import { SidebarGroupContent } from "@/components/ui/sidebar";
import { Directory } from "./directory";

export const NotesList = ({
	notes,
	directories,
}: { notes: NoteDataType[]; directories: DirectoryDataType[] }) => {
	return (
		<SidebarGroupContent className="space-y-3 rounded-md pl-3">
			{directories.map((dir) => (
				<Directory key={dir.id} dir={dir} />
			))}
			{notes.map((note) => (
				<Note withoutDir={true} key={note.id} note={note} />
			))}
		</SidebarGroupContent>
	);
};
