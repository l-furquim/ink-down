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

  const notas = [
     {
        name: "Nota excluida",
        id: 1,
        archived: true
      },
      {
        name: "Nota normal",
        id: 2,
        archived: false
      }
  ];

  if (data === null) {
    redirect("/login");
  };

  return (
    <SidebarProvider>
      <AppSidebar
      notes={notas}
      userData={data}  
      />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}