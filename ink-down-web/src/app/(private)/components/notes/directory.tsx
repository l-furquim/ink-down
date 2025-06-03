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
import { Note } from "./note";
import { DirectoryContext } from "./directory-context";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface DirectoryProps {
	dir: DirectoryDataType;
}

export const Directory = ({ dir }: DirectoryProps) => {
	const [editing, setEditing] = useState(false);
	const [remove, setRemove] = useState(false);
	const router = useRouter();
	const [name, setName] = useState(dir.name);
	const [dirOpened, setDirOpened] = useState(false);
	const nameRef = useRef<HTMLInputElement>(null);

	console.log("ALo ?");
	console.log(editing);

	const handleRename = () => {
		setEditing(true);
	};

	const handleSelectNote = (url: string) => {
		router.push(url);
	};

	const handleRenameSubmit = () => {
		dir.name = name;
		setEditing(false);
	};

	const onRemove = () => {
		setRemove(true);
	};

	return (
		<>
			{!remove ? (
				<Collapsible
					key={dir.id}
					className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				>
					<DirectoryContext
						dir={dir}
						onRename={handleRename}
						onRemove={onRemove}
					>
						<SidebarMenuItem className="list-none">
							<CollapsibleTrigger asChild>
								<SidebarMenuButton onClick={() => setDirOpened(!dirOpened)}>
									{editing ? (
										<Input
											ref={nameRef}
											className="h-6 px-1 text-sm"
											value={"cucucuc"}
											autoFocus
											onBlur={handleRenameSubmit}
											onChange={(e) => setName(e.target.value)}
										/>
									) : (
										<>
											{name}
											<ChevronUp
												className={`transition-transform ${dirOpened && "rotate-180 duration-200"}`}
											/>
										</>
									)}
								</SidebarMenuButton>
							</CollapsibleTrigger>
						</SidebarMenuItem>
					</DirectoryContext>
					<CollapsibleContent className="pl-4 space-y-3 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
						{dir.childrens &&
							dir.childrens.map((children) => (
								<Directory key={children.id} dir={children} />
							))}
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
			) : (
				<span></span>
			)}
		</>
	);
};
