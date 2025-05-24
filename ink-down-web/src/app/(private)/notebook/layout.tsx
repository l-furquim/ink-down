import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-side-bar";
import { redirect } from "next/navigation";

export default function NotebookLayout({
  children
}: { children: React.ReactNode }) {
  const data = {
    name: "Lucas",
    email: "furquimmsw@gmail.com",
    avatarUrl: "https://github.com/l-furquim.png"
  };

  if (data === null) {
    redirect("/login");
  };

  return (
    <SidebarProvider>
      <AppSidebar
      data={data}      
      />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}