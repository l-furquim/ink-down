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

  const notifications = [
    {
      title: "Jose favoritou sua nota compartilhada !",
      id: 1
    },
    {
      title: "Jose favoritou sua nota compartilhada !",
      id: 2
    },
    {
      title: "Jose favoritou sua nota compartilhada !",
      id: 3
    },
    {
      title: "Jose favoritou sua nota compartilhada !",
      id: 4
    },
  ]

  const notas = [
    {
      name: "Nota excluida",
      id: 1,
      archived: true
    },
    {
      name: "Nota normal",
      id: 9,
      archived: false
    },
    {
      name: "Nota excluida 2",
      id: 129,
      archived: true
    }
  ];
  const dirs = [
    {
      name: "Java",
      id: 1,
      son: {
        name: "Spring",
        id: 190,
        son: null,
        notes: [
          {
            name: "Spring security",
            id: 199,
            archived: false
          }
        ]
      },
      notes: [
        {
          name: "Nota excluida 2",
          id: 2,
          archived: false
        },
        {
          name: "Nota excluida 2",
          id: 3,
          archived: false
        }
      ]
    },
    {
      name: "JavaScript",
      id: 2,
      son: null,
      notes: [
        {
          name: "Nota excluida 2",
          id: 5,
          archived: false
        },
        {
          name: "Nota excluida 2",
          id: 10,
          archived: false
        }
      ]
    },
  ];

  if (data === null) {
    redirect("/login");
  };

  return (
    <SidebarProvider>
      <AppSidebar
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
  )
}