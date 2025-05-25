import type { UserDataType } from "@/app/@types/user-types"
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu } from "@/components/ui/sidebar"
import { ArchivedNotes } from "./archived/archived-notes"
import type { DirectoryDataType, NoteDataType } from "@/app/@types/note-types"
import { SearchButton } from "@/app/components/search-button"
import type { NotificationDataType } from "@/app/@types/notification-types"
import { Notifications } from "./notifications"
import { Note } from "./notes/note"
import { Directory } from "./notes/directory"


interface AppSidebarProps {
  userData: UserDataType,
  notesWithoutDir: NoteDataType[],
  notifications: NotificationDataType[],
  directores: DirectoryDataType[]
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ userData, notesWithoutDir, directores, notifications }) => {
  console.log("Server side");

  let notesArquived = notesWithoutDir.filter(n => n.archived);
  let notesNotArchived = notesWithoutDir.filter(n => !n.archived);

  return (
    <Sidebar>
      <SidebarHeader className="pt-5">
        <SearchButton />
      </SidebarHeader>
      <SidebarMenu className="w-full flex flex-col space-y-5 pt-10 items-start pl-4">
        <Notifications
          notifications={notifications}
        />
        <ArchivedNotes
          data={notesArquived}
        />
      </SidebarMenu>
      <SidebarGroup>
        <SidebarGroupLabel>Notas</SidebarGroupLabel>
        <SidebarGroupContent className="space-y-3">
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
    </Sidebar>
  )
}