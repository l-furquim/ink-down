"use client";

import type { DirectoryDataType } from "@/app/@types/note-types";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { ChevronUp } from "lucide-react";
import { Note } from "../notes/note";
import { DirectoryContext } from "./directory-context";
import { useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useDirectoriesContext } from "@/providers/directories-provider";
import { Directory } from "./directory";

interface DirectoryProps {
	dir: DirectoryDataType;
}

export const DirectoriesList = ({
	childrenDirectories,
}: {
	childrenDirectories?: DirectoryDataType[];
}) => {
	const {
		directories,
		handleDeleteDirectory,
		handleNewDirectory,
		handleRenameDirectory,
		editingId,
		startEditing,
		stopEditing,
	} = useDirectoriesContext();

	useMemo(
		() => directories.map((dir) => <Collapsible key={dir.id}>...</Collapsible>),
		[directories],
	);

	const router = useRouter();

	const handleSelectNote = (url: string) => {
		router.push(url);
	};

	return (
		<>
			{directories.map((dir) => (
				<Collapsible
					key={dir.id}
					className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				>
					<Directory
						editingId={editingId}
						startEditing={startEditing}
						stopEditing={stopEditing}
						handleDeleteDirectory={handleDeleteDirectory}
						handleNewDirectory={handleNewDirectory}
						handleRenameDirectory={handleRenameDirectory}
						dir={dir}
					/>
					<CollapsibleContent className="pl-4 space-y-3">
						{dir.childrens && (
							<DirectoriesList childrenDirectories={dir.childrens} />
						)}
						{dir.notes.map((note) => (
							<SidebarMenuSubButton
								onClick={() =>
									handleSelectNote(`?note=${note.name}&id=${note.id}`)
								}
								key={note.id}
								className="list-none hover:cursor-pointer"
							>
								<Note withoutDir={false} note={note} />
							</SidebarMenuSubButton>
						))}
					</CollapsibleContent>
				</Collapsible>
			))}
		</>
	);
};
