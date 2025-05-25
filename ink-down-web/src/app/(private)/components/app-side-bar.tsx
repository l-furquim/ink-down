import type { UserDataType } from "@/app/@types/user-types"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { BellDot } from "lucide-react"
import { ArchivedNotes } from "./archived-notes"
import type { NoteDataType } from "@/app/@types/note-types"
import { SearchButton } from "@/app/components/search-button"
import type { NotificationDataType } from "@/app/@types/notification-types"
import { Notifications } from "./notifications"


interface AppSidebarProps {
  userData: UserDataType,
  notes: NoteDataType[],
  notifications: NotificationDataType[]
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ userData, notes, notifications }) => {
  console.log("Server side");

  return (
    <Sidebar>
      <SidebarHeader className="pt-5">
        <SearchButton/>
      </SidebarHeader>
      <SidebarMenu className="w-full flex flex-col space-y-5 pt-10 items-start pl-4">
        <Notifications
        notifications={notifications}
        />
        <ArchivedNotes
        data={notes.filter((n) => n.archived)}
        />
      </SidebarMenu>
      <SidebarGroup>
        <SidebarGroupLabel>Notas</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <Collapsible defaultOpen >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    CU
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          CU
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            dentro dentro
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  )
}