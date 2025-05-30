"use client"

import * as React from "react";
import { Button } from "@/components/ui/button"
import { Notebook, Search } from "lucide-react"
import {
  Calculator,
  Calendar,
  Palette,
  PenBox,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import type { NoteDataType } from "../@types/note-types";
import Link from "next/link";

interface SearchButtonProps {
  notes: NoteDataType[]
}

export const SearchButton = ({ notes }: SearchButtonProps) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "e" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex w-full justify-start space-x-4 bg-indigo-600 hover:bg-indigo-800 hover:cursor-pointer">
        <Search />
        Search
        <p className="text-sm text-muted-foreground w-full flex justify-end">
          <kbd className="pointer-events-none self text-zinc-200 bg-transparent border-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[15px] font-medium">
            <span className="text-sm">
              ⌘e
            </span>
          </kbd>
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite o comando..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado.</CommandEmpty>
          <CommandGroup heading="Notas">
            {notes.map((note) => (
              <CommandItem key={note.id}>
                <Notebook />
                <span>{note.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          {/* <CommandGroup heading="Sugestões">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>*/}
          <CommandSeparator />
          <CommandGroup heading="Configurações">
            <Link onClick={() => setOpen(false)} href={"/account"} className="hover:cursor-pointer">
              <CommandItem>
                <User />
                <span>Conta</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
            </Link>
            <CommandItem>
              <PenBox />
              <span>Editor</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Palette />
              <span>Temas</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
            <Link onClick={() => setOpen(false)} href={"/settings"} className="hover:cursor-pointer">
              <CommandItem>
                <Settings />
                <span>Configurações</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}