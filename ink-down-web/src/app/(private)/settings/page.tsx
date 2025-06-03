import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SettingsSidebar } from "./components/settings-side-bar";

export default function SettingsPage({
	searchParams,
}: { searchParams: { option: string } }) {
	const option = searchParams.option;

	return (
		<>
			<SettingsSidebar option={option} />
			<main className="flex h-[480px] flex-1 flex-col overflow-hidden">
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>{option}</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className="px-4">
					<h1>settings</h1>
				</div>
			</main>
		</>
	);
}
