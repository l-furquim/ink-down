import type { NotificationDataType } from "@/app/@types/notification-types"
import { SidebarMenuItem } from "@/components/ui/sidebar"
import { Bell, BellDot } from "lucide-react"
import type React from "react"

interface NotificationsProps {
  notifications: NotificationDataType[]
};

export const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <SidebarMenuItem className="flex items-center gap-2 text-lg">
      {notifications.length === 0  ? (
        <Bell size={18} className="text-indigo-600" />
      ): <BellDot size={18} className="text-indigo-600" />}
      Atividades
    </SidebarMenuItem>
  )
} 