"use client";
import { useEffect } from "react";
import { StepForm } from "@/comp/StepForm";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AccountCreationSchema } from "@/config/forms/AccountCreation";
import { getUserData, updateAccount } from "@/api/file_action";
import { useSearchParams } from "next/navigation";
import { useUserState } from "@/app/dashboard/store";

export default function Page() {
  const userState = useUserState();
  const params = useSearchParams();
  const [state, setState] = useState({});
  const username = params.get("username");
  useEffect(() => {
    userState.user.getIdToken().then((token) => {
      userState.setShowLoader(true);
      getUserData(token, username).then((res) => {
        userState.setShowLoader(false);
        console.log(res);
        delete res.profile.role;
        delete res.profile.username;
        setState(res.profile);
      });
    });
  }, []);

  const updateProfile = () => {
    const role = userState.profile.role;

    console.log(userState.profile, role);

    userState.user.getIdToken().then((token) => {
      userState.setShowLoader(true);
      updateAccount(token, state, username).then((res) => {
        userState.setShowLoader(false);
        userState.setShowInfo(true);
        if (res.type) {
          userState.setInfo({ desc: res.err });
        } else {
          userState.setInfo({ desc: res.msg });
        }
      });
    });

    // AccountCreationSchema.validate(state, { abortEarly: false })
    // .then(async () => {
    // let data = cloneDeep(state);
    // removeProperty(data, "type");
    // removeProperty(data, "options");
    // userState.setShowLoader(true);

    // createAccount(token, data).then((res) => {
    //   if (res.msg) {
    //     userState.setShowLoader(false);
    //     userState.setShowInfo(true);
    //     userState.setInfo({
    //       desc: res.msg,
    //       highlight: res.username,
    //     });
    //   }
    // });
    // })
    // .catch((e) => {
    //   let newState = updateErrors(state, validationErrors, e);

    //   // we are storing the reference of the current error so that on next submission of form we can remove it
    //   setValidationErrors(e.inner);

    //   // finally we are updating the state
    //   setState(newState);
    // });
  };

  return (
    <div className="flex p-4 items-start justify-center flex-col">
      <header className="font-semibold text-2xl p-4">Profile</header>
      {state?.info ? (
        <StepForm setState={setState} state={state} step={0} />
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex items-center justify-end w-full">
        <Button onClick={() => updateProfile()}>Submit</Button>
      </div>
    </div>
  );
}
