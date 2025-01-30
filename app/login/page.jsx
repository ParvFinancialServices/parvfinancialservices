"use client";

import { login } from "@/api/file_action";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useState } from "react";
import { useAdminState } from "../dashboard/store";
import { useRouter } from "next/navigation";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import app from "@/lib/firebaseConfig";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const adminState = useAdminState();
  async function callIt() {
    const auth = getAuth(app);
    const res = await login(username, password);
    console.log(res);
    if (res.error) {
      throw error;
    } else {
      signInWithCustomToken(auth, res.token)
        .then((userCredentials) => console.log(userCredentials))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          // ...
        });
      adminState.setProfile(res.profile);
      router.push("/dashboard/admin/forms/personal_loan");
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
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <h1 className="text-3xl">Login</h1>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label htmlFor="username">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href="/forget-password">forget password?</Link>
            <Button type="button" onClick={() => callIt()}>
              submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
