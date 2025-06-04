"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const GithubButton = () => {
	return (
		<Button
			variant={"outline"}
			className="text-lg hover:cursor-pointer hover:opacity-80 bg-transparent border-[1px] border-muted-foreground p-3 w-43 h-12 flex items-center space-x-3"
		>
			<Github size={40} />
			Github
		</Button>
	);
};
