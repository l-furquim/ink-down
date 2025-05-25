import type { DirectoryDataType, NoteDataType } from "@/app/@types/note-types"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Note } from "./note"


interface DirectoryProps {
  dir: DirectoryDataType
};

export const Directory = ({ dir }: DirectoryProps) => {
  return (
    <Collapsible className="group/collapsible">
      <SidebarMenuItem className="list-none">
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {dir.name}
            <ChevronUp
            className="data-[state=open]:rotate-180 transition-transform duration-200"
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
      </SidebarMenuItem>
      <CollapsibleContent className="pl-4 space-y-3 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {dir.son && (
          <Directory
            dir={dir.son}
          />
        )}
        {dir.notes.map((note) => (
          <SidebarMenuSubButton className="list-none hover:cursor-pointer" key={note.id}>
            <Note
              withoutDir={false}
              note={note}
            />
          </SidebarMenuSubButton>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}