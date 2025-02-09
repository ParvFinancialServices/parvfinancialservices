"use client";

import { useAdminState } from "@/app/dashboard/store";
import { NavMain } from "@/components/nav-main.jsx";
import { NavProjects } from "@/components/nav-projects.jsx";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AdminSidebar } from "@/config/AdminSideBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }) {
  const AdminState = useAdminState();
  const pathname = usePathname();
  console.log(props);

  return (
    <Sidebar collapsible="icon" {...props}>
      <div className="w-full flex flex-row items-center justify-start p-2">
        <div className="gap-2 flex flex-row justify-start items-center overflow-hidden w-fit">
          <img src="/logo/PAR2.png" alt="Logo" className="w-10 aspect-square" />
          <h2 className="min-w-max">Parv Financial Service</h2>
        </div>
      </div>
      <SidebarContent>
        <NavMain items={AdminSidebar.navMain} pathname={pathname} />
        <NavProjects projects={AdminSidebar.projects} pathname={pathname} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={AdminState?.profile} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
