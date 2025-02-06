"use client";
import { getUserData } from "@/api/file_action";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useAdminState } from "./store";
import { useEffect } from "react";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import app from "@/lib/firebaseConfig";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { makeBreadcrumItem } from "@/lib/utils";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const breadcrumList = pathname.split("/").slice(3);
  let AdminState = useAdminState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    if (typeof window !== "undefined") {
      let token;
      if (AdminState.user.hasOwnProperty("uid")) {
        AdminState.user.getIdToken().then((token) => {
          getUserData(token).then((res) => {
            console.log(res);
            AdminState.setProfile(res.profile);
            setIsLoading(false);
          });
        });
      } else {
        const auth = getAuth(app);
        localStorage && (token = localStorage.getItem("token"));
        console.log("token", token);
        signInWithCustomToken(auth, token).then(async (userCredentials) => {
          let user = userCredentials.user;
          let token = await user.getIdToken();
          // localStorage && localStorage.setItem("token", token);
          AdminState.setUser(user);
          getUserData(token).then((res) => {
            console.log(res);
            AdminState.setProfile(res.profile);
            setIsLoading(false);
          });
        });
      }
    }
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar state={AdminState} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumList.map((e, ind) => (
                  <>
                    <BreadcrumbItem className="hidden md:block" key={e}>
                      {makeBreadcrumItem(e)}
                    </BreadcrumbItem>
                    {ind < breadcrumList.length - 1 ? (
                      <BreadcrumbSeparator className="hidden md:block" />
                    ) : null}
                  </>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {isLoading ? <h1>Loading...</h1> : children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
