"use client";
import { getUserDataByToken } from "@/api/file_action";
import { AppSidebar } from "@/comp/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { useUserState } from "./store";
import { useEffect } from "react";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import app from "@/lib/firebaseConfig";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { makeBreadcrumItem } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const breadcrumList = pathname.split("/").slice(3);
  let userState = useUserState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    if (typeof window !== "undefined") {
      let token;
      if (userState.user.hasOwnProperty("uid")) {
        userState.user.getIdToken().then((token) => {
          getUserDataByToken(token).then((res) => {
            console.log(res);
            userState.setProfile(res.profile);
            setIsLoading(false);
          });
        });
      } else {
        const auth = getAuth(app);
        localStorage && (token = localStorage.getItem("token"));
        // console.log("token", token);
        signInWithCustomToken(auth, token)
          .then(async (userCredentials) => {
            let user = userCredentials.user;
            let token = await user.getIdToken();
            // localStorage && localStorage.setItem("token", token);
            userState.setUser(user);
            getUserDataByToken(token).then((res) => {
              console.log(res);
              userState.setProfile(res.profile);
              setIsLoading(false);
            });
          })
          .catch((err) => {
            router.push("/login");
          });
      }
    }
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar state={userState} />
      <Toaster />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumList.map((e, ind) => (
                  <span
                    key={e}
                    className="flex items-center justify-center gap-2"
                  >
                    <BreadcrumbItem className="hidden md:block">
                      {makeBreadcrumItem(e)}
                    </BreadcrumbItem>
                    {ind < breadcrumList.length - 1 ? (
                      <BreadcrumbSeparator className="hidden md:block" />
                    ) : null}
                  </span>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {
          isLoading ? <Dialog open={isLoading}>
            <DialogContent className="sm:max-w-md">
              <div className="flex items-center justify-center">
                <Loader2Icon color="black" className="animate-spin" />
              </div>
            </DialogContent>
          </Dialog>
            :
            children
        }
      </SidebarInset>
      <Dialog open={userState.showLoader}>
        <DialogContent className="sm:max-w-md">
          <div className="flex items-center justify-center">
            <Loader2Icon color="black" className="animate-spin" />
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={userState.showInfo}>
        <DialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <DialogTitle>Congratulations</DialogTitle>
            <DialogDescription>{userState.info.desc}</DialogDescription>
          </AlertDialogHeader>
          <div className="flex items-center justify-center text-lg font-semibold space-x-2">
            {userState.info.highlight}
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                onClick={() => userState.setShowInfo(false)}
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
};

export default Layout;
