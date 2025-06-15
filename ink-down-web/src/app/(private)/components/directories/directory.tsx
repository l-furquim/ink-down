import type { DirectoryDataType } from "@/app/@types/note-types";
import { DirectoryContext } from "./directory-context";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { useDirectoriesContext } from "@/providers/directories-provider";

export const Directory = ({ dir }: { dir: DirectoryDataType }) => {
	const [dirOpened, setDirOpened] = useState(false);
	const [dirName, setDirName] = useState(dir.title);

	const {
		handleDeleteDirectory,
		handleNewDirectory,
		handleRenameDirectory,
		editingId,
		startEditing,
		stopEditing,
	} = useDirectoriesContext();

	const handleRename = () => {
		handleRenameDirectory(dirName, dir.id);
		stopEditing();
	};

	const editing = editingId === dir.id;

	return (
		<DirectoryContext
			onNewDirectory={handleNewDirectory}
			onRename={() => startEditing(dir.id)}
			onRemove={() => handleDeleteDirectory(dir.id)}
		>
			<SidebarMenuItem className="list-none">
				<CollapsibleTrigger asChild>
					<SidebarMenuButton onClick={() => setDirOpened(!dirOpened)}>
						{editing ? (
							<Input
								className="h-8 px-1 text-sm"
								onChange={(e) => setDirName(e.currentTarget.value)}
								defaultValue={dirName}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === "Escape") {
										handleRename();
									}
								}}
								autoFocus
								onClick={(e) => e.stopPropagation()}
							/>
						) : (
							<>
								<span className="truncate">{dirName}</span>
								<ChevronUp
									className={`transition-transform ${dirOpened ? "rotate-180" : ""} duration-200`}
								/>
							</>
						)}
					</SidebarMenuButton>
				</CollapsibleTrigger>
			</SidebarMenuItem>
		</DirectoryContext>
	);
};
