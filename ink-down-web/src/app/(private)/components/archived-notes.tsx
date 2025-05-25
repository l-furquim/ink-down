import type { NoteDataType } from "@/app/@types/note-types"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Archive } from "lucide-react"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { ArchivedNoteContainer } from "./archived-note-container"


interface ArchivedNotesProps {
  data: NoteDataType[]
}

export const ArchivedNotes: React.FC<ArchivedNotesProps> = ({ data }) => {
  return (
    <Collapsible className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger className="w-full pl-0" asChild>
          <SidebarMenuButton className="text-lg w-full">
            <Archive size={40} className="text-indigo-600" />
            Arquivados
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {data.map((note) => (
            <ArchivedNoteContainer
            key={note.id}
            note={note}
            />
          ))}
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>

  )
}