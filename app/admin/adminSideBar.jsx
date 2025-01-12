"use client"

// import * as React from "react"
// import {
//   AudioWaveform,
//   BookOpen,
//   Bot,
//   ClipboardType,
//   Command,
//   Frame,
//   GalleryVerticalEnd,
//   Map,
//   PieChart,
//   Settings2,
//   SquareTerminal,
//   NotebookTabs,
//   NotebookTabsIcon,
//   FileUser,
//   BriefcaseBusinessIcon,
//   HomeIcon,
//   CarIcon,
//   HandCoinsIcon,
//   Users2Icon,
//   LucideNotebookPen,
//   MessageSquareWarning,
//   MessageSquareText,
//   Contact2Icon,
//   UserPlus2Icon,
// } from "lucide-react"

import { NavMain } from "@/components/nav-main.jsx"
import { NavProjects } from "@/components/nav-projects.jsx"
import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
// import { FaUsersCog } from "@/components/react-icons/fa";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { AdminSidebar } from "@/config/AdminSideBar"
import { useEffect } from "react"


export function AdminSidebar({ ...props }) {

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <div className="w-full mx-auto gap-2 flex justify-center item-center">
          <img
            src="/logo/PAR2.png"
            alt="Logo"
            className="h-10 w-10 mx-auto"
          />
          <h2 className="text-[1.1rem] font-mono font-semibold leading-5">Parv Financial Service</h2>
        </div>

      </SidebarHeader>
      <SidebarContent>
        <NavMain items={AdminSidebar.navMain} />
        <NavProjects projects={AdminSidebar.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={AdminSidebar?.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
