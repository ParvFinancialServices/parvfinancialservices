"use client"

import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible" 
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({ items,}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-base font-medium">Dashboard</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} 
                // className={`${item?.isActive ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-white" : "hover:bg-zinc-200"}`}
                >
                  {item.icon && <item.icon />}
                  <a href={item.url}>
                    <span>{item.title}</span>
                  </a>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub >
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}
                    className="flex gap-1 items-center "
                     >
                      {/* {subItem?.icon && <subItem.icon size={17} className="text-sm"/>} */}
                      <SidebarMenuSubButton asChild 
                      className={`w-full ${subItem?.isActive ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-white" : "hover:bg-zinc-200"}`}>
                        {/* {subItem?.icon && <subItem.icon size={17}/>} */}
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

