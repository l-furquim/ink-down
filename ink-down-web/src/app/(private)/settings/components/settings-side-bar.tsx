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
import Link from "next/link"

const data = {
  nav: [
    { name: "Editor", icon: Menu },
    { name: "Privacidade", icon: Paintbrush },
    { name: "Idiomas", icon: Globe },
    { name: "Documentação", icon: Paperclip }
  ],
}

export function SettingsSidebar({ option }: { option: string }) {
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
                <Link href={`?option=${item.name}`} key={item.name}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className={`${item.name === option && "bg-indigo-700 text-zinc-200 hover:bg-indigo-800 hover:text-zinc-200"}`}
                    >
                      <item.icon />
                      <span>
                        {item.name}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              ))}
              <ThemeToggle />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
