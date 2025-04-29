"use client";

import { login } from "@/api/file_action";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useState } from "react";
import { useUserState } from "../dashboard/store";
import { useRouter } from "next/navigation";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import app from "@/lib/firebaseConfig";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2Icon } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const userState = useUserState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  // async function callIt() {
  //   const auth = getAuth(app);
  //   // const res = await login(username, password);
  //   // setIsLoading(true);
  //   // console.log(res);
  //   // if (res.error) {
  //   //   // throw error;
  //   //   alert(res.error);

  //   setIsLoading(true); // Start loading before the async operation

  //   try {
  //     const res = await login(username, password);
  //     console.log(res);

  //     if (res.error) {
  //       alert(res.error);
  //     } else {
  //       // userState.setProfile(res.profile);
  //       signInWithCustomToken(auth, res.token)
  //         .then(async (userCredentials) => {
  //           let user = userCredentials.user;
  //           localStorage && localStorage.setItem("token", res.token);
  //           userState.setUser(user);

  //           switch (res.role) {
  //             case "Admin":
  //               router.push("/dashboard/forms/personal_loan");
  //               break;
  //             case "DSA":
  //               router.push("/dashboard/connector");
  //               break;
  //             case "Telecaller":
  //               router.push("/dashboard/telecaller");
  //               break;
  //             case "Field Staff":
  //               router.push("/dashboard/field-staff");
  //               break;
  //             // default:
  //             //   router.push("/dashboard/connector");
  //             //   break;
  //           }
  //         })
  //         .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           console.log(error);
  //         });
  //     }
  //   }
  //   catch (error) {
  //     console.error('Unexpected error:', error);
  //     alert('Something went wrong');
  //   } finally {
  //     setIsLoading(false); 
  //   }
  // }

  async function callIt() {
    const auth = getAuth(app);
    setIsLoading(true); // Start loading
  
    try {
      const res = await login(username, password);
      console.log(res);
  
      if (res.error) {
        alert(res.error);
      } else {
        // Await Firebase sign-in before continuing
        const userCredentials = await signInWithCustomToken(auth, res.token);
        const user = userCredentials.user;
  
        if (localStorage) {
          localStorage.setItem("token", res.token);
        }
  
        userState.setUser(user);
        // userState.setProfile(res.profile); // Uncomment if needed
  
        switch (res.role) {
          case "Admin":
            router.push("/dashboard/forms/personal_loan");
            break;
          case "DSA":
            router.push("/dashboard/connector");
            break;
          case "Telecaller":
            router.push("/dashboard/telecaller");
            break;
          case "Field Staff":
            router.push("/dashboard/field-staff");
            break;
          default:
            router.push("/dashboard/connector");
            break;
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false); 
    }
  }
  

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/auth/login.jpeg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <form
            className="flex flex-col gap-4 w-full max-w-xs items-start"
            onSubmit={async (e) => {
              e.preventDefault();
              await callIt();
            }}
          >
            <h1 className="text-3xl">Login</h1>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Label htmlFor="username">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link href="/forget-password" className="text-blue-900 underline">forget password?</Link>
            <Button type="submit" className="w-full">submit</Button>
          </form>
        </div>
      </div>
      <Dialog open={isLoading}>
        <DialogContent className="sm:max-w-md">
          <div className="flex items-center justify-center">
            <Loader2Icon color="black" className="animate-spin" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
