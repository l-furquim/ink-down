"use client"

import type { DirectoryDataType, NoteDataType } from "@/app/@types/note-types"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Note } from "./note"
import { DirectoryContext } from "./directory-context"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"


interface DirectoryProps {
  dir: DirectoryDataType
};

export const Directory = ({ dir }: DirectoryProps) => {
  const [editing, setEditing] = useState(false);
  const [remove, setRemove] = useState(false);

  const [name, setName] = useState(dir.name);
  const [dirOpened, setDirOpened] = useState(false);

  console.log("ALo ?");
  console.log(editing);

  const handleRename = () => {
    setEditing(true)
  }

  const handleRenameSubmit = () => {
    dir.name = name
    setEditing(false)
  }

  const onRemove = () => {
    setRemove(true);
  }

  return (
    <>
      {!remove ? (
        <Collapsible key={dir.id} className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
          <DirectoryContext dir={dir} onRename={handleRename} onRemove={onRemove}>
            <SidebarMenuItem className="list-none">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton onClick={() => setDirOpened(!dirOpened)}>
                  {editing ? (
                    <Input
                      className="h-6 px-1 text-sm"
                      value={"cucucuc"}
                      autoFocus
                      onBlur={handleRenameSubmit}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    <>
                      {name}
                      <ChevronUp
                        className={`transition-transform ${dirOpened && "rotate-180 duration-200"}`}
                      />
                    </>
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </DirectoryContext>
          <CollapsibleContent className="pl-4 space-y-3 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            {dir.childrens && (
              dir.childrens.map((children) => (
                <Directory
                  key={children.id}
                  dir={children}
                />
              ))
            )}
            {dir.notes.map((note) => (
              <Link href={`?note=${note.name}&id=${note.id}`} key={note.id}>
                <SidebarMenuSubButton className="list-none hover:cursor-pointer">
                  <Note
                    withoutDir={false}
                    note={note}
                  />
                </SidebarMenuSubButton>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <span>

        </span>
      )}
    </>
  )
}