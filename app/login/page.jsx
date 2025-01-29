"use client";

import { login } from "@/api/file_action";
import { LoginForm } from "@/components/login-form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useState } from "react";
import { useAdminState } from "../dashboard/store";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import app from "@/lib/firebaseConfig";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const adminState = useAdminState();
  async function callIt() {
    const auth = getAuth(app);
    const res = await login(username, password);
    console.log(res);
    // await signInWithCustomToken(auth, token);
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
      adminState.setProfile(res.cred);
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
        <div className="flex justify-center gap-2 md:justify-start">
          {/* <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex w-28 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <img
              src="/logo/logo.jpg"
              alt="Logo"
              className="h-16"
              />
            </div>
          </a> */}
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {/* <LoginForm /> */}
            <Input onChange={(e) => setUsername(e.target.value)} />
            <Input onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={() => callIt()}>
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
