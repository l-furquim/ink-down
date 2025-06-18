import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SettingsSidebar } from "./components/settings-side-bar";
import { useSearchParams } from "react-router-dom";
import { ModeToggle } from "@/components/theme-toggle";


export default function SettingsPage() {

	const [searchParams] = useSearchParams();
	const option = searchParams.get("option");

	return (
		<>
			<SettingsSidebar option={option !== null ? option : "Editor"} />
			<main className="flex h-[480px] flex-1 flex-col overflow-hidden">
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="/settings">Configurações</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>{option}</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className="w-full pt-10 px-4 space-y-5">
					<h1 className="text-3xl text-indigo-700 font-bold">{option}</h1>
					<hr className="h-2 w-full" />
					{option === "Temas" && (
						<div className="space-y-10 flex flex-col">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in saepe corrupti at dignissimos magni quisquam vel necessitatibus nulla amet nam autem, doloribus delectus. Totam minus earum maiores ipsum corporis?
							</p>
							<div className="space-y-2">
								<h3 className="font-semibold">Meus temas</h3>
								<span className="w-full flex justify-between">
									<p className="text-muted-foreground text-sm">
										Baixe temass da comunidade ou use os temas padrões do ink down.
									</p>
									<ModeToggle />
								</span>
							</div>
						</div>
					)}

				</div>
			</main>
		</>
	);
}
