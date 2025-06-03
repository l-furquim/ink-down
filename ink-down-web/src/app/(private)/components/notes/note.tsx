import type { NoteDataType } from "@/app/@types/note-types";
import {
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export const Note = ({
	note,
	withoutDir,
}: { note: NoteDataType; withoutDir: boolean }) => {
	return (
		<>
			{withoutDir ? (
				<SidebarMenuItem className="pt-2 list-none">
					<SidebarMenuButton className="hover:cursor-pointer">
						{note.name}
					</SidebarMenuButton>
				</SidebarMenuItem>
			) : (
				<SidebarMenuSub>
					<SidebarMenuSubItem>{note.name}</SidebarMenuSubItem>
				</SidebarMenuSub>
			)}
		</>
	);
};
