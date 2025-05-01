"use client";

import { useUserState } from "@/app/dashboard/store";
import { NavMain } from "@/comp/nav-main.jsx";
import { NavProjects } from "@/comp/nav-projects.jsx";
import { NavUser } from "@/comp/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  AdminSidebar,
  DSASidebar,
  FieldStaffSidebar,
  RMSidebar,
  TelecallerSidebar,
} from "@/config/AdminSideBar";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }) {
  const userState = useUserState();
  const pathname = usePathname();
  let roleData = {};

  switch (userState.profile?.role) {
    case "Admin":
      roleData = AdminSidebar;
      break;
    case "rm":
      roleData = RMSidebar;
      break;
    case "DSA":
      roleData = DSASidebar;
      break;
    case "Telecaller":
      roleData = TelecallerSidebar;
      break;
    case "fieldstaff":
      roleData = FieldStaffSidebar;
      break;
    // default:
    //   roleData = FieldStaffSidebar;
    //   break;
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <div className="w-full flex flex-row items-center justify-start p-2">
        <div className="gap-2 flex flex-row justify-start items-center overflow-hidden w-fit">
          <img src="/logo/PAR2.png" alt="Logo" className="w-10 aspect-square" />
          <h2 className="min-w-max">Parv Financial Service</h2>
        </div>
      </div>
      <SidebarContent>
        <NavMain items={roleData.navMain} pathname={pathname} />
        <NavProjects projects={roleData.projects} pathname={pathname} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userState?.profile} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
