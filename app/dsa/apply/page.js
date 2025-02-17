"use client";

import { createDSAAccount } from "@/api/file_action";
import Footer from "@/comp/Home/Footer";
import NavbarNew from "@/comp/Navbar/Navbar";
import { StepForm } from "@/comp/StepForm";
import { Button } from "@/components/ui/button";
import { AccountCreationSchema, DSAAccountCreation } from "@/config/forms/AccountCreation";
import { updateErrors } from "@/lib/utils";
import { cloneDeep } from "lodash";
import { useState } from "react";

const ApplyForDSA = () => {
  const [state, setState] = useState(DSAAccountCreation);
  const [validationErrors, setValidationErrors] = useState([]);

  const onSubmit = async (e) => {
    if (process.env.NEXT_PUBLIC_TEST_MODE == "true") {
      let data = cloneDeep(state);
      removeProperty(data, "type");
      removeProperty(data, "options");
      createDSAAccount(state);
    } else {
      AccountCreationSchema.validate(state, { abortEarly: false })
        .then(async () => {
          let data = cloneDeep(state);
          removeProperty(data, "type");
          removeProperty(data, "options");
          createDSAAccount(state);
        })
        .catch((e) => {
          let newState = updateErrors(state, validationErrors, e);

          // we are storing the reference of the current error so that on next submission of form we can remove it
          setValidationErrors(e.inner);

          // finally we are updating the state
          setState(newState);
        });
    }
  };
  return (
    <div>
      <NavbarNew />
      <section className="flex flex-col p-4 items-center mt-[100px]">
        <header className="font-semibold text-2xl p-4">Create Account</header>
        <div className="p-4 max-w-[60vw] min-w-[300px] flex items-center justify-center flex-col">
          <StepForm state={state} setState={setState} step={0} />
          <div className="flex items-center justify-end p-4 w-full">
          <Button type="button" onClick={onSubmit}>
            submit
          </Button>
        </div>
        </div>
       
      </section>
      <Footer />
    </div>
  );
};

export default ApplyForDSA;
