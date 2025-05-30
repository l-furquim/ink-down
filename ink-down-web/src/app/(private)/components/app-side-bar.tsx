import type { UserDataType } from "@/app/@types/user-types"
import { Sidebar, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar"
import { ArchivedNotes } from "./archived/archived-notes"
import type { DirectoryDataType, NoteDataType, TagsDataType } from "@/app/@types/note-types"
import { SearchButton } from "@/app/components/search-button"
import type { NotificationDataType } from "@/app/@types/notification-types"
import { Notifications } from "./notifications"
import { Note } from "./notes/note"
import { Directory } from "./notes/directory"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronUp, PlusSquare } from "lucide-react"
import { TagList } from "./notes/tags-list"
import { NewTagButton } from "./notes/new-tag-button"
import { UserNav } from "./notes/user-nav"
import { ScrollArea } from "@/components/ui/scroll-area"


interface AppSidebarProps {
  userData: UserDataType,
  notesWithoutDir: NoteDataType[],
  notifications: NotificationDataType[],
  directores: DirectoryDataType[],
  tags: TagsDataType[],
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  userData, notesWithoutDir, directores,
  notifications, tags,
}) => {
  console.log("Server side");

  let notesArquived = notesWithoutDir.filter(n => n.archived);
  let notesNotArchived = notesWithoutDir.filter(n => !n.archived);

  return (
    <Sidebar
    >
      <SidebarHeader className="pt-5 space-y-2">
        <SearchButton
        notes={notesNotArchived}
        />
        <Notifications
          notifications={notifications}
        />
        <ArchivedNotes
          data={notesArquived}
        />
      </SidebarHeader>
      <ScrollArea className="max-h-[calc(110vh-20rem)] ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-indigo-600">Notas</SidebarGroupLabel>
          <SidebarGroupContent className="space-y-3 rounded-md pl-3">
            {directores.map((dir) => (
              <Directory
                key={dir.id}
                dir={dir}
              />
            ))}
            {notesNotArchived.map((note) => (
              <Note
                withoutDir={true}
                key={note.id}
                note={note}
              />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent className="space-y-3 rounded-md ">
            <Collapsible className="group">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="pl-0">
                  <SidebarGroupLabel className="text-indigo-600 flex space-x-3">
                    <span>
                      Tags
                    </span>
                    <NewTagButton
                      tags={tags}
                    />
                    <ChevronUp className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </SidebarGroupLabel>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-3">
                <TagList
                  initialTags={tags}
                />
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroupContent>
        </SidebarGroup>
      </ScrollArea>
      <SidebarFooter>
        <UserNav
          user={userData}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}