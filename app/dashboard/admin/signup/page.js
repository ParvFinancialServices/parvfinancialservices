"use client";
import { createAccount } from "@/api/file_action";
import { StepForm } from "@/comp/StepForm";
import { AdminAccountCreation } from "@/config/forms/AccountCreation";
import { useState } from "react";
import { useUserState } from "../../store";
import { removeProperty } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cloneDeep } from "lodash";

export default function Page() {
  const [state, setState] = useState(AdminAccountCreation);
  const userState = useUserState();
  let onSubmit = () => {
    console.log(state);
    userState.user.getIdToken().then(function (token) {
      let data = cloneDeep(state);
      removeProperty(data, "type");
      removeProperty(data, "options");
      userState.setShowLoader(true);
      createAccount(token, data).then((res) => {
        if (res.msg) {
          userState.setShowLoader(false);
          userState.setShowInfo(true);
          userState.setInfo({
            desc: res.msg,
            highlight: res.username,
          });
        }
      });
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
