import type { DirectoryDataType } from "@/app/@types/note-types";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuShortcut,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ArchiveRestore, ArchiveX, PenBox } from "lucide-react";
import type { RefObject } from "react";

interface DirectoryContextProps {
	dir: DirectoryDataType;
	children: React.ReactNode;
	onRename: (newName: string, id: number) => void;
	onRemove: (id: number) => void;
	onNewDirectory: (newName: string, id: number) => void;
}

export const DirectoryContext = ({
	dir,
	children,
	onRename,
	onRemove,
	onNewDirectory,
}: DirectoryContextProps) => {
	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-50">
				<ContextMenuItem
					inset
					className="text-zinc-500"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<PenBox />
					<span className="text-zinc-800">Renomear</span>
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset className="group text-zinc-500">
					<ArchiveX className="group-hover:text-red-700" />
					<span className="text-zinc-800">Excluir</span>
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
};
