import {
	Sidebar,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarRail,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Notifications } from "./notifications";
import { UserNav } from "./user-nav";
import { useQuery } from "@tanstack/react-query";
import { getAuthorDirectoriesWithChildrenNotes, updateDirectoryTitle } from "@/features/notes/services/note-service";
import { notifications, userData } from "@/data";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { DirectoryTree } from "./directories/directory-tree";
import type { DirectoryWithChildren } from "@/features/notes/types/directory-types";
import type { NotificationDataType } from "@/features/notification/types/notification-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { renameDirectory } from "@/features/notes/services/note-service";
import type { NoteDataType } from "@/features/notes/types/note-types";
import { SearchButton } from "@/components/search-button";
import { ArchivedNotes } from "./archived/archived-notes";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export const AppSidebar = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["get-author-directories"],
		queryFn: getAuthorDirectoriesWithChildrenNotes,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	const renameMutation = useMutation({
		mutationFn: ({ id, newName }: { id: number; newName: string }) =>
			renameDirectory(newName, id),
		onSuccess: (_, variables) => {
			queryClient.setQueryData(["get-author-directories"],
				(oldData: { directories: DirectoryWithChildren[]; notes: NoteDataType[] } | undefined) => {
					if (!oldData) return oldData;

					return {
						...oldData,
						directories: updateDirectoryTitle(oldData.directories, variables.id, variables.newName),
					};
				}
			);
		},
		onError: (error) => {
			console.error("Failed to rename directory:", error);
			queryClient.invalidateQueries({ queryKey: ["get-author-directories"] });
		}
	});

	return (
		<Sidebar>
			{isLoading && (
				<div className="space-y-2 w-full pt-20 flex items-center flex-col">
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[80%]" />
				</div>
			)}
			{data && (
				<>
					<SidebarHeader className="pt-5 space-y-2">
						<div className="flex space-x-2 items-center">
							<SidebarTrigger className="w-8 h-8" />
							<Button variant={"ghost"} className={cn("size-7")}>
								<Settings />
							</Button>
						</div>
						<SearchButton notes={
							[
								...data.notes.filter((n) => !n.archived),
								...data.directories.flatMap((dir) => dir.notes)
							]
						} />
						<span className="pl-2 list-none space-y-2">
							<Notifications notifications={notifications as NotificationDataType[]} />
							<ArchivedNotes data={data.notes.filter((n) => n.archived)} />
						</span>
					</SidebarHeader>
					<SidebarGroup>
						<SidebarGroupContent>

							{data && (
								<DirectoryTree
									onNoteSelect={(id: string) => navigate(`/note?id=${id}`)}
									directories={data.directories}
									aloneNotes={data.notes}
									onRenameDirectory={renameMutation.mutate}
								/>
							)}
						</SidebarGroupContent>
					</SidebarGroup>
				</>
			)}
			<SidebarFooter>
				<UserNav user={userData} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar >
	);
};