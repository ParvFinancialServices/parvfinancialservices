"use client";

import { useAdminState } from "@/app/dashboard/store";
import { NavMain } from "@/components/nav-main.jsx";
import { NavProjects } from "@/components/nav-projects.jsx";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { AdminSidebar, DSASidebar, FieldStaffSidebar, RMSidebar, TelecallerSidebar } from "@/config/AdminSideBar";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";

export function AppSidebar({ ...props }) {
  const AdminState = useAdminState();
  const pathname = usePathname();
  const [roleData, setRoleData] = useState(null);
  console.log(roleData);
  
  const { profile } = AdminState;
  console.log(AdminState);
  
  //  switch (profile?.role) {
  //   case "admin":
  //     setRoleData(AdminSidebar);
  //     break;
  //   case "rm":
  //     setRoleData(RMSidebar);
  //     break;
  //   case "dsa":
  //     setRoleData(DSASidebar);
  //     break;
  //   case "telecaller":
  //     setRoleData(TelecallerSidebar);
  //     break;
  //   case "fieldstaff":
  //     setRoleData(FieldStaffSidebar);
  //     break;
  //   default:
  //     setRoleData(FieldStaffSidebar);
  //     break;
  // }
  useEffect(() => {
    switch (profile?.role) {
      case "admin":
        setRoleData(AdminSidebar);
        break;
      case "rm":
        setRoleData(RMSidebar);
        break;
      case "dsa":
        setRoleData(DSASidebar);
        break;
      case "telecaller":
        setRoleData(TelecallerSidebar);
        break;
      case "fieldstaff":
        setRoleData(FieldStaffSidebar);
        break;
      default:
        setRoleData(FieldStaffSidebar);
        break;
    }
  }, [profile]);

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
        <NavUser user={roleData?.profile} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
