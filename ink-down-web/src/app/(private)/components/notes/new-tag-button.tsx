"use client"

import type { TagsDataType } from "@/app/@types/note-types";
import { useTagsActions } from "@/hooks/use-tags";
import { PlusSquare } from "lucide-react";

export const NewTagButton = ({ tags }: { tags: TagsDataType[] }) => {
  const {
    handleNewTag
  } = useTagsActions(tags);

  return (

    <PlusSquare
      onClick={(e) => {
        handleNewTag("Nova tag");
        e.stopPropagation();
      }}
    />
  )
}