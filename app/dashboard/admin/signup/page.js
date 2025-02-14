"use client";
import { createAccount } from "@/api/file_action";
import { StepForm } from "@/comp/StepForm";
import { AccountCreation } from "@/config/forms/AdminAccountCreation";
import { useState } from "react";
import { useUserState } from "../../store";
import { removeProperty } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [state, setState] = useState(AccountCreation);
  const userState = useUserState();
  let onSubmit = () => {
    console.log(state);
    userState.user.getIdToken().then(function (token) {
      let data = deepClone(state);
      removeProperty(data, "type");
      removeProperty(data, "options");
      createAccount(token, data);
      // .then((res) => {
      //   console.log(res);
      //   userState.setProfile(res.profile);
      //   setIsLoading(false);
      // });
    });
  };

  return (
    <section className="flex flex-col p-4">
      <header className="font-semibold text-2xl p-4">Create Account</header>
      <div className="p-4">
        <StepForm state={state} setState={setState} step={0} />
      </div>
      <div className="flex items-center justify-end p-4">
        <Button type="button" onClick={onSubmit}>
          submit
        </Button>
      </div>
    </section>
  );
}
