import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-side-bar";
import { redirect } from "next/navigation";

export default function NotebookLayout({
	children,
}: { children: React.ReactNode }) {
	const data = {
		name: "Lucas",
		email: "furquimmsw@gmail.com",
		avatarUrl: "https://github.com/l-furquim.png",
	};

	const notifications = [
		{
			title: "Jose favoritou sua nota compartilhada !",
			id: 1,
		},
		{
			title: "Jose favoritou sua nota compartilhada !",
			id: 2,
		},
		{
			title: "Jose favoritou sua nota compartilhada !",
			id: 3,
		},
		{
			title: "Jose favoritou sua nota compartilhada !",
			id: 4,
		},
	];

	const notas = [
		{
			name: "Nota excluida",
			id: 1,
			archived: true,
		},
		{
			name: "Nota normal",
			id: 9,
			archived: false,
		},
		{
			name: "Nota excluida 2",
			id: 129,
			archived: true,
		},
	];
	const dirs = [
		{
			name: "Java",
			id: 1,
			parentId: null,
			childrens: [
				{
					name: "Spring",
					id: 191,
					parentId: 9999,
					childrens: null,
					notes: [
						{
							name: "Spring security",
							id: 199,
							archived: false,
						},
					],
				},
				{
					name: "Spring",
					id: 192,
					parentId: 10000,
					childrens: null,
					notes: [
						{
							name: "Spring security",
							id: 777,
							archived: false,
						},
					],
				},
				{
					name: "Spring",
					id: 193,
					parentId: 190190,
					childrens: null,
					notes: [
						{
							name: "Spring security",
							id: 222,
							archived: false,
						},
					],
				},
				{
					name: "Spring",
					id: 194,
					parentId: 121,
					childrens: [
						{
							name: "Spring",
							id: 194,
							parentId: 121,
							childrens: null,
							notes: [
								{
									name: "Spring security",
									id: 455454,
									archived: false,
								},
							],
						},
					],
					notes: [
						{
							name: "Spring security",
							id: 455454,
							archived: false,
						},
					],
				},
			],
			notes: [
				{
					name: "Nota excluida 2",
					id: 2,
					archived: false,
				},
				{
					name: "Nota excluida 2",
					id: 3,
					archived: false,
				},
			],
		},

		{
			name: "JavaScript",
			id: 2,
			parentId: null,
			childrens: [],
			notes: [
				{
					name: "Nota excluida 2",
					id: 5,
					archived: false,
				},
				{
					name: "Nota excluida 2",
					id: 10,
					archived: false,
				},
			],
		},
	];

	const tags = [
		{ id: 1, name: "JavaScript", colorHex: "#f7df1e" },
		{ id: 2, name: "Python", colorHex: "#3572A5" },
		{ id: 3, name: "Java", colorHex: "#b07219" },
		{ id: 4, name: "C++", colorHex: "#00599C" },
		{ id: 5, name: "Go", colorHex: "#00ADD8" },
		{ id: 6, name: "Rust", colorHex: "#DEA584" },
		{ id: 7, name: "TypeScript", colorHex: "#3178c6" },
		{ id: 8, name: "Kotlin", colorHex: "#A97BFF" },
		{ id: 9, name: "Ruby", colorHex: "#CC342D" },
		{ id: 10, name: "Swift", colorHex: "#FFAC45" },
	];

	if (data === null) {
		redirect("/login");
	}

	return (
		<SidebarProvider>
			<AppSidebar
				tags={tags}
				notifications={notifications}
				notesWithoutDir={notas}
				directores={dirs}
				userData={data}
			/>
			<main>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
