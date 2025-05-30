import * as React from "react"
import {
  Bell,
  Globe,
  Menu,
  Paperclip,
  Paintbrush,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/app/components/theme-toggle"

const data = {
  nav: [
    { name: "Temas", icon: Bell },
    { name: "Editor", icon: Menu },
    { name: "Privacidade", icon: Paintbrush },
    { name: "Idiomas", icon: Globe },
    { name: "Documentação", icon: Paperclip }
  ],
}

export function SettingsSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1>
          Settings
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.nav.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton>
                    <item.icon />
                    <span>
                      {item.name}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <ThemeToggle/>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
