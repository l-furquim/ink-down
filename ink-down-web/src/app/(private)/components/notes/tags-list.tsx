"use client"
import type { TagsDataType } from "@/app/@types/note-types";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { useTagsActions } from "../../../../hooks/use-tags";
import { useCallback } from "react";
import { TagContext } from "./tag-context";
import { ScrollArea } from "@/components/ui/scroll-area";

export const TagList = ({ initialTags }: { initialTags: TagsDataType[] }) => {
  const {
    tags,
    handleRenameTag,
    handleChangeColor,
    handleDeleteTag
  } = useTagsActions(initialTags);

  // Callback que previne rerender da parte do react.
  const memoizedRename = useCallback(
    (id: number, newName: string) => handleRenameTag(id, newName),
    [handleRenameTag]
  );

  return (
    <ScrollArea className="h-[800px]">
      {tags.map((tag) => (
        <div key={tag.id} className="context-menu-no-close">
          <TagContext
            tag={tag}
            onRename={memoizedRename}
            onChangeColor={handleChangeColor}
            onDelete={handleDeleteTag}
          >
            <SidebarMenuItem className="list-none">
              <SidebarMenuButton>
                <div
                  style={{ backgroundColor: tag.colorHex }}
                  className="w-5 h-5 border-muted-foreground rounded-md border-[1px]"
                />
                {tag.name}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </TagContext>
        </div>
      ))}
    </ScrollArea>
  );
};