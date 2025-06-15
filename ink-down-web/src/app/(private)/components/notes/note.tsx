import type { NoteDataType } from "@/app/@types/note-types";
import {
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useNotesContext } from "@/providers/note-provider";
import { NoteContext } from "./note-context";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export const Note = ({
	note,
	withoutDir,
}: { note: NoteDataType; withoutDir: boolean }) => {
	const { handleDeleteNote, handleNewNote, handleRenameNote } =
		useNotesContext();

	const [editing, setEditing] = useState(false);
	const [noteName, setNoteName] = useState(note.title);

	const handleRename = () => {
		handleRenameNote(note.id, noteName);
		setEditing(false);
	};

	return (
		<>
			<NoteContext
				onRemove={handleDeleteNote}
				onRename={() => setEditing(true)}
			>
				{withoutDir ? (
					<SidebarMenuItem className="pt-2 list-none">
						<SidebarMenuButton className="hover:cursor-pointer">
							{editing ? (
								<Input
									className="h-8 px-1 text-sm"
									onChange={(e) => setNoteName(e.currentTarget.value)}
									defaultValue={noteName}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === "Escape") {
											handleRename();
										}
									}}
									autoFocus
									onClick={(e) => e.stopPropagation()}
								/>
							) : (
								<span className="truncate">{note.title}</span>
							)}
						</SidebarMenuButton>
					</SidebarMenuItem>
				) : (
					<SidebarMenuSub>
						<SidebarMenuSubItem>
							{editing ? (
								<Input
									className="h-8 px-1 text-sm"
									onChange={(e) => setNoteName(e.currentTarget.value)}
									defaultValue={noteName}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === "Escape") {
											handleRename();
										}
									}}
									autoFocus
									onClick={(e) => e.stopPropagation()}
								/>
							) : (
								<span className="truncate">{note.title}</span>
							)}
						</SidebarMenuSubItem>
					</SidebarMenuSub>
				)}
			</NoteContext>
		</>
	);
};
