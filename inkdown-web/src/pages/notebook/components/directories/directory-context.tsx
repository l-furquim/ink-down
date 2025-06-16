import type { DirectoryDataType } from "@/app/@types/note-types";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuShortcut,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ArchiveX, PenBox, Folder } from "lucide-react";
import { NewDirectoryButton } from "./new-directory-button";

interface DirectoryContextProps {
	children: React.ReactNode;
	onRename: () => void;
	onRemove: (id: number) => void;
	onNewDirectory: () => void;
}

export const DirectoryContext = ({
	children,
	onRename,
	onRemove,
	onNewDirectory,
}: DirectoryContextProps) => {
	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-50  text-zinc-800 dark:text-zinc-200">
				<ContextMenuItem inset>
					<NewDirectoryButton />
					<ContextMenuShortcut>⌘*</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem
					inset
					onClick={(e) => {
						onRename();
						e.stopPropagation();
					}}
				>
					<PenBox />
					<span className="">Renomear</span>
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset className="group " onClick={() => onRemove}>
					<ArchiveX className="group-hover:text-red-700" />
					<span className="">Excluir</span>
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
};
