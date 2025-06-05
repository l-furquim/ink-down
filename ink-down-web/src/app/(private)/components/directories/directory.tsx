import type { DirectoryDataType } from "@/app/@types/note-types";
import { DirectoryContext } from "./directory-context";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useState } from "react";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ChevronUp } from "lucide-react";

export const Directory = ({
	dir,
	handleDeleteDirectory,
	handleNewDirectory,
	handleRenameDirectory,
	startEditing,
	stopEditing,
	editingId,
}: {
	dir: DirectoryDataType;
	handleDeleteDirectory: (id: number) => void;
	handleNewDirectory: (name: string, parentId: number | null) => void;
	handleRenameDirectory: (newName: string, id: number) => void;
	startEditing: (id: number) => void;
	stopEditing: () => void;
	editingId: number | null;
}) => {
	const [dirOpened, setDirOpened] = useState(false);

	const editing = editingId === dir.id;

	return (
		<DirectoryContext
			dir={dir}
			onNewDirectory={handleNewDirectory}
			onRename={() => startEditing(dir.id)}
			onRemove={handleDeleteDirectory}
		>
			<SidebarMenuItem className="list-none">
				<CollapsibleTrigger asChild>
					<SidebarMenuButton onClick={() => setDirOpened(!dirOpened)}>
						{editing ? (
							<Input
								className="h-6 px-1 text-sm"
								defaultValue={dir.name}
								autoFocus
							/>
						) : (
							<>
								<span className="truncate">{dir.name}</span>
								<ChevronUp
									className={`transition-transform ${dirOpened && "rotate-180 duration-200"}`}
								/>
							</>
						)}
					</SidebarMenuButton>
				</CollapsibleTrigger>
			</SidebarMenuItem>
		</DirectoryContext>
	);
};
