import type { UserDataType } from "@/app/@types/user-types"
import { KeyIndicator } from "@/app/components/key-indicator"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { Archive, Bell, BellDot, Search } from "lucide-react"
import { ArchivedNotes } from "./archived-notes"
import type { NoteDataType } from "@/app/@types/note-types"


interface AppSidebarProps {
  data: UserDataType
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ data }) => {
  console.log("Server side");

  const notasArquivadas: NoteDataType[] = [
    {
        name: "Nota excluida 1",
        id: 1
      },
      {
        name: "Nota excluida 2",
        id: 2
      }
  ]

  return (
    <Sidebar>
      <SidebarHeader className="pt-5">
        <Button className="flex w-full justify-start space-x-4 bg-indigo-600 hover:bg-indigo-800 hover:cursor-pointer">
          <Search />
          Search
          <span className="text-zinc-200 opacity-80 text-xs ml-auto">
            Ctrl + t
          </span>
        </Button>
      </SidebarHeader>
      <SidebarMenu className="w-full flex flex-col space-y-5 pt-10 items-start pl-4">
        <SidebarMenuItem className="flex items-center gap-2">
          <BellDot size={20} className="text-indigo-600"/>
          Atividades
        </SidebarMenuItem>
        <ArchivedNotes
        data={notasArquivadas}
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