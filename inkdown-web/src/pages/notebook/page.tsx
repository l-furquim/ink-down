import { Skeleton } from "@/components/ui/skeleton";
import { getNoteContent } from "@/features/notes/services/note-service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function NotebookPage() {
	const [markDown, setMarkdown] = useState("");
	const [noteTitle, setNoteTitle] = useState("");

	const [searchParams] = useSearchParams();

	const id = searchParams.get("id");

	if (!id) {
		return <h1>Nenhuma nota selecionada</h1>;
	}

	const { data, isLoading } = useQuery({
		queryFn: () => getNoteContent(id),
		queryKey: ["get-note-content", id],
	});

	return (
		<div className="w-full h-full flex flex-col">
			{data && (
				<>
					<div className="pl-12 flex flex-col space-y-5">
						<input
							value={data.title}
							onChange={(e) => setNoteTitle(e.currentTarget.value)}
						/>
					</div>
					<textarea defaultValue={data.content}></textarea>
				</>
			)}
			{isLoading && (
				<Skeleton className="w-full h-full"/>
			)}
		</div>
	);
}
