import type { UserDataType } from "@/app/@types/user-types";
import {
	Sidebar,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenuButton,
	SidebarRail,
} from "@/components/ui/sidebar";
import { ArchivedNotes } from "./archived/archived-notes";
import type {
	DirectoryDataType,
	NoteDataType,
	TagsDataType,
} from "@/app/@types/note-types";
import { SearchButton } from "@/app/components/search-button";
import type { NotificationDataType } from "@/app/@types/notification-types";
import { Notifications } from "./notifications";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronUp } from "lucide-react";
import { TagList } from "./tags/tags-list";
import { NewTagButton } from "./tags/new-tag-button";
import { UserNav } from "./notes/user-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NotesList } from "./notes/note-list";
import { TagsProvider } from "@/providers/tags-provider";

interface AppSidebarProps {
	userData: UserDataType;
	notesWithoutDir: NoteDataType[];
	notifications: NotificationDataType[];
	directores: DirectoryDataType[];
	tags: TagsDataType[];
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
	userData,
	notesWithoutDir,
	directores,
	notifications,
	tags,
}) => {
	const notesArquived = notesWithoutDir.filter((n) => n.archived);
	const notesNotArchived = notesWithoutDir.filter((n) => !n.archived);
	const notes = [
		...notesNotArchived,
		...directores.flatMap((dir) => dir.notes),
	];

	console.log(notes);

	return (
		<Sidebar>
			<SidebarHeader className="pt-5 space-y-2">
				<SearchButton notes={notes} />
				<span className="pl-2 list-none space-y-2">
					<Notifications notifications={notifications} />
					<ArchivedNotes data={notesArquived} />
				</span>
			</SidebarHeader>
			<ScrollArea className="max-h-[calc(110vh-20rem)] ">
				<SidebarGroup>
					<SidebarGroupLabel className="text-indigo-400">
						Notas
					</SidebarGroupLabel>
					<NotesList directories={directores} notes={notesNotArchived} />
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupContent className="space-y-3 rounded-md ">
						<TagsProvider initialTags={tags}>
							<Collapsible className="group">
								<CollapsibleTrigger asChild>
									<SidebarMenuButton className="pl-0">
										<SidebarGroupLabel className="text-indigo-400 flex space-x-3 w-full">
											<span>Tags</span>
											<ChevronUp className="transition-transform duration-200 group-data-[state=open]:rotate-180 hover:cursor-pointer" />
											<NewTagButton />
										</SidebarGroupLabel>
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent className="pl-3">
									<TagList />
								</CollapsibleContent>
							</Collapsible>
						</TagsProvider>
					</SidebarGroupContent>
				</SidebarGroup>
			</ScrollArea>
			<SidebarFooter>
				<UserNav user={userData} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
};
