"use client";

import type { DirectoryDataType } from "@/app/@types/note-types";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { SidebarMenuSubButton } from "@/components/ui/sidebar";
import { Note } from "../notes/note";
import { useRouter } from "next/navigation";
import { Directory } from "./directory";

export const DirectoriesList = ({
	directories,
}: {
	directories: DirectoryDataType[];
}) => {
	const router = useRouter();

	const handleSelectNote = (url: string) => {
		router.push(url);
	};

	const handleNewDir = () => {};

	console.log(directories);

	return (
		<>
			{directories.map((dir) => (
				<Collapsible
					key={dir.id}
					className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				>
					<Directory dir={dir} />
					<CollapsibleContent className="pl-4 space-y-3">
						{dir.childrens && dir.childrens.length > 0 && (
							<DirectoriesList directories={dir.childrens} />
						)}
						{dir.notes.map((note) => (
							<SidebarMenuSubButton
								onClick={() =>
									handleSelectNote(`?note=${note.title}&id=${note.id}`)
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
