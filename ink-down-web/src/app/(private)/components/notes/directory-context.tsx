import type { DirectoryDataType } from "@/app/@types/note-types";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { ArchiveRestore, ArchiveX } from "lucide-react";

interface DirectoryContextProps {
  dir: DirectoryDataType,
  children: React.ReactNode,
  onRename: () => void,
  onRemove: () => void,
};


export const DirectoryContext = ({ dir, children, onRename,onRemove }: DirectoryContextProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-50">
        <ContextMenuItem inset className="text-zinc-500" onClick={onRename}>
          <ArchiveRestore
          />
          <span className="text-zinc-800">
            Renomear
          </span>
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset className="group text-zinc-500" onClick={onRemove}>
          <ArchiveX className="group-hover:text-red-700" />
          <span className="text-zinc-800">
            Excluir
          </span>
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}