import type { NoteDataType } from "@/app/@types/note-types"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Archive } from "lucide-react"

interface ArchivedNotesProps {
  data: NoteDataType[]
}

export const ArchivedNotes: React.FC<ArchivedNotesProps> = ({ data }) => {
  return (
    <Collapsible defaultOpen >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <Archive size={20} className="text-indigo-600" />
            Arquivados
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {data.map((note) => (
            <SidebarMenuSub key={note.id}>
              <SidebarMenuSubItem>
                {note.name}
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          ))}
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>

  )
}