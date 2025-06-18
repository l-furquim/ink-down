import { api } from "@/lib/api";
import type { DirectoryWithChildren, GetAuthorDirectoriesResponse } from "../types/directory-types";
import type { AxiosError } from "axios";
import { type GetNoteContentResponse } from "../types/note-types";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMzlkYWZiNC0yZWZkLTQxMmUtYmRjYS04OGZhMTU0MjMxNDEiLCJpYXQiOjE3NTAyNzEzNjQsImV4cCI6MTc1MDI3ODU2NH0.6Qyw6t7XdogMAr1v3ypMvxvM7RPbQp5falKgWHjvHd0";

export function updateDirectoryTitle(dirs: DirectoryWithChildren[], id: number, newName: string): DirectoryWithChildren[] {
  return dirs.map(dir => {
    if (dir.id === id) {
      return { ...dir, title: newName };
    }
    if (dir.childrens && dir.childrens.length > 0) {
      return { ...dir, childrens: updateDirectoryTitle(dir.childrens, id, newName) };
    }
    return dir;
  });
}

export async function getNoteContent (noteId: string) {
  const response = await api.get<GetNoteContentResponse>(`notes/note?noteId=${noteId}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  const { note } = response.data;
  
  return note === undefined ? null : note;
}

export async function getAuthorDirectoriesWithChildrenNotes() {

  try{
    const response = await api.get<GetAuthorDirectoriesResponse>("directories/author", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const { directories, notes } = response.data;

    console.log(directories);

    return {
      directories,
      notes,
    };
  } catch(err) {
    const axiosError = err as AxiosError;
    
    console.log(axiosError);

    throw new Error(axiosError.status ? String(axiosError.status) : "500");
  }
}

export async function renameDirectory(newName: string, id: number){
  try {
    const response = await api.put("directories/rename", {
      directoryId: id,
      newTitle: newName,
    }, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log(response)
  } catch(err) {
    const axiosError = err as AxiosError;

    console.log(axiosError);

    throw new Error(axiosError.response?.data as string);
  }
}