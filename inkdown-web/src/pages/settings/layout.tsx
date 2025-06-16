import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function SettingsLayout() {
	return <SidebarProvider> <Outlet/> </ SidebarProvider>;
}
