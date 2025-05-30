"use client"

import { useState } from "react";
import type { TagsDataType } from "@/app/@types/note-types";

export const useTagsActions = (initialTags: TagsDataType[]) => {
  const [tags, setTags] = useState<TagsDataType[]>(initialTags);

  const handleNewTag = (name: string) => {
    const newTag: TagsDataType = {
      id: Date.now(), // ID temporário (será substituído pelo ID do servidor)
      name: name,
      colorHex: "#3b82f6",
    }

    setTags(prev => [...prev, newTag]);

    console.log(tags);
  }

  const handleRenameTag = (id: number, newName: string) => {
    setTags(prev => prev.map(tag =>
      tag.id === id ? { ...tag, name: newName } : tag
    ));

    console.log(tags);

    /* fetch(`/api/tags/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: newName })
    }).catch(error => {
      console.error("Erro ao renomear tag:", error);
      // Reverter em caso de erro
      setTags(prev => prev.map(tag =>
        tag.id === id ? { ...tag, name: prev.find(t => t.id === id)?.name || "" } : tag
      ));
    }); */
  };

  const handleChangeColor = (id: number, newColor: string) => {
    setTags(prev => prev.map(tag =>
      tag.id === id ? { ...tag, colorHex: newColor } : tag
    ));

    // API call para atualizar a cor
    fetch(`/api/tags/${id}`, {
      method: "PUT",
      body: JSON.stringify({ colorHex: newColor })
    });
  };

  const handleDeleteTag = (id: number) => {
    setTags(prev => prev.filter(tag => tag.id !== id));

    // API call para deletar
    fetch(`/api/tags/${id}`, { method: "DELETE" });
  };

  return {
    tags,
    handleRenameTag,
    handleChangeColor,
    handleDeleteTag,
    handleNewTag
  };
};