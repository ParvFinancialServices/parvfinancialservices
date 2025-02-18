import { NavMain } from "@/components/nav-main.jsx"
import { NavProjects } from "@/components/nav-projects.jsx"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { AdminSidebar } from "@/config/AdminSideBar"


export function AdminSidebar({ ...props }) {

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
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
